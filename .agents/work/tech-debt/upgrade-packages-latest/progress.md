# Progress: Upgrade packages to latest

## Planning and research

**Thread**: https://ampcode.com/threads/T-019ef606-6e21-77a6-aa05-43916f7d6441
**Status**: completed
**Iteration**: 1

### Changes

- Created `.agents/work/tech-debt/upgrade-packages-latest/index.md`.
- Added `research.md` with npm latest version findings and Astro v6/v7 migration notes.
- Added `plan.md` with implementation-ready tasks for the package upgrade.

### Commands Run

- `git switch main` ✓
- `.agents/skills/agent-work/scripts/list-work.sh --all` ✓
- `cat .nvmrc && node --version && npm --version` ✓
- `npm outdated --json || true` ✓ (reported outdated packages)
- `npm view astro@latest version engines dependencies --json` ✓
- `npm view @astrojs/react@latest version peerDependencies dependencies --json` ✓
- `npm view @astrojs/check@latest version peerDependencies dependencies --json` ✓
- `npm view @tailwindcss/vite@latest version peerDependencies dependencies --json` ✓
- Read official Astro v6 and v7 upgrade guides ✓

### Learnings

- Latest Astro is `7.0.2` as of 2026-06-23.
- This repo's Node `22.18.0` satisfies Astro 7's `>=22.12.0` requirement.
- The repo already uses Content Layer loaders, but the config file should move from `src/content/config.ts` to `src/content.config.ts` and `z` should come from `astro/zod`.
- Astro v7 introduces stricter Rust compiler behavior and whitespace changes that require build plus visual smoke testing.

### Next

- Implement Task 1 from `plan.md`: create an upgrade branch, record baseline verification, then run the dependency upgrade.

---

## Decision update: Astro 7 and TypeScript 5

**Thread**: https://ampcode.com/threads/T-019ef606-6e21-77a6-aa05-43916f7d6441
**Status**: completed
**Iteration**: 2

### Changes

- Updated `research.md` to record the decision to upgrade directly to Astro 7.
- Updated `research.md` and `plan.md` to keep TypeScript on latest 5.x and defer TypeScript 6.
- Updated `index.md` to remove the TypeScript 6 open question.

### Commands Run

- Read current work item artifacts ✓

### Learnings

- The implementation should target Astro 7 now; stopping at Astro 6 is unnecessary for this static site.
- TypeScript 6 should be a separate upgrade to reduce variables during the Astro migration.

### Next

- Implement Task 1 from `plan.md`: create an upgrade branch, record baseline verification, then run the dependency upgrade.

---
