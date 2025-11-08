# AI Disclaimer Feature

## Status: ✅ COMPLETED

## Goal

Add a minimalistic, non-invasive AI disclaimer to the website that transparently indicates the site is managed by Amp coding agent, with links to the GitHub repo and ampcode.com.

## Results

Successfully implemented AI disclaimer in footer:
- Updated `src/layouts/Layout.astro` footer with responsive flex layout
- Added disclaimer text: "AI-assisted: implementation and content are managed by Amp (coding agent). Source on GitHub."
- Links to [ampcode.com](https://ampcode.com) and [GitHub repo](https://github.com/colmarius/colmarius.github.io)
- Responsive design: stacks on mobile, inline with middot separator on desktop
- Subtle styling with muted colors (`text-gray-500`), dotted underlines with hover effects
- Build successful with no errors
- Committed in: `207aace`

## Oracle Recommendation Summary

- **Placement**: Footer inline with copyright (Layout.astro)
- **Design**: Muted colors, small text, dotted underlines, always visible
- **Copy**: "AI-assisted: implementation and content are managed by Amp (coding agent). Source on GitHub."
- **Effort**: Small (~30 minutes)

## Implementation Steps

### 1. Update Footer in Layout.astro

- Replace single-line footer with flex layout (stacks on mobile, inline on desktop)
- Add middot separator for desktop
- Add disclaimer text with two links:
  - "Amp" → <https://ampcode.com>
  - "Source on GitHub" → <https://github.com/colmarius/colmarius.github.io>
- Style: `text-gray-500`, dotted underlines, hover effects

### 2. Visual Design

- Use Tailwind utilities for responsive flex layout
- Color hierarchy:
  - Copyright: `text-gray-600`
  - Separator: `text-gray-400`
  - Disclaimer: `text-gray-500`
- Links: `underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-gray-700`

### 3. Testing

- Verify layout on mobile (stacked) and desktop (inline)
- Check link behavior (opens in new tab with proper security)
- Ensure text hierarchy feels natural

## Files to Modify

- `src/layouts/Layout.astro` (footer section only)

## Implementation Notes

- Keep scope minimal - single footer update
- No new components needed
- Use existing Tailwind patterns
- Oracle suggests dotted underlines feel more subtle than solid
- Stacking on mobile prevents cramping

## Links

- GitHub repo: <https://github.com/colmarius/colmarius.github.io>
- Amp: <https://ampcode.com>

## Future Enhancements (Optional)

- Could add `<details>/<summary>` for expanded info about workflow
- Could create dedicated "How this site is built" page
- Could add workflow diagram if interest from recruiters/clients
