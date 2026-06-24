# Upgrade packages to latest

Upgrade this static Astro site from Astro 5 to the latest package set, with Astro as the primary migration risk.

## Goals

- Upgrade `astro`, official Astro integrations, React, Tailwind, Biome, and utility packages to latest compatible versions.
- Keep TypeScript on latest 5.x for this upgrade; defer TypeScript 6 to a separate follow-up if desired.
- Apply required Astro v6/v7 migrations for content collections and config compatibility.
- Keep the site static and GitHub Pages-compatible.
- Keep GitHub Pages CI compatible with Astro 7's Node engine requirement.
- Preserve current behavior and styling, especially Markdown posts, slide pages, Mermaid rendering, and resources summaries.

## Tasks

- [x] **Task 1: Create the upgrade branch and baseline**
  - Scope: git branch, current repo state
  - Depends on: none
  - Acceptance:
    - A dedicated branch such as `upgrade-packages-latest` exists from `main`.
    - Baseline `npm run build` and `npm run check` results are recorded in `progress.md` before dependency changes.
    - The active work item remains `.agents/work/tech-debt/upgrade-packages-latest/`.
  - Notes: The current baseline build passed during planning; rerun on the implementation branch before editing.

- [x] **Task 2: Apply Astro 7 compatibility prep**
  - Scope: `src/content/config.ts`, `src/content.config.ts`, `astro.config.mjs`, `.github/workflows/deploy.yml`
  - Depends on: Task 1
  - Acceptance:
    - Content config is moved from `src/content/config.ts` to `src/content.config.ts`.
    - `z` is imported from `astro/zod`; `defineCollection` remains from `astro:content`; `glob` remains from `astro/loaders`.
    - `astro.config.mjs` sets `compressHTML: true` to preserve existing whitespace behavior during the Astro 7 compatibility upgrade.
    - `.github/workflows/deploy.yml` pins the GitHub Pages build Node version to `22.18.0` and package manager to `npm` for parity with local development.
    - No `src/fetch.ts` reserved-file conflict is introduced.
  - Notes: These changes should be compatible with the current Astro 5 baseline; if one is not, apply it immediately after the Astro package upgrade and record that in `progress.md`.

- [x] **Task 3: Upgrade Astro and dependencies**
  - Scope: `package.json`, `package-lock.json`
  - Depends on: Task 2
  - Acceptance:
    - `astro` is upgraded to latest (`7.0.2` as of 2026-06-23) unless npm latest changes.
    - `@astrojs/react` and `@astrojs/check` are upgraded to latest compatible versions.
    - Outdated React, Tailwind, Biome, and utility packages are upgraded to latest versions where verification allows.
    - TypeScript remains on latest 5.x (`5.9.3` as of 2026-06-23), not TypeScript 6.
    - `npm ls typescript` or equivalent confirmation is recorded in `progress.md`.
    - `npm install` completes without peer dependency conflicts or lockfile inconsistencies.
  - Notes: Prefer `npx @astrojs/upgrade` for Astro + official integrations, then `npm install <pkg>@latest` for remaining outdated packages. Do not upgrade TypeScript to 6 in this work item. If a non-Astro package upgrade creates unrelated churn, defer that package with a reason in `progress.md` rather than expanding the Astro migration.

- [x] **Task 4: Fix upgrade breakages with minimal code changes**
  - Scope: files reported by build/check/lint failures, `astro.config.mjs`
  - Depends on: Task 3
  - Acceptance:
    - Rust compiler errors, invalid Astro HTML, stricter TypeScript/Zod issues, or Vite/Tailwind type errors are fixed with the smallest local change.
    - The Tailwind Vite plugin config is updated if new types make the existing `// @ts-expect-error` unnecessary or incorrect.
    - Existing routes and content behavior are preserved.
    - No deprecated Astro APIs from the v6/v7 guides remain in touched files.
  - Notes: Do not introduce new libraries unless a migration guide requires one.

- [x] **Task 5: Verify build, typecheck, lint, and local rendering**
  - Scope: verification commands and smoke testing
  - Depends on: Task 4
  - Acceptance:
    - `npm run build` passes.
    - `npm run check` passes.
    - `npm run lint:fix` passes; any formatting changes are reviewed.
    - If `npm run lint:fix` writes changes, `npm run check` and `npm run build` are rerun afterward.
    - A local preview/dev smoke test covers: homepage inline text/link spacing, footer/contact/post CTA inline spacing, posts index, `/posts/coding-with-agents-2025/`, `/posts/coding-with-agents-2025/slides/`, resources index, coding-with-agents resources page, and `/api/summaries/coding-with-agents__build-crew-episode-1.json`.
    - Mermaid rendering is verified in a normal post and a slides route as rendered `.mermaid` diagrams, not hidden raw code.
    - The Coding with Agents summary modal fetches and renders content in preview/dev.
    - `progress.md` records commands run, results, any warnings, and remaining follow-ups.
  - Notes: Use `npm run preview` after build or `npm run dev`; use tmux for background server if needed.

- [x] **Task 6: Finalize work item and commit**
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
- GitHub Pages uses `withastro/action@v3`, whose default Node version is 20; pin `node-version: 22.18.0` in the workflow.
- The repo is static (`output: 'static'`) and has no Astro SSR adapter, so adapter migration notes should not apply.
- The most likely required source migration is moving `src/content/config.ts` to `src/content.config.ts` and importing `z` from `astro/zod`.
- Set `compressHTML: true` proactively for compatibility with Astro 5/6 whitespace behavior.
- Astro v7's Rust compiler may expose invalid Astro/HTML syntax that previously built; fix only reported issues.
- Astro v7 Markdown processor changes should be low risk because Astro Markdown plugins are not configured. `react-markdown` usage in resources is separate.
- Astro v7 Markdown processor still requires Mermaid smoke testing because the client renderer depends on Markdown code block output.

## Constraints / Decisions

- Keep scope to dependency upgrades and required migration fixes.
- Do not redesign UI, refactor content architecture, or change deployment target.
- Do not add new dependencies unless required by the Astro migration guides or to preserve existing behavior.
- Defer TypeScript 6 to a separate work item instead of combining it with the Astro 7 migration.
- Defer unrelated non-Astro package breakages with a reason in `progress.md` instead of broadening the migration.

## Acceptance Criteria

- All outdated packages are either upgraded to latest or explicitly deferred with a reason in `progress.md`; TypeScript 6 is intentionally deferred.
- Astro is upgraded to latest and the site remains static-buildable.
- Content collections work under Astro 7.
- Build, typecheck, lint/format, and local smoke tests pass.
- Work item artifacts are current and ready for future continuation.

## Verification

- `npm outdated --json || true`
- `npm install` / upgrade commands selected during implementation
- `npm ls typescript`
- `npm run lint:fix`
- `npm run check`
- `npm run build`
- Local preview/dev smoke test for core routes
