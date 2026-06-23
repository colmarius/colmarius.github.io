# Upgrade packages to latest

Upgrade this static Astro site from Astro 5 to the latest package set, with Astro as the primary migration risk.

## Goals

- Upgrade `astro`, official Astro integrations, React, Tailwind, Biome, and utility packages to latest compatible versions.
- Keep TypeScript on latest 5.x for this upgrade; defer TypeScript 6 to a separate follow-up if desired.
- Apply required Astro v6/v7 migrations for content collections and config compatibility.
- Keep the site static and GitHub Pages-compatible.
- Preserve current behavior and styling, especially Markdown posts, slide pages, Mermaid rendering, and resources summaries.

## Tasks

- [ ] **Task 1: Create the upgrade branch and baseline**
  - Scope: git branch, current repo state
  - Depends on: none
  - Acceptance:
    - A dedicated branch such as `upgrade-packages-latest` exists from `main`.
    - Baseline `npm run build` and `npm run check` results are recorded in `progress.md` before dependency changes.
    - The active work item remains `.agents/work/tech-debt/upgrade-packages-latest/`.
  - Notes: The current baseline build passed during planning; rerun on the implementation branch before editing.

- [ ] **Task 2: Upgrade Astro and dependencies**
  - Scope: `package.json`, `package-lock.json`
  - Depends on: Task 1
  - Acceptance:
    - `astro` is upgraded to latest (`7.0.2` as of 2026-06-23) unless npm latest changes.
    - `@astrojs/react` and `@astrojs/check` are upgraded to latest compatible versions.
    - Outdated React, Tailwind, Biome, and utility packages are upgraded to latest versions where verification allows.
    - TypeScript remains on latest 5.x (`5.9.3` as of 2026-06-23), not TypeScript 6.
    - `npm install` completes without peer dependency conflicts or lockfile inconsistencies.
  - Notes: Prefer `npx @astrojs/upgrade` for Astro + official integrations, then `npm install <pkg>@latest` for remaining outdated packages. Do not upgrade TypeScript to 6 in this work item.

- [ ] **Task 3: Apply Astro v6/v7 migration fixes**
  - Scope: `src/content/config.ts`, `src/content.config.ts`, `astro.config.mjs`, related imports
  - Depends on: Task 2
  - Acceptance:
    - Content config is moved from `src/content/config.ts` to `src/content.config.ts`.
    - `z` is imported from `astro/zod`; `defineCollection` remains from `astro:content`; `glob` remains from `astro/loaders`.
    - The Tailwind Vite plugin config is updated if new types make the existing `// @ts-expect-error` unnecessary or incorrect.
    - No `src/fetch.ts` reserved-file conflict is introduced.
    - No deprecated Astro APIs from the v6/v7 guides remain in touched files.
  - Notes: This repo already uses Content Layer loaders, so avoid broad content refactors.

- [ ] **Task 4: Fix upgrade breakages with minimal code changes**
  - Scope: files reported by build/check/lint failures
  - Depends on: Task 3
  - Acceptance:
    - Rust compiler errors, invalid Astro HTML, stricter TypeScript/Zod issues, or Vite/Tailwind type errors are fixed with the smallest local change.
    - Existing routes and content behavior are preserved.
    - If Astro v7 whitespace changes cause visible missing spaces, add `compressHTML: true` to `astro.config.mjs` or fix the affected templates explicitly.
  - Notes: Do not introduce new libraries unless a migration guide requires one.

- [ ] **Task 5: Verify build, typecheck, lint, and local rendering**
  - Scope: verification commands and smoke testing
  - Depends on: Task 4
  - Acceptance:
    - `npm run build` passes.
    - `npm run check` passes.
    - `npm run lint:fix` passes; any formatting changes are reviewed.
    - A local preview/dev smoke test covers: homepage, posts index, at least one post with Mermaid, its slides route, resources index, and coding-with-agents resources page.
    - `progress.md` records commands run, results, any warnings, and remaining follow-ups.
  - Notes: Use `npm run preview` after build or `npm run dev`; use tmux for background server if needed.

- [ ] **Task 6: Finalize work item and commit**
  - Scope: `.agents/work/tech-debt/upgrade-packages-latest/`, git commit
  - Depends on: Task 5
  - Acceptance:
    - `plan.md` task checkboxes are updated.
    - `progress.md` includes final summary, verification, and next action.
    - `index.md` has current status, artifacts, and next action.
    - A clear commit is created for the package upgrade and migration fixes.
  - Notes: Commit package changes and work-item updates together if they form one reviewed upgrade unit.

## Implementation Notes

- Official Astro upgrade command: `npx @astrojs/upgrade`.
- Current latest target from research: `astro@7.0.2`, `@astrojs/react@6.0.0`, `@astrojs/check@0.9.9`.
- TypeScript target: latest 5.x (`5.9.3` as of 2026-06-23). TypeScript 6 is explicitly out of scope for this work item.
- Node `.nvmrc` is `22.18.0`, satisfying Astro 7's `>=22.12.0` engine requirement.
- The repo is static (`output: 'static'`) and has no Astro SSR adapter, so adapter migration notes should not apply.
- The most likely required source migration is moving `src/content/config.ts` to `src/content.config.ts` and importing `z` from `astro/zod`.
- Astro v7's Rust compiler may expose invalid Astro/HTML syntax that previously built; fix only reported issues.
- Astro v7 Markdown processor changes should be low risk because Astro Markdown plugins are not configured. `react-markdown` usage in resources is separate.
- Astro v7 whitespace handling requires visual smoke testing for inline text/link spacing.

## Constraints / Decisions

- Keep scope to dependency upgrades and required migration fixes.
- Do not redesign UI, refactor content architecture, or change deployment target.
- Do not add new dependencies unless required by the Astro migration guides or to preserve existing behavior.
- Defer TypeScript 6 to a separate work item instead of combining it with the Astro 7 migration.

## Acceptance Criteria

- All outdated packages are either upgraded to latest or explicitly deferred with a reason in `progress.md`; TypeScript 6 is intentionally deferred.
- Astro is upgraded to latest and the site remains static-buildable.
- Content collections work under Astro 7.
- Build, typecheck, lint/format, and local smoke tests pass.
- Work item artifacts are current and ready for future continuation.

## Verification

- `npm outdated --json || true`
- `npm install` / upgrade commands selected during implementation
- `npm run build`
- `npm run check`
- `npm run lint:fix`
- Local preview/dev smoke test for core routes
