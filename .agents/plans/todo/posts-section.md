# Posts Section Implementation Plan

## Goal

Add a new Posts/Articles section to the website for writing blog-style content about coding with agents, with support for markdown content and optional slide presentation mode.

## Context

- Existing site uses Astro v5 + React 19 + TailwindCSS v4
- Current content structure uses JSON files in `src/data/` and React components for display
- Site already has resources section (`/resources`) with subsections
- Planned content: 2-4 article series on coding with agents (intro, concepts, examples)
- Future requirement: Convert posts to interactive slides for presentations

## Architecture Options

### Option A: Astro Content Collections (Recommended)

Use Astro's native content collections with markdown files. This is the standard Astro pattern and provides:

- Type-safe content with Zod schemas
- Built-in markdown processing
- Native support for frontmatter
- Easy to query and render
- Better for SEO and performance

**Structure:**

```text
src/
  content/
    config.ts               # Content collections config
    posts/                  # Markdown files
      intro-to-agents.md
      basic-concepts.md
      ...
  pages/
    posts/
      index.astro          # List all posts
      [slug].astro         # Individual post page
      [slug]/slides.astro  # Slide view of post (future)
```

### Option B: JSON-based (Current Pattern)

Continue current pattern with JSON + React components. Simpler but:

- Less native Astro integration
- Manual markdown processing needed
- More boilerplate
- Doesn't leverage Astro strengths

**Recommended: Option A** - More maintainable, scalable, and aligns with Astro best practices.

## Implementation Steps

### Phase 1: Core Posts Feature (MVP)

1. **Setup Content Collection**
   - Create `src/content/config.ts` with posts collection schema
   - Define schema: title, description, pubDate, tags, author, series info
   - Create `src/content/posts/` directory

2. **Create Post Pages**
   - `src/pages/posts/index.astro` - List view with filters/sorting
   - `src/pages/posts/[slug].astro` - Individual post view
   - Apply TailwindCSS typography plugin for markdown rendering

3. **Navigation Integration**
   - Add "Posts" link to main navigation
   - Update `src/components/Navigation.astro`

4. **Create Initial Posts**
   - Write first 1-2 posts in markdown
   - Test rendering and navigation

### Phase 2: Slides Feature (Deferred to Future)

1. **Slides View (Optional/Future)**
   - Create `src/pages/posts/[slug]/slides.astro`
   - Integrate reveal.js or similar library
   - Parse markdown headers as slide breaks
   - Add "View as Slides" link on post pages

## Content Schema

```typescript
// src/content/config.ts
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().default("Marius Colacioiu"),
    series: z.string().optional(), // e.g., "Coding with Agents"
    seriesOrder: z.number().optional(), // Part 1, 2, 3...
    draft: z.boolean().default(false),
  }),
});
```

## File Structure

```text
.agents/plans/
  todo/
    posts-section.md          # This file

src/
  content/
    config.ts                 # NEW: Content collections config
    posts/                    # NEW: Markdown post files
      intro-to-coding-agents.md
      basic-concepts.md
      examples-of-coding-with-agents.md

  pages/
    posts/                    # NEW: Posts routes
      index.astro             # List view
      [slug].astro            # Post detail view
    resources/                # EXISTING

  components/
    posts/                    # NEW: Post-specific components
      PostsList.tsx           # List component
      PostCard.tsx            # Card for list view
      SeriesNav.tsx           # Navigation for series
```

## Design Considerations

### Typography

- Use `@tailwindcss/typography` (already installed)
- Apply `prose` classes for beautiful markdown rendering
- Consider dark mode support

### Navigation & UX

- Clear breadcrumbs for series navigation
- Tags for filtering posts
- Reading time estimation
- Table of contents for longer posts

### Series Management

- Clearly indicate post is part of a series
- Show previous/next links in series
- Series overview page (optional)

## Dependencies

- ✅ Astro v5 (installed)
- ✅ @tailwindcss/typography (installed)
- ✅ react-markdown (installed) - may not need if using Astro content
- 🔜 reveal.js or similar (for slides feature - Phase 2)

## Success Criteria

- [ ] Posts are written in markdown files
- [ ] Posts render with beautiful typography
- [ ] Posts list page shows all articles
- [ ] Individual post pages load correctly
- [ ] Navigation includes Posts section
- [ ] First 1-2 posts published
- [ ] Site builds without errors

## Future Enhancements (Out of Scope)

- Slides view with reveal.js integration
- Comments system
- RSS feed
- Search functionality
- Related posts suggestions
- Social sharing buttons

## Testing Strategy

- Write first post and verify rendering
- Test on mobile and desktop
- Verify build process (`npm run build`)
- Test navigation flow
- Check typography rendering

## Risks & Mitigations

- **Risk**: Over-engineering with too many features
  - **Mitigation**: Start with MVP (Phase 1 only), defer slides
- **Risk**: Typography doesn't match site design
  - **Mitigation**: Customize prose classes, test early
- **Risk**: Build time increases with many posts
  - **Mitigation**: Monitor build times, Astro handles static generation well

## Implementation Notes

### After Oracle Review - Simplified Approach

**Keep It Minimal**: Ship only what's needed for 2-4 posts. Defer everything else.

**What to Build (MVP)**:

1. Content collection at `src/content/posts/` with minimal schema (title, description, date, draft, tags)
2. Simple PostLayout.astro with scoped CSS for typography (no new dependencies)
3. Post detail page at `src/pages/posts/[slug].astro`
4. Posts list at `src/pages/posts/index.astro` (no pagination yet)
5. Optional: Shiki syntax highlighting theme in astro.config

**What to Defer**:

- MDX support (use plain .md)
- Tags/pagination (wait until 10+ posts)
- RSS, search, Open Graph images
- Slide conversion (future feature)
- Reading time, series navigation
- Post-specific React components (PostsList, PostCard, SeriesNav)

**Key Principles**:

- Use Astro Content Collections (type-safe, built for markdown)
- Keep existing JSON pattern for other content (don't mix)
- Minimal CSS in PostLayout, not Tailwind typography plugin
- Filter drafts in production, show in dev
- Use filename as slug (don't rename after publishing)

**Testing**:

- Write first post, verify rendering
- Run `npm run build` to ensure no errors
- Test draft filtering in production build
- Verify typography looks good on mobile/desktop

**Files to Create**:

1. `src/content/config.ts` - Content collection config
2. `src/layouts/PostLayout.astro` - Post layout with typography CSS
3. `src/pages/posts/index.astro` - Posts list page
4. `src/pages/posts/[slug].astro` - Individual post page
5. `src/content/posts/first-post.md` - Example/first post
6. Update `src/components/Navigation.astro` - Add Posts link

**Dates**: Use YYYY-MM-DD format in frontmatter (z.date() will validate)

**Images**: Keep next to posts or in src/assets; defer optimization

## Status

- Created: 2025-11-05
- Oracle Review: Completed - Simplified to MVP
- Status: Ready for implementation
- Next: Implement minimal version (Phase 1 only)
