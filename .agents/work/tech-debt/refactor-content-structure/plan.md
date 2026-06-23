# Refactor Content Structure

**Status:** COMPLETED
**Created:** 2025-11-06
**Completed:** 2025-11-06
**Goal:** Consolidate content into Astro Content Collections (standard approach), eliminate manual frontmatter parsing

## Current State

**Two content systems:**

- `src/content/` - Astro Content Collections (2 blog posts) ✅ Standard
- `src/data/` - Manual imports (17 summaries + 3 JSON resources) ❌ Custom

**Problems:**

- Duplication: both directories serve similar purposes
- Manual parsing: custom frontmatter parsing and import.meta.glob caching
- Inconsistent: different query patterns for similar content types

## Proposed Changes

### Phase 1: Migrate Summaries to Content Collections (Simple Path)

**1. Move markdown files**

```text
src/data/summaries/*.md → src/content/summaries/
```

Organize by series:

```text
src/content/summaries/
├── coding-with-agents/
│   ├── Build-Crew-Episode-1.md
│   ├── Build-Crew-Episode-2.md
│   ├── Raising-an-Agent-Episode-1.md
│   └── ...
├── Amp-The-Emperor-Has-No-Clothes.md
└── The-Emerging-Skillset-of-Wielding-Coding-Agents.md
```

**2. Update `src/content/config.ts`**

```typescript
const summaries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/summaries' }),
  schema: z.object({
    title: z.string(),
    resourceId: z.number(),
    series: z.string().optional(),
    episode: z.number().int().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { posts, summaries };
```

**3. Create API endpoints for client access**

`src/pages/api/summaries/by-resource/[id].json.ts`:

- Get summary by resourceId
- Return: `{ kind: 'single', body, title, date }` or `{ kind: 'series', seriesName, episodes[], first }`

`src/pages/api/summaries/by-slug/[slug].json.ts`:

- Get summary by slug
- Return: `{ body, title, episode, series }`

**4. Update client components**

- `CodingWithAgents.tsx`: Replace `import.meta.glob` with fetch to `/api/summaries/*`
- Keep existing `MarkdownRenderer` component (no changes)

**5. Delete custom utilities**

- Remove `src/utils/summaries.ts` (or simplify to just API helpers)
- Remove `parseFrontmatter` and manual glob caching

### Phase 2: Keep JSON as Direct Imports (Defer)

**Decision:** Keep `src/data/resources/*.json` as-is for now

- Already works well with direct imports
- No client/server boundary issues
- Can revisit if we need schema validation later

**Files staying unchanged:**

- `src/data/resources/coding-with-agents.json`
- `src/data/resources/books.json`
- `src/data/resources/newsletters.json`

## Implementation Notes

### Key Principles

1. **Server vs Client:** Content Collections are server/build-time APIs only. Never call `getCollection` in client components.
2. **Use API endpoints:** For client components that need lazy-loaded content, create minimal JSON endpoints
3. **Type safety:** Leverage Zod schemas for validation at build time
4. **Organization:** Use folders for series, root level for standalone content

### Common Pitfalls

- ❌ Don't call `getCollection` in React components with `client:only`
- ❌ Don't assume filenames = slugs; use `entry.id` or `entry.slug`
- ❌ Don't parse paths in client code; rely on frontmatter fields (`series`, `episode`)

### Testing Strategy

1. Verify build succeeds: `npm run build`
2. Test summary modal loading (client fetch)
3. Check that all 17 summaries load correctly
4. Verify series detection and episode ordering

### Migration Steps

1. Add `summaries` collection to config.ts
2. Create API endpoints
3. Move markdown files (preserve frontmatter)
4. Update client component to use fetch
5. Delete old utilities
6. Test build + preview
7. Clean up src/data/summaries/ directory

## Benefits

- ✅ One standard Astro pattern for all markdown content
- ✅ Type-safe frontmatter with Zod validation
- ✅ No manual parsing/caching logic
- ✅ Better HMR and development experience
- ✅ Easier to add new summaries (just drop in .md file)

## Effort Estimate

**Phase 1:** Medium (1-3 hours)

- Collection setup: 15min
- API endpoints: 30min
- Move files: 15min
- Update components: 1-2h (test thoroughly)

**Phase 2:** Skip for now (0 hours)

## Implementation Results

**✅ Successfully completed:**

- All 17 summaries migrated to Content Collections with kebab-case filenames
- API endpoints pre-rendered correctly (verified in dist/)
- Build succeeds with no errors
- All features tested with Playwright:
  - Single summary loading works
  - Series (playlist) loading works
  - Episode switching works correctly
- Removed ~900 lines of manual parsing code
- Type-safe frontmatter with Zod validation

**Key implementation details:**

- Used `__` separator for nested paths in slugs (e.g., `coding-with-agents__build-crew-episode-1`)
- Manifest passed as props to client component
- API endpoints fetch summary markdown on demand
- Wrapped `resolveSummaryRef` in `useCallback` for proper React dependencies

## Future Considerations

- Convert JSON to Data Collections if we need schema validation
- Pre-render summary pages for SEO (`/summaries/[slug].astro`)
- Add CMS integration (works better with Content Collections)
- Consider pre-rendering HTML instead of raw markdown in API for smaller client bundle
