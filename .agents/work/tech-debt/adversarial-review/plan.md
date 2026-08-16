# Plan: Adversarial Review Improvements

Scope: minimal, removal-first fixes from `index.md` findings. No new dependencies. No content changes.

## Tasks

- [x] 1. Remove dead code
  - Delete `src/components/index/MainImage.astro`, `src/types/index.ts`, `src/types/resources.ts`, `titleCase` in `src/utils/helpers.ts`
  - Delete broken `scripts/create-pr.sh` and `scripts/update-pr.sh` (referenced `.agents/commands/` missing)
  - Layout.astro: remove empty analytics script and redundant 50ms `<style>` block
- [x] 2. Alias single source of truth
  - Remove vite `resolve.alias` from `astro.config.mjs` (keep `dedupe`); tsconfig `paths` becomes the only alias definition
  - tsconfig: drop dead `@assets/*` and unused `@types/*`
- [x] 3. Deduplicate Mermaid
  - `src/scripts/mermaid.ts`: accepts optional root/scope; both post page and slides use it
  - `slides.astro`: `is:inline` copy (~110 lines) replaced with a bundled script importing `@scripts/mermaid`
- [x] 4. Un-hydrate static `ResourceCard` (dropped `client:load` on `/resources` cards)
- [x] 5. Per-page meta description: optional `description` prop on `Layout.astro`, passed from `PostLayout`
- [x] 6. Docs: README (Astro v7, `src/content/`), AGENTS.md (aliases, no `hooks/`, posts-only collections, `client:load` reality, no "API endpoints")
- [x] 7. Added `.github/workflows/ci.yml`: npm ci, astro check, biome ci, build on PRs
- [x] 8. Stale completed work items: `close-work.sh --check` run on all 15 — **all fail validation** (legacy `## Next Action` format). Left in place: the work contract forbids mechanically backfilling old items. User decision required.

## Verification (observed)

- `npm run check`: 0 errors / 0 warnings. `npx biome check .`: clean. `npm run build`: 9 pages, no errors (also proves tsconfig-only aliases resolve, since `@components`/`@scripts` etc. have no vite alias anymore).
- Built HTML: `dist/resources/index.html` has 0 `astro-island` (was 3); cards + counts still render statically. `dist/resources/books/index.html` keeps its 1 needed island. Post HTML emits per-post `<meta name="description">`.
- E2E (agent-browser, dev server): home, about, contact, resources → books (8 book images), posts list, post page all render with working nav/links.
- Slides (dev): splits into 9 slides, counter `1/9`, prev disabled on first, Next button → `#2` "SSH vs GPG Signing", ArrowRight/ArrowLeft navigate + update hash, fresh deep-link `#5` opens slide 5.
- Slides (production `astro preview`): 9 slides, ArrowRight → `#2`, `/resources` 0 islands. Refactored bundled script works in prod bundle, not just dev.
- Mermaid (shared module after dedup): temp ```mermaid block added to published post in dev → 1 rendered SVG on post page; slides became 10, slide 10 rendered flowchart SVG (screenshot-verified: boxes Review → Plan → Implement → Verify). Content reverted; `git status` clean.
- Screenshots: `.amp/in/artifacts/{home,resources,books,slides,slides-mermaid}.png`.

## New finding during e2e

- Draft posts under `src/content/posts/draft/` get id `draft/<name>`, which the `/posts/[slug]` route cannot match (slash in non-rest param) → draft posts 404 even in dev, though they're listed on `/posts`. Harmless in prod (drafts filtered). Left unfixed; fix would be flattening drafts or a `[...slug]` route — user decision.
