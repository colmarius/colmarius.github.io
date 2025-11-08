export async function renderMermaid() {
  const codes = Array.from(document.querySelectorAll('pre > code')).filter(code => {
    const text = code.textContent?.trim() || '';
    return text.startsWith('flowchart') || text.startsWith('graph') ||
           text.startsWith('sequenceDiagram') || text.startsWith('classDiagram') ||
           text.startsWith('stateDiagram') || text.startsWith('erDiagram') ||
           text.startsWith('journey') || text.startsWith('gantt') ||
           text.startsWith('pie') || text.startsWith('gitGraph');
  });

  if (codes.length === 0 && !document.querySelector('.mermaid')) return;

  for (const code of codes) {
    const pre = code.closest('pre');
    const div = document.createElement('div');
    div.className = 'mermaid';
    div.textContent = code.textContent || '';
    pre?.replaceWith(div);
  }

  const { default: mermaid } = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
  });
  mermaid.run({ querySelector: '.mermaid' });
}
