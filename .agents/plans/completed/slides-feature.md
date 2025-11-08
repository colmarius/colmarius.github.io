# Slides Feature Implementation Plan

## Goal

Enable posts to be viewed as interactive slide presentations, accessible from the post page itself. Transform markdown content into presentation format suitable for talks and presentations.

## Context

- Posts section already implemented using Astro Content Collections
- Posts are written in markdown with frontmatter
- Need to convert existing markdown structure to slide format
- Want to keep content in single markdown file (DRY principle)
- Slides should be accessible via link on post page

## Oracle Review - Simplified Approach

**Keep It Minimal**: No libraries needed. Simple client-side script to split by H2 and navigate.

**What to Build (MVP)**:

1. Single route: `src/pages/posts/[slug]/slides.astro`
2. Render full post HTML, group by H2 client-side
3. Simple left/right navigation (keyboard + buttons)
4. Allow vertical scrolling for long content
5. Add "View as Slides" link in post pages

**What to Defer**:

- Reveal.js, Impress, Remark, Sli.dev (all libraries)
- Themes, transitions, fragments, progress bars
- PDF export, speaker notes, presenter mode
- Swipe gestures, overview mode, custom layouts
- Per-slide styling/frontmatter

**Key Principles**:

- Use H2 as slide delimiter (semantic, already in posts)
- One slide = one H2 section (including its H3/H4)
- Allow overflow-y: auto for long slides (acceptable for MVP)
- ~100 lines of code total (Astro + CSS + vanilla JS)
- No new dependencies

**Content Guidelines**:

- Keep H2 sections concise
- Prefer bullet points over long paragraphs
- Images scale to container width
- Code blocks and tables scroll horizontally if needed

**When to Revisit**:

- Need PDF export or speaker notes
- Want themed decks with transitions
- Have >10 presentations and need polish
- Need presenter mode or remote control

## Implementation Notes

**Files to Create/Update:**

1. **NEW**: `src/pages/posts/[slug]/slides.astro` - Slide view (see template below)
2. **UPDATE**: `src/pages/posts/[slug].astro` - Add "View as Slides" link

**Implementation Details:**

The slides.astro page should:

- Load post from content collection
- Render full post HTML into hidden container
- Use client-side script to group content by H2 tags
- Show one slide at a time with simple navigation
- Update URL hash (#1, #2, etc.) for sharing
- Support arrow keys and on-screen buttons

**Key Technical Points:**

- H2 splitting: Walk DOM nodes, create new slide on each H2
- Navigation: Track index, toggle `.active` class, update hash
- Styling: Fixed topbar, centered container, overflow-y for long content
- No hydration needed: Use `is:inline` script for vanilla JS
- Accessibility: ARIA labels on buttons, keyboard support

**Content Splitting Logic:**

```javascript
// Pseudo-code
for each node in post HTML:
  if node is H2:
    create new slide
    add H2 to slide
  else:
    add node to current slide (or first slide if none)
```

**Styling Approach:**

- Dark theme matching site (use CSS variables)
- Fixed topbar: back link + title + slide counter
- Slide container: max-width, centered, rounded corners
- Controls: fixed bottom-right, arrow buttons
- Content: inherit post typography, handle overflow

**Template Structure:**

```astro
---
// Get post from content collection
// Render it once
---
<html>
  <head>
    <!-- Minimal styles -->
  </head>
  <body>
    <!-- Topbar with back link, title, counter -->
    <!-- Slides container (empty, populated by script) -->
    <!-- Hidden source article (full post HTML) -->
    <!-- Navigation controls -->
    <!-- Inline script to split and navigate -->
  </body>
</html>
```

**Testing:**

- Verify H2 splitting works correctly
- Test keyboard navigation (left/right arrows)
- Test on mobile (touch buttons)
- Verify long content scrolls within slide
- Test with posts that have no H2s (whole post = one slide)
- Run `npm run build` to ensure static generation works

**Edge Cases:**

- Post with no H2s → Single slide with all content
- Empty H2 sections → Empty slide (acceptable)
- Very long code blocks → Horizontal scroll
- Large images → Scale to max-width: 100%

## Success Criteria

- [ ] `/posts/[slug]/slides` route exists for each non-draft post
- [ ] H2 headers correctly split content into slides
- [ ] Navigation works with keyboard (arrow keys) and on-screen buttons
- [ ] Long content scrolls within slide (overflow-y: auto)
- [ ] URL hash updates when navigating (#1, #2, etc.)
- [ ] "View as Slides" link added to post pages
- [ ] No new dependencies added
- [ ] Site builds without errors (`npm run build`)
- [ ] At least one existing post tested as slides

## Status

- Created: 2025-11-06
- Oracle Review: ✅ Completed - Simplified to minimal client-side approach
- Status: ✅ Completed
- Effort: S (1-2 hours)
- Completed: 2025-11-06

## Implementation Results

All success criteria met:

- ✅ `/posts/[slug]/slides` route exists for each non-draft post
- ✅ H2 headers correctly split content into slides
- ✅ Navigation works with keyboard (arrow keys) and on-screen buttons
- ✅ Long content scrolls within slide (overflow-y: auto)
- ✅ URL hash updates when navigating (#1, #2, etc.)
- ✅ "View as Slides" link added to post pages
- ✅ No new dependencies added
- ✅ Site builds without errors (`npm run build`)
- ✅ Dark theme with site colors applied
- ✅ Responsive design for mobile

Files created:

- `src/pages/posts/[slug]/slides.astro` - Main slides view

Files updated:

- `src/layouts/PostLayout.astro` - Added slug prop and "View as Slides" link
- `src/pages/posts/[slug].astro` - Pass slug to layout
