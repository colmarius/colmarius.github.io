type SummaryRef =
  | { kind: 'single'; singlePath: string }
  | { kind: 'series'; seriesPrefix: string; seriesName: string };

type SummaryMetadata = {
  title: string;
  resourceId: number;
  series?: string;
  episode?: number;
  date: string;
};

const summaryFiles = import.meta.glob<string>('/src/data/summaries/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: false,
});

// Cache markdown loads
const markdownCache = new Map<string, Promise<string>>();

// Cache summary ref lookups
const refCache = new Map<number, Promise<SummaryRef | null>>();

// Clear caches on HMR to avoid stale data in dev
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    markdownCache.clear();
    refCache.clear();
  });
}

function parseFrontmatter(markdown: string): {
  metadata: SummaryMetadata;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    throw new Error('No frontmatter found');
  }

  const [, frontmatter, content] = match;
  const metadata: Partial<SummaryMetadata> = {};

  for (const line of frontmatter.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    if (key === 'title') {
      metadata.title = value.replace(/^["']|["']$/g, '');
    } else if (key === 'resourceId') {
      const raw = value.replace(/^["']|["']$/g, '');
      const n = Number.parseInt(raw, 10);
      if (!Number.isNaN(n)) {
        metadata.resourceId = n;
      }
    } else if (key === 'series') {
      metadata.series = value.replace(/^["']|["']$/g, '');
    } else if (key === 'episode') {
      const raw = value.replace(/^["']|["']$/g, '');
      const n = Number.parseInt(raw, 10);
      if (!Number.isNaN(n)) {
        metadata.episode = n;
      }
    } else if (key === 'date') {
      metadata.date = value.replace(/^["']|["']$/g, '');
    }
  }

  return {
    metadata: metadata as SummaryMetadata,
    content: content.trim(),
  };
}

async function loadMarkdown(path: string): Promise<string> {
  let p = markdownCache.get(path);
  if (!p) {
    const loader = summaryFiles[path];
    if (!loader) {
      throw new Error(`Summary not found: ${path}`);
    }
    p = loader().catch((err) => {
      markdownCache.delete(path);
      throw err;
    });
    markdownCache.set(path, p);
  }
  return await p;
}

async function resolveSummaryRef(
  resourceId: number,
): Promise<SummaryRef | null> {
  let p = refCache.get(resourceId);
  if (!p) {
    const execute = async (): Promise<SummaryRef | null> => {
      const paths = Object.keys(summaryFiles);
      const seriesMap = new Map<
        string,
        { count: number; seriesName: string }
      >();

      for (const path of paths) {
        try {
          const markdown = await loadMarkdown(path);
          const { metadata } = parseFrontmatter(markdown);

          if (metadata.resourceId === resourceId) {
            if (metadata.series) {
              const prefix = path.substring(0, path.lastIndexOf('/') + 1);
              const existing = seriesMap.get(prefix);
              seriesMap.set(prefix, {
                count: (existing?.count || 0) + 1,
                seriesName: metadata.series,
              });
            } else {
              return { kind: 'single' as const, singlePath: path };
            }
          }
        } catch {
          // Ignore this file and continue
        }
      }

      if (seriesMap.size > 0) {
        const [prefix, data] = Array.from(seriesMap.entries()).sort(
          (a, b) => b[1].count - a[1].count,
        )[0];
        return {
          kind: 'series' as const,
          seriesPrefix: prefix,
          seriesName: data.seriesName,
        };
      }

      return null;
    };

    p = execute().catch((err) => {
      refCache.delete(resourceId);
      throw err;
    }) as Promise<SummaryRef | null>;
    refCache.set(resourceId, p);
  }
  return p;
}

async function listSeries(
  seriesName: string,
  seriesPrefix?: string,
): Promise<Array<{ path: string; episode: number; title: string }>> {
  const paths = Object.keys(summaryFiles).filter(
    (p) => !seriesPrefix || p.startsWith(seriesPrefix),
  );
  const episodes: Array<{ path: string; episode: number; title: string }> = [];

  await Promise.allSettled(
    paths.map(async (path) => {
      try {
        const markdown = await loadMarkdown(path);
        const { metadata } = parseFrontmatter(markdown);

        if (
          metadata.series === seriesName &&
          metadata.episode != null &&
          !Number.isNaN(metadata.episode)
        ) {
          episodes.push({
            path,
            episode: metadata.episode,
            title: metadata.title,
          });
        }
      } catch {
        // Ignore this file
      }
    }),
  );

  return episodes.sort((a, b) => a.episode - b.episode);
}

export { parseFrontmatter, loadMarkdown, resolveSummaryRef, listSeries };
export type { SummaryRef, SummaryMetadata };
