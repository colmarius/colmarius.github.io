# Back Navigation for Single Post Page

## Goal

Add back navigation to individual post pages (`/posts/[slug]`) similar to the resources sub-pages, maintaining consistent styling and reusing components where possible.

## Current State

- **Resources sub-pages** have back navigation via `ResourcesNav.astro` component
  - Simple anchor link (`<a href="/resources">`)
  - Animated arrow SVG with hover effect
  - Styled with: text-gray-500, hover states, focus-visible rings
  - Clean, accessible implementation

- **Post pages** currently lack back navigation
  - Layout in `PostLayout.astro` (lines 1-232)
  - No navigation component included
  - User must use browser back or main nav to return to `/posts`

## Implementation Options

### Option 1: Create Reusable BackNav Component

Extract the back button logic from ResourcesNav into a generic `BackNav.astro` component that accepts:

- `href` prop (e.g., "/posts", "/resources")
- `label` prop (e.g., "Back to Posts", "Back to Resources")

### Option 2: Create Posts-Specific Nav Component

Create `PostNav.astro` similar to `ResourcesNav.astro` but specific to posts (no tabs needed).

### Option 3: Add Back Button Directly to PostLayout

Add the back navigation HTML directly into PostLayout.astro before the article content.

## Recommended Approach (Option 1 - Oracle Approved)

**Oracle Feedback Summary:**

- ✅ Option 1 is the best approach for maintainability and consistency
- Keep BackNav as **anchor-only** (no `<nav>` wrapper) to avoid nested semantics
- Let callers control spacing and wrapper elements
- Place inside article container for proper width alignment

**Implementation Details:**

1. Create `src/components/BackNav.astro` as a reusable anchor component
   - Props: `href` (required), `label` (default: "Back"), `class` (optional)
   - Same SVG and styling as current ResourcesNav back link
2. Integrate in `PostLayout.astro`:
   - Wrap BackNav in `<nav class="mb-10" aria-label="Back">` for semantics
   - Place inside `<article>`, before `<header>` to align with content width
   - Use `href="/posts"` and `label="Back to Posts"`
3. Optionally refactor `ResourcesNav.astro`:
   - Replace current back `<a>` with `<BackNav href="/resources" label="Back to Resources" class="mb-6" />`
   - Keep existing outer `<nav class="mb-10">` and tab links intact

## Styling Requirements

- Match existing ResourcesNav back button styling:
  - Gray text (text-gray-500) with hover effect (hover:text-gray-700)
  - Arrow icon with `-translate-x-1` animation on hover
  - Focus-visible accessibility rings
  - Small text (text-sm)
  - Proper spacing (mb-6 for margin-bottom)

## Implementation Steps

1. [x] Create `BackNav.astro` anchor-only component with props: href, label, class
2. [x] Integrate BackNav into PostLayout.astro (inside article, before header, wrapped in nav)
3. [x] Test navigation flow: Posts list → Single post → Back to Posts
4. [x] Verify styling, hover, and focus states match ResourcesNav
5. [x] Optionally refactor ResourcesNav to use BackNav component
6. [x] Test keyboard navigation and accessibility
7. [x] Run `npm run build` to verify no type errors

## Completion Summary

Successfully implemented back navigation for single post pages:

- Created reusable `BackNav.astro` component (anchor-only, accepts href, label, class props)
- Integrated into `PostLayout.astro` with proper semantic nav wrapper
- Refactored `ResourcesNav.astro` to reuse the BackNav component
- All tests passed, build successful with no errors

## Files to Modify

- `src/layouts/PostLayout.astro` - Add back navigation
- `src/components/BackNav.astro` - New reusable component (if Option 1)
- `src/components/resources/ResourcesNav.astro` - Optional refactor to use BackNav

## Testing Strategy

- Navigate to a post page and verify back button appears
- Click back button and verify it returns to `/posts`
- Test hover and focus states
- Test on mobile viewport
- Verify accessibility with keyboard navigation
- Run `npm run build` to catch any type errors

## Implementation Notes

**Key Principles (from Oracle):**

- **Anchor-only component**: BackNav should NOT include `<nav>` wrapper to avoid nested nav semantics
- **Caller-controlled spacing**: Let parent components control spacing via wrapper or class prop
- **Width alignment**: Place inside article.post-content container to align with content max-width
- **Spacing differences**: Use `nav.mb-10` wrapper in posts; use `class="mb-6"` in resources to preserve space above tabs

**Technical Details:**

- Simple anchor link, no client-side routing needed
- Match the existing SVG arrow from ResourcesNav exactly
- Placement: inside article, before header (NOT inside .post-header to avoid border-bottom)
- Maintain accessibility: focus-visible rings, semantic HTML, aria-label on wrapper
- Default label to "Back" with override option for context-specific labels

**Edge Cases:**

- Ensure BackNav placement doesn't get included within .post-header's border-bottom
- Verify focus-visible ring classes work in current Tailwind setup
- Path coupling: "/posts" is hard-coded (acceptable; update if route changes)
