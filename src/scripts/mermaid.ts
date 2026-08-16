import { mermaidConfig } from './mermaid-config';

const mermaidUrl =
  'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
const importMermaid = new Function('url', 'return import(url)') as (
  url: string,
) => Promise<
  typeof import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs')
>;

const MERMAID_CODE_SELECTORS = [
  'pre > code.language-mermaid',
  'pre > code.lang-mermaid',
  'pre[data-language="mermaid"] > code',
  'pre[class*="language-mermaid"] > code',
].join(', ');

const MERMAID_KEYWORDS = [
  'flowchart',
  'graph',
  'sequenceDiagram',
  'classDiagram',
  'stateDiagram',
  'erDiagram',
  'journey',
  'gantt',
  'pie',
  'gitGraph',
];

/**
 * Find Mermaid code blocks under `root`, replace them with rendered diagrams.
 * Defaults to the whole document; pass an element to render a scoped region
 * (e.g. a single slide).
 */
export async function renderMermaid(root: ParentNode = document) {
  // Prefer explicit language markers
  let codes = Array.from(root.querySelectorAll(MERMAID_CODE_SELECTORS));

  if (codes.length === 0) {
    // Fallback: keyword sniff
    codes = Array.from(root.querySelectorAll('pre > code')).filter((code) => {
      const text = code.textContent?.trim() || '';
      return MERMAID_KEYWORDS.some((keyword) => text.startsWith(keyword));
    });
  }

  if (codes.length === 0 && !root.querySelector('.mermaid')) return;

  for (const code of codes) {
    const pre = code.closest('pre');
    const div = document.createElement('div');
    div.className = 'mermaid mermaid-loading';
    div.textContent = code.textContent || '';
    pre?.replaceWith(div);
  }

  const { default: mermaid } = await importMermaid(mermaidUrl);
  mermaid.initialize(mermaidConfig);

  const nodes = Array.from(root.querySelectorAll('.mermaid'));
  if (nodes.length > 0) {
    await mermaid.run({ nodes });
  }

  // Remove loading class from all mermaid elements (including pre-rendered/cloned ones)
  root.querySelectorAll('.mermaid-loading').forEach((el) => {
    el.classList.remove('mermaid-loading');
  });
}
