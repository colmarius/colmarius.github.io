# Plan: Add Mermaid Diagram Support for Blog Posts

## Status
- **Status**: Todo
- **Created**: 2025-11-08
- **Priority**: Medium

## Context
The blog posts already contain mermaid code blocks (e.g., `amp-power-patterns.md`, `coding-with-agents-2025.md`, `agent-planning-workflow.md`, `what-is-an-agent.md`) but there's no rendering support. Currently, these are likely displayed as plain code blocks.

## Current State
- **Stack**: Astro v5 + React 19
- **Markdown rendering**: Uses Astro's built-in `render()` function from Content Collections API
- **No Mermaid dependencies**: `npm list | grep mermaid` returns nothing
- **Existing posts** with mermaid blocks in `/src/content/posts/`

## Goal
Enable Mermaid diagram rendering in markdown blog posts with minimal configuration.

## Implementation Steps

### 1. Add Client-Side Script to PostLayout
- Add inline script to `/src/layouts/PostLayout.astro`
- Script detects `pre > code.language-mermaid` blocks
- Replaces with `<div class="mermaid">` containing the code
- Lazy-loads Mermaid from CDN (only if diagrams exist)

### 2. Add Responsive Styling
- Add global CSS for `.mermaid svg` to ensure diagrams are responsive
- Place in PostLayout or global styles

### 3. Test
- Run dev server: `npm run dev`
- Check all 4 existing posts with mermaid blocks render correctly
- Build: `npm run build`
- Preview: `npm run preview`
- Verify diagrams render in production build

## Implementation Notes

### Client-Side Approach (Oracle-Recommended)
**Why:** Zero build changes, no plugins, GitHub Pages-compatible, lazy-loads only when needed

**Script to add before `</Layout>` in PostLayout.astro:**

```astro
<script is:inline type="module">
  async function renderMermaid() {
    const codes = document.querySelectorAll('pre > code.language-mermaid');
    if (codes.length === 0 && !document.querySelector('.mermaid')) return;

    // Replace code fences with <div class="mermaid"> blocks
    for (const code of codes) {
      const pre = code.closest('pre');
      const div = document.createElement('div');
      div.className = 'mermaid';
      div.textContent = code.textContent || '';
      pre?.replaceWith(div);
    }

    // Lazy-load Mermaid only if needed
    const { default: mermaid } = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
    });
    mermaid.run({ querySelector: '.mermaid' });
  }

  // Initial load and Astro navigations
  document.addEventListener('DOMContentLoaded', renderMermaid, { once: true });
  document.addEventListener('astro:page-load', renderMermaid);
</script>

<style is:global>
  .mermaid svg { display: block; max-width: 100%; height: auto; }
</style>
```

### Key Principles
- **Zero dependencies**: No npm packages, uses CDN
- **Zero config**: No build pipeline changes
- **Lazy loading**: Only loads Mermaid on pages with diagrams
- **GitHub Pages compatible**: Pure client-side, no SSR

### Trade-offs
- Small layout shift when diagrams render (acceptable for blog)
- Requires JavaScript enabled (acceptable for modern web)

### Testing Strategy
- Verify existing posts with mermaid blocks: `amp-power-patterns.md`, `coding-with-agents-2025.md`, `agent-planning-workflow.md`, `what-is-an-agent.md`
- Check responsive behavior on mobile
- Verify no console errors

## Blockers
None identified

## Related Files
- `/astro.config.mjs` - Markdown configuration
- `/src/pages/posts/[slug].astro` - Post rendering
- `/src/layouts/PostLayout.astro` - Layout wrapper
- `/src/content/posts/*.md` - Posts with existing mermaid blocks
