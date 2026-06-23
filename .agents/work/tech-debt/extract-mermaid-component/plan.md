# Extract Shared Mermaid Component

**Status**: Completed
**Priority**: Medium
**Created**: 2025-01-08
**Completed**: 2025-01-08
**Oracle Reviewed**: Yes - Approved simplified approach (no props, all CSS included)

## Goal

Extract Mermaid diagram rendering into a reusable Astro component that can be shared between PostLayout and slides pages, eliminating code duplication and centralizing Mermaid-related logic.

## Current State

- `src/scripts/mermaid.ts` contains `renderMermaid()` function
- `PostLayout.astro` has:
  - Mermaid CSS (`.mermaid`, `.mermaid-loading`)
  - FOUC prevention CSS (`pre:has(> code.language-mermaid)`)
  - Script import that calls `renderMermaid()`
- `slides.astro` has:
  - Mermaid CSS (`.mermaid` only, no `.mermaid-loading`)
  - Script import that calls `renderMermaid()`
  - Manual class removal in `splitIntoSlides()`

## Proposed Solution

Create `src/components/MermaidRenderer.astro` that encapsulates:

1. All Mermaid-related CSS (with a prop to control FOUC prevention)
2. Script import and renderMermaid() call
3. Conditional FOUC prevention based on usage context

## Steps

1. **Create MermaidRenderer component**
   - Location: `src/components/MermaidRenderer.astro`
   - Props: `{ preventFOUC?: boolean }` (default: true)
   - Contains: CSS styles + script logic

2. **Update PostLayout.astro**
   - Import and use `<MermaidRenderer />`
   - Remove duplicated CSS and script
   - Keep `preventFOUC={true}` (default)

3. **Update slides.astro**
   - Import and use `<MermaidRenderer preventFOUC={false} />`
   - Remove duplicated CSS and script
   - Keep manual cleanup in `splitIntoSlides()` if needed

4. **Clean up**
   - Remove unused code
   - Test both pages

## Implementation Notes

### Component Structure

```astro
---
type Props = {
  preventFOUC?: boolean;
};

const { preventFOUC = true } = Astro.props;
---

<script>
  import { renderMermaid } from '@scripts/mermaid';
  renderMermaid();
</script>

<style is:global>
  /* Core Mermaid styles - always included */
  .mermaid {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .mermaid svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* FOUC prevention - conditionally included via prop */
  {preventFOUC && `
    pre:has(> code.language-mermaid),
    pre:has(> code.lang-mermaid) {
      display: none;
    }
    pre > code.language-mermaid,
    pre > code.lang-mermaid {
      display: none;
    }
    .mermaid-loading {
      opacity: 0;
      min-height: 200px;
    }
  `}
</style>
```

### Key Decisions

1. **Why a component?**
   - Centralizes all Mermaid logic
   - Reduces duplication
   - Easier to maintain
   - Clear separation of concerns

2. **Why the `preventFOUC` prop?**
   - PostLayout needs FOUC prevention (renders code blocks → Mermaid)
   - Slides don't need it (pre-rendered Mermaid gets cloned)
   - Single component handles both use cases

3. **What stays in slides.astro?**
   - The `splitIntoSlides()` logic (specific to slides)
   - Manual `mermaid-loading` class removal (specific to slides)

4. **Alternative: Conditional CSS in Astro**
   - Astro doesn't support dynamic CSS well
   - Better to use class-based approach or accept small duplication
   - **Revised approach**: Include all CSS, accept slides has unused rules

### Final Implementation (Oracle-Approved)

**Keep it simple - no props needed:**

1. Component includes ALL CSS (FOUC prevention + core styles)
2. Both pages use the exact same component
3. Slides page just doesn't have the code blocks that trigger FOUC prevention
4. Unused CSS is negligible overhead
5. Include event wiring for DOMContentLoaded and astro:page-load

```astro
---
// src/components/MermaidRenderer.astro
---

<script>
  import { renderMermaid } from '@scripts/mermaid';

  const run = () => renderMermaid();

  // Initial load + Astro client navigations
  document.addEventListener('DOMContentLoaded', run, { once: true });
  document.addEventListener('astro:page-load', run);
</script>

<style is:global>
  /* Hide raw Mermaid code blocks before JS runs (FOUC prevention) */
  pre:has(> code.language-mermaid),
  pre:has(> code.lang-mermaid) {
    display: none;
  }
  /* Fallback for browsers without :has() */
  pre > code.language-mermaid,
  pre > code.lang-mermaid {
    display: none;
  }

  /* Mermaid diagram styles */
  .mermaid {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .mermaid svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .mermaid-loading {
    opacity: 0;
    min-height: 200px;
  }
</style>
```

**Important**: In slides.astro, place `<MermaidRenderer />` AFTER the inline `splitIntoSlides` script to ensure rendering happens after cloning.

## Testing

1. Navigate to post page: <http://localhost:4321/posts/what-is-an-agent>
   - Mermaid diagram should render
   - No FOUC of raw code

2. Navigate to slides page: <http://localhost:4321/posts/what-is-an-agent/slides#3>
   - Mermaid diagram should render
   - Diagram visible immediately

3. Verify both in dev and production builds

## Risks & Considerations

- **Risk**: Breaking existing functionality
  - **Mitigation**: Test both pages after each change

- **Risk**: CSS conflicts
  - **Mitigation**: Keep `is:global` for backward compatibility

- **Trade-off**: Slides page has unused FOUC prevention CSS
  - **Acceptable**: Minimal overhead, simpler implementation

## Success Criteria

- [ ] Single MermaidRenderer component created
- [ ] PostLayout uses component (no duplicated code)
- [ ] Slides page uses component (no duplicated code)
- [ ] Both pages render Mermaid correctly
- [ ] No FOUC on post page
- [ ] Code is simpler and more maintainable

## Oracle Feedback Summary

✅ **Approved** - Simple approach without props

- Include all CSS in component (FOUC prevention + core styles)
- Keep event wiring (DOMContentLoaded + astro:page-load)
- In slides.astro, place component AFTER splitIntoSlides script
- Optional: Remove manual mermaid-loading cleanup in slides (lines 114-118, 184-187) since renderMermaid handles it

## Next Actions

1. ~~Consult Oracle for feedback on this approach~~ ✅ Done
2. Implement MermaidRenderer component
3. Update PostLayout.astro
4. Update slides.astro (place after splitIntoSlides)
5. Test and verify
