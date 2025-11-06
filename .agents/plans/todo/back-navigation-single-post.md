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

## Proposed Approach (Option 1 - Preferred)

1. Create `src/components/BackNav.astro` with reusable back button
2. Update `ResourcesNav.astro` to use the new BackNav component
3. Add BackNav to `PostLayout.astro`
4. Ensure consistent styling with resources pages

## Styling Requirements

- Match existing ResourcesNav back button styling:
  - Gray text (text-gray-500) with hover effect (hover:text-gray-700)
  - Arrow icon with `-translate-x-1` animation on hover
  - Focus-visible accessibility rings
  - Small text (text-sm)
  - Proper spacing (mb-6 for margin-bottom)

## Implementation Steps

1. [ ] Create `BackNav.astro` component with props for href and label
2. [ ] Test BackNav component in isolation
3. [ ] Integrate BackNav into PostLayout.astro (before article header)
4. [ ] Optionally refactor ResourcesNav to use BackNav
5. [ ] Test navigation flow: Posts list → Single post → Back to Posts
6. [ ] Verify styling consistency across all back navigation instances
7. [ ] Run build to verify no type errors

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

- Keep it simple: just an anchor link, no client-side routing needed
- Match the existing SVG arrow from ResourcesNav
- Consider placement: above the post header, consistent with resources pages
- Maintain accessibility: focus-visible rings, semantic HTML
