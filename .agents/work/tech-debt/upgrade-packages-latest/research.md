# Research: Upgrade packages to latest

**Date:** 2026-06-23
**Status:** complete
**Question:** What package and Astro migration work is needed to upgrade this Astro static site to latest dependencies, especially Astro?

## Recommendation

Upgrade Astro with the official `npx @astrojs/upgrade` flow, then update the remaining pinned packages with `npm install <pkg>@latest`. The highest-risk upgrade is Astro `5.15.9` to `7.0.2` because it crosses v6 and v7 breaking changes; this repo is well positioned because it already uses Content Layer loaders and Node `22.18.0`, but it should still migrate the content config file path/imports and run build, check, lint, and a local preview smoke test.

## Current Environment

- Node from `.nvmrc`: `22.18.0`
- Local Node: `v22.18.0`
- Local npm: `10.9.3`
- Astro latest engine requirement from `npm view astro@latest`: Node `>=22.12.0`, npm `>=9.6.5`
- Engine compatibility: OK

## Outdated Packages

Collected with `npm outdated --json` on 2026-06-23.

| Package | Current | Latest | Notes |
| --- | ---: | ---: | --- |
| `astro` | `5.15.9` | `7.0.2` | Major upgrade; crosses Astro v6 and v7 breaking changes. |
| `@astrojs/react` | `4.4.1` | `6.0.0` | Official integration; update with Astro. Peer deps allow React 19. |
| `@astrojs/check` | `0.9.5` | `0.9.9` | Peer deps allow TypeScript `^5 || ^6`. |
| `@tailwindcss/vite` | `4.1.16` | `4.3.1` | Peer deps allow Vite `^5.2 || ^6 || ^7 || ^8`. |
| `tailwindcss` | `4.1.16` | `4.3.1` | Keep in sync with `@tailwindcss/vite`. |
| `@tailwindcss/typography` | `0.5.19` | `0.5.20` | Patch update. |
| `react` | `19.1.1` | `19.2.7` | Update with `react-dom` and types. |
| `react-dom` | `19.1.1` | `19.2.7` | Update with React. |
| `@types/react` | `19.1.10` | `19.2.17` | Update with React. |
| `@types/react-dom` | `19.1.7` | `19.2.3` | Update with React DOM. |
| `tailwind-merge` | `3.3.1` | `3.6.0` | Minor update. |
| `@biomejs/biome` | `2.3.4` | `2.5.1` | Tooling update. |
| `typescript` | `5.9.3` | `6.0.3` | Major update; `@astrojs/check@0.9.9` allows it, but verify carefully. |

Packages not reported outdated by npm include `clsx`, `react-markdown`, `rehype-sanitize`, and `remark-gfm`.

## Astro v6 Upgrade Notes Relevant Here

Official source: <https://docs.astro.build/en/guides/upgrade-to/v6/>

- Official upgrade command: `npx @astrojs/upgrade`.
- Astro v6 upgrades to Vite 7.
- Astro v6 upgrades to Zod 4; if custom Zod schemas break, consult the Zod v4 migration guide.
- Astro v6 removes automatic legacy content collections support.
- Content collections must use the Content Layer API.
- A configuration file at `src/content/config.ts` is legacy and should be moved/renamed to `src/content.config.ts`.
- `z` from `astro:content` is deprecated/removed path for schemas; import it from `astro/zod` instead.
- This repo already uses loaders via `glob()`, so the expected content migration is small:

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
```

## Astro v7 Upgrade Notes Relevant Here

Official source: <https://docs.astro.build/en/guides/upgrade-to/v7/>

- Official upgrade command remains `npx @astrojs/upgrade`.
- Astro v7 upgrades to Vite 8. Most Astro users should not need code changes unless they depend on Vite internals.
- Astro v7 uses the Rust compiler by default and only. It is stricter about invalid HTML syntax, especially unclosed tags and invalid nesting that the previous compiler tolerated.
- `src/fetch.ts` / `src/fetch.js` is a reserved advanced-routing filename. This repo does not currently have `src/fetch.ts`.
- Astro v7 defaults to the Sätteri Markdown processor. This repo does not configure Astro `remarkPlugins` or `rehypePlugins`, so no immediate config migration is expected. The React resource renderer still uses `react-markdown` separately and is not part of Astro's Markdown pipeline.
- Astro v7 changes default whitespace handling to `compressHTML: 'jsx'`; visually inspect inline text/link spacing. If spacing regresses, set `compressHTML: true` in `astro.config.mjs` to preserve older HTML-aware compression behavior.
- `getContainerRenderer()` imports from `@astrojs/react` root are deprecated; this repo does not currently use that API.

## Repo-Specific Findings

- `astro.config.mjs` uses `@astrojs/react` and `@tailwindcss/vite`, sets `output: 'static'`, and has no SSR adapter.
- `astro.config.mjs` has a `// @ts-expect-error` above `plugins: [tailwindcss()]`; after upgrading Vite/Tailwind, check whether this is still necessary.
- Content collections currently live at `src/content/config.ts` and use `defineCollection({ loader: glob(...) })`, which is the new API but in the legacy file path.
- `src/content/config.ts` imports `z` from `astro:content`; migrate to `astro/zod` during the upgrade.
- No `src/fetch.ts` exists.
- Astro Markdown plugins are not configured in `astro.config.mjs`; the only remark/rehype usage is in `src/components/resources/MarkdownRenderer.tsx` via `react-markdown`.
- Existing verification command `npm run build` passes before upgrade.

## Sources

- `npm outdated --json` — current vs latest package versions.
- `npm view astro@latest version engines dependencies --json` — latest Astro version and engine requirements.
- `npm view @astrojs/react@latest ...` — latest official React integration and peer dependencies.
- `npm view @tailwindcss/vite@latest ...` — Vite peer compatibility through Vite 8.
- [Astro v6 upgrade guide](https://docs.astro.build/en/guides/upgrade-to/v6/) — content collections, Zod 4, Vite 7, official upgrade command.
- [Astro v7 upgrade guide](https://docs.astro.build/en/guides/upgrade-to/v7/) — Vite 8, Rust compiler, Sätteri Markdown processor, whitespace handling, reserved `src/fetch.ts`.

## Open Questions

- [ ] Should TypeScript 6 be included in the same PR as Astro 7, or upgraded separately if it causes noisy type errors? Default recommendation: include it if `npm run check` passes after fixes; otherwise pin TypeScript 5.9.3 and create a follow-up work item.
- [ ] Should `compressHTML: true` be set proactively for compatibility, or only if visual smoke testing finds missing inline spaces? Default recommendation: only add it if needed.
