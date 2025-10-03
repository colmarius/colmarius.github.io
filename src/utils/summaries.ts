type SummaryRef =
	| { kind: "single"; singlePath: string }
	| { kind: "series"; seriesPrefix: string };

type SummaryMetadata = {
	title: string;
	resourceId: number;
	series?: string;
	episode?: number;
	date: string;
};

const summaryFiles = import.meta.glob<string>("/src/data/summaries/**/*.md", {
	as: "raw",
	eager: false,
});

function parseFrontmatter(markdown: string): {
	metadata: SummaryMetadata;
	content: string;
} {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = markdown.match(frontmatterRegex);

	if (!match) {
		throw new Error("No frontmatter found");
	}

	const [, frontmatter, content] = match;
	const metadata: Partial<SummaryMetadata> = {};

	for (const line of frontmatter.split("\n")) {
		const colonIndex = line.indexOf(":");
		if (colonIndex === -1) continue;

		const key = line.slice(0, colonIndex).trim();
		const value = line.slice(colonIndex + 1).trim();

		if (key === "title") {
			metadata.title = value.replace(/^["']|["']$/g, "");
		} else if (key === "resourceId") {
			metadata.resourceId = Number.parseInt(value, 10);
		} else if (key === "series") {
			metadata.series = value.replace(/^["']|["']$/g, "");
		} else if (key === "episode") {
			metadata.episode = Number.parseInt(value, 10);
		} else if (key === "date") {
			metadata.date = value.replace(/^["']|["']$/g, "");
		}
	}

	return {
		metadata: metadata as SummaryMetadata,
		content: content.trim(),
	};
}

async function loadMarkdown(path: string): Promise<string> {
	const loader = summaryFiles[path];
	if (!loader) {
		throw new Error(`Summary not found: ${path}`);
	}
	return await loader();
}

async function resolveSummaryRef(
	resourceId: number,
): Promise<SummaryRef | null> {
	try {
		const paths = Object.keys(summaryFiles);
		const seriesMap = new Map<string, number>();

		for (const path of paths) {
			const markdown = await loadMarkdown(path);
			const { metadata } = parseFrontmatter(markdown);

			if (metadata.resourceId === resourceId) {
				if (metadata.series) {
					const prefix = path.substring(
						0,
						path.lastIndexOf("/") + 1,
					);
					seriesMap.set(prefix, (seriesMap.get(prefix) || 0) + 1);
				} else {
					return { kind: "single", singlePath: path };
				}
			}
		}

		if (seriesMap.size > 0) {
			const [prefix] = Array.from(seriesMap.entries()).sort(
				(a, b) => b[1] - a[1],
			)[0];
			return { kind: "series", seriesPrefix: prefix };
		}

		return null;
	} catch {
		return null;
	}
}

async function listSeries(
	seriesName: string,
): Promise<Array<{ path: string; episode: number; title: string }>> {
	try {
		const paths = Object.keys(summaryFiles);
		const episodes: Array<{ path: string; episode: number; title: string }> =
			[];

		for (const path of paths) {
			const markdown = await loadMarkdown(path);
			const { metadata } = parseFrontmatter(markdown);

			if (metadata.series === seriesName && metadata.episode != null) {
				episodes.push({
					path,
					episode: metadata.episode,
					title: metadata.title,
				});
			}
		}

		return episodes.sort((a, b) => a.episode - b.episode);
	} catch {
		return [];
	}
}

export { parseFrontmatter, loadMarkdown, resolveSummaryRef, listSeries };
export type { SummaryRef, SummaryMetadata };
