# Adversarial Review Improvements

Status: planned
Category: tech-debt
Updated: 2026-08-16

## Why

User requested an adversarial review of the repo (code, GitHub workflows, features, docs, AGENTS.md) with findings stored durably, then implemented: test features end-to-end, improve code quality and docs, keep changes minimal, remove code where possible, and provide verifiable proof.

## Summary

Full-repo review done. Baseline `npm run build`, `npm run check`, and `biome check` all pass. Findings below, ordered by severity. Plan in `plan.md`.

## Findings

### Broken / dead

1. **Broken scripts**: `scripts/create-pr.sh` and `scripts/update-pr.sh` pipe `.agents/commands/create-pr.md` / `update-pr.md` into `amp`, but `.agents/commands/` does not exist. Both scripts fail unconditionally.
2. **Dead component**: `src/components/index/MainImage.astro` is imported nowhere.
3. **Dead types**: `src/types/index.ts` (`BaseProps`, `PageProps` — also uses `interface`, violating the repo's own `type` convention) and `src/types/resources.ts` (`Newsletter`, `Book`) are imported nowhere; `Books.tsx`/`Newsletters.tsx` consume the JSON untyped.
4. **Dead util**: `titleCase` in `src/utils/helpers.ts` is unused.
5. **Dead code in Layout.astro**: empty analytics block `if (import.meta.env.VITE_GOOGLE_ANALYTICS_KEY) {}` and a `<style>` body transition (50ms) that `initPage()` immediately overrides with inline 150ms.
6. **Dead aliases**: `@config` (vite) and `@assets` (vite + tsconfig) point at nonexistent directories; `@types/*` (tsconfig) is unused and shadows npm `@types/*`.

### Duplication / single source of truth

7. **Alias config duplicated** in `astro.config.mjs` (vite `resolve.alias`) and `tsconfig.json` (`paths`), and the two disagree (`@scripts` only in tsconfig, `@config` only in vite). Astro resolves tsconfig paths natively — proven in-repo: `@scripts/mermaid` builds despite having no vite alias. The vite alias block is redundant.
8. **Mermaid renderer + theme config duplicated** in `src/pages/posts/[slug]/slides.astro` as a ~110-line `is:inline` copy of `src/scripts/mermaid.ts` + `mermaid-config.ts`, with a "keep in sync" comment. A bundled script importing the shared module removes the copy.
9. **Mermaid currently unused by content**: no published or draft post contains a ```mermaid block. Feature kept (deliberately built, lazy-loaded, near-zero runtime cost) but noted for a future removal decision.

### Stale documentation

10. **README.md**: says "Astro v5" (actual: v7); project structure omits `src/content/`.
11. **AGENTS.md**: path aliases list `@config`, `@types`, `@assets` (dead) and omit `@scripts`; structure lists `src/hooks/` (doesn't exist) and describes content collections as "(posts, summaries)" (only `posts` exists); claims `client:only="react"` is required, but all React islands use `client:load` and build/SSR fine.

### Workflows / CI

12. **No CI on PRs**: `deploy.yml` builds only on push to `main`; `npm run check` and Biome run nowhere in CI. A broken PR is only caught after merge, by the deploy build.
13. `deploy.yml` itself is fine: pinned node matches `.nvmrc`, correct permissions, official actions.

### Minor / accepted

14. `ResourceCard` is hydrated (`client:load`) but has no interactivity — hydration removable. `ResourceListItem` needs hydration (image `onError` fallback).
15. Meta description is hardcoded site-wide in `Layout.astro`; posts can't set their own.
16. Content schema is non-strict: `difficulty`/`readingTime` frontmatter pass unvalidated and are unused by templates. Accepted as-is (content metadata, harmless).
17. `posts/index.astro` uses handwritten scoped CSS while the rest of the site uses Tailwind. Accepted: rewriting is churn with no behavior change.
18. 15 completed work items remain in `.agents/work/` although the repo's own lifecycle says completed items are committed as a snapshot then removed (git history is the archive). Cleanup staged separately via `close-work.sh`.
19. No sitemap/robots.txt/OG tags. Not added — would add dependencies/complexity; user can request separately.

## Artifacts

- [plan.md](plan.md) — implementation plan with verification steps

## Next Action

- Execute plan.md in this thread.

## Open Questions

- None blocking. Items 9, 16, 17, 19 intentionally left unchanged (vetoable decisions surfaced to user).
