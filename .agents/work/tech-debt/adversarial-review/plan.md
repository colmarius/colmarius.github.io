# Plan: Adversarial Review Improvements

Scope: minimal, removal-first fixes from `index.md` findings. No new dependencies. No content changes.

## Tasks

- [ ] 1. Remove dead code
  - Delete `src/components/index/MainImage.astro`, `src/types/index.ts`, `src/types/resources.ts`, `titleCase` in `src/utils/helpers.ts`
  - Delete broken `scripts/create-pr.sh` and `scripts/update-pr.sh` (referenced `.agents/commands/` missing)
  - Layout.astro: remove empty analytics script and redundant 50ms `<style>` block
- [ ] 2. Alias single source of truth
  - Remove vite `resolve.alias` from `astro.config.mjs` (keep `dedupe`); tsconfig `paths` becomes the only alias definition
  - tsconfig: drop dead `@assets/*` and unused `@types/*`
- [ ] 3. Deduplicate Mermaid
  - `src/scripts/mermaid.ts`: accept an optional root/scope so both the post page and slides use it
  - `slides.astro`: replace `is:inline` copy (~110 lines of config + renderer) with a bundled script importing `@scripts/mermaid`
- [ ] 4. Un-hydrate static `ResourceCard` (drop `client:load` on `/resources` cards)
- [ ] 5. Per-page meta description: optional `description` prop on `Layout.astro` (current text as default), passed from `PostLayout`
- [ ] 6. Docs: fix README (Astro v7, add `src/content/`), fix AGENTS.md (aliases, no `hooks/`, posts-only collections, `client:load` reality)
- [ ] 7. Add minimal PR CI workflow (`.github/workflows/ci.yml`): npm ci, astro check, biome ci, build
- [ ] 8. Close out stale completed work items via `close-work.sh` (separate commit)

## Acceptance criteria / verification

- `npm run build`, `npm run check`, `npx biome check .` all pass
- Built HTML for `/resources` no longer contains hydration islands for ResourceCard; books/newsletters still hydrate
- E2E via agent-browser against dev server: home, about, contact, resources index/books/newsletters, posts list, post page, slides (arrows, keyboard, hash) all work
- Mermaid verified by temporarily adding a ```mermaid block to the draft post in dev (draft visible in dev), confirming SVG renders on post page and slides, then reverting
- Screenshots of key pages saved to `.amp/in/artifacts/`
