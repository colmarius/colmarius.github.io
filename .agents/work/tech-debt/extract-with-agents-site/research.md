# Research: Extract With Agents Site

**Date:** 2026-06-24
**Status:** draft
**Question:** What should be migrated from this personal site into `.agents/references/with-agents`, what site/deployment setup should the new repository use, and what should be removed from this repository afterwards?

## Recommendation

Use a broad allowlist plus prune workflow inside `.agents/references/with-agents`: copy only root config/package files, `.github/workflows`, `src`, `public`, and any required scripts; preserve the target `.git`; do not copy this repository's `.agents` directory. Immediately remove personal-only pages/assets/resources before the target's first commit. This preserves the working posts, slides, resource modal, content collections, Tailwind styling, and GitHub Pages workflow while reducing the chance of leaking parent work-item history or personal content.

For deployment, configure Astro for `site: 'https://with-agents.dev'` with no `base`, keep GitHub Pages source as GitHub Actions, and set the custom domain in GitHub repository settings; add `public/CNAME` for documentation/build consistency but do not rely on that file alone for Actions-based Pages. Run the dot-agents installer inside the target repo and then adapt its `AGENTS.md`; do not copy this repository's `.agents` state.

## Key Findings

- `.agents/references/with-agents` is already an empty git repository with no commits on `main`.
- The current site uses Astro 7, React 19, TailwindCSS 4, Biome, and GitHub Pages Actions; this stack already supports the content and resource UX to migrate.
- Migratable published posts are the six files tagged `AI Agents`: `what-is-an-agent.md`, `coding-with-agents-2025.md`, `amp-first-win-15-minutes.md`, `agent-workflows-that-stick.md`, `agent-planning-workflow.md`, and `amp-power-patterns.md`.
- A workshop post was added in commit `4d78447` as `src/content/posts/workshop-hands-on-agents.md` but is not present at `HEAD`; its work item remains at `.agents/work/docs/workshop-hands-on-agents/` and the file can be recovered with `git show 4d78447:src/content/posts/workshop-hands-on-agents.md`.
- The Coding with Agents resource hub is defined by `src/data/resources/coding-with-agents.json`, `src/pages/resources/coding-with-agents.astro`, `src/pages/api/summaries/[slug].json.ts`, and summaries connected by `resourceId`.
- The target should migrate all 8 resource records and all 24 current summary files: 20 under `src/content/summaries/coding-with-agents/` plus 4 top-level agent/AI summaries.
- Published agent posts link to `verified-git-commits-ssh.md`, while that personal Git/security post links back to agent posts. Target and current-site cleanup need explicit internal-link rewrites or moved stubs.
- The current root `CNAME` is not in `public/`; for the target, prefer `public/CNAME` with `with-agents.dev` and GitHub Pages repository settings for the actual custom-domain binding.
- GitHub Pages private-repository publishing may depend on the account/plan. Treat private Pages support as a manual preflight before relying on private `colmarius/with-agents` deployment.

## Local Inventory

### Target repository state

- Path: `.agents/references/with-agents`
- Current state: empty git project, no commits on `main`
- Current remote: none detected
- Important parent behavior: `.agents/.gitignore` ignores `references/*`, so target files will not be committed to this personal repository. Use `git -C .agents/references/with-agents ...` for target status/commits.

### Content to migrate by default

Posts:

- `src/content/posts/what-is-an-agent.md`
- `src/content/posts/coding-with-agents-2025.md`
- `src/content/posts/amp-first-win-15-minutes.md`
- `src/content/posts/agent-workflows-that-stick.md`
- `src/content/posts/agent-planning-workflow.md`
- `src/content/posts/amp-power-patterns.md`
- Recover candidate draft: `src/content/posts/workshop-hands-on-agents.md` from commit `4d78447`

Optional draft candidate:

- `src/content/posts/draft/workflow-ideas.md` is sparse but agent-workflow-related. Default recommendation: migrate only if it will be developed soon; otherwise leave it out of the initial target commit.

Resource hub and summaries:

- `src/data/resources/coding-with-agents.json`
- 8 resource records currently in `src/data/resources/coding-with-agents.json`
- `src/content/summaries/amp-the-emperor-has-no-clothes.md`
- `src/content/summaries/linus-torvalds-on-ai.md`
- `src/content/summaries/the-emerging-skillset-of-wielding-coding-agents.md`
- `src/content/summaries/the-truth-about-coding-agents.md`
- 20 files under `src/content/summaries/coding-with-agents/**`
- Validation rule: every migrated resource ID has at least one matching summary entry when a summary exists today, and no migrated summary has a missing or incorrect `resourceId`.

Rendering/build support likely needed in the target:

- Core config: `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `biome.json`, `tailwind.config.cjs`, `.editorconfig`, `.gitignore`, `.nvmrc`
- Content config: `src/content.config.ts`
- Layout/navigation/styles: `src/layouts/Layout.astro`, `src/layouts/PostLayout.astro`, `src/components/Navigation.astro`, `src/components/Footer.astro`, `src/components/BackNav.astro`, `src/styles/global.css`
- Posts/slides: `src/pages/posts/index.astro`, `src/pages/posts/[slug].astro`, `src/pages/posts/[slug]/slides.astro`, `src/components/MermaidRenderer.astro`, `src/scripts/mermaid-config.ts`, `src/scripts/mermaid.ts`, `src/types/mermaid.d.ts`
- Resource hub: `src/pages/resources/coding-with-agents.astro`, `src/pages/api/summaries/[slug].json.ts`, `src/components/resources/CodingWithAgents.tsx`, `EpisodeList.tsx`, `MarkdownRenderer.tsx`, `ResourceListItem.tsx`, `SummaryModal.tsx`
- Shared React/UI utilities: `src/components/ui/**`, `src/hooks/useIsMdUp.ts`, `src/hooks/index.ts`, `src/utils/helpers.ts`, `src/utils/index.ts`

Personal-site content to prune from the target before its first commit:

- `src/pages/about.astro`, `src/pages/contact.astro`, personal homepage sections, personal photos, and personal-only components under `src/components/about/`, `src/components/contact/`, and `src/components/index/`
- `src/data/resources/books.json`, `src/data/resources/newsletters.json`, `src/pages/resources/books.astro`, `src/pages/resources/newsletters.astro`, and related Books/Newsletters components unless intentionally retained
- `src/content/posts/verified-git-commits-ssh.md` unless the target should also cover general developer-security posts
- Current personal `README.md`, root `AGENTS.md`, root `CNAME`, footer GitHub link, site metadata, personal branding strings, `.vscode`, `.env*`, and personal images

### Current repository cleanup after target verification

Remove or update from this personal repository only after the target builds and is either pushed remotely or the user explicitly accepts local-only backup risk:

- Remove migrated agent posts from `src/content/posts/`.
- Remove `src/content/summaries/**` and `src/data/resources/coding-with-agents.json` if no remaining personal-site route uses them.
- Remove `src/pages/resources/coding-with-agents.astro`, `src/pages/api/summaries/[slug].json.ts`, and resource components used only by the Coding with Agents hub.
- Remove homepage featured link to `/posts/coding-with-agents-2025`, replace it with an external pointer to `https://with-agents.dev`, or add moved stubs depending on the chosen URL strategy.
- Remove or rewrite the agent-post resource callout in `src/layouts/PostLayout.astro`.
- Simplify resources navigation/index to books/newsletters only, or remove resources entirely if desired later.

## Implementation Approach Options

### Option A: Broad allowlist copy, then prune before target commit

Best when preserving behavior is more important than hand-assembling every file. Copy only root config/package files, `.github/workflows`, `src`, `public`, and any needed scripts, then prune personal content before the first target commit. Do not copy `.agents`; run the dot-agents installer in the target instead.

Trade-offs:

- Pros: fast, lower chance of missing connected files, avoids copying parent `.agents` history, easy to verify against current behavior.
- Cons: still requires disciplined pruning and leak audit before the first target commit.

### Option B: Assemble a minimal target by allowlist

Best when the first commit must never contain personal files, even transiently. Copy only the files listed in the local inventory and create a fresh landing page/navigation.

Trade-offs:

- Pros: cleanest first commit, clearer ownership boundaries.
- Cons: higher risk of missing style/layout/scripts/components; slower to debug dependency holes.

### Recommended default

Use Option A operationally, but treat the target's first commit as the boundary: copy from the allowlist, prune immediately, run leak audits, verify, then commit only the cleaned target. If implementation agents are working in parallel or the target's working tree might be inspected before pruning, switch to Option B.

## Oracle Stress-Test Defaults

- Private repository: keep `colmarius/with-agents` private by default; if GitHub Pages for private repos is unavailable, delay Pages or choose another host rather than making source public automatically.
- Workshop post: recover into the target as `draft: true`, set a unique draft order such as `99`, and refresh stale dot-agents setup language before publishing.
- Personal-site pointer: keep a small external pointer to `with-agents.dev` after the new site is live.
- Old personal-site URLs: prefer lightweight moved stubs for one release cycle if public URL continuity matters; otherwise a single pointer is acceptable but less safe.
- `verified-git-commits-ssh.md`: keep it personal by default, but rewrite cross-links in both repos to avoid dead internal links.
- `draft/workflow-ideas.md`: leave it out of the initial target commit unless it will be developed soon.
- `www.with-agents.dev`: canonical apex first; add `www` only if desired and DNS control is confirmed.

## Deployment Notes

- Astro's GitHub Pages guide recommends the official Astro GitHub Action and committing the package-manager lockfile.
- For a custom domain, Astro's guide says set `site` to the custom domain, remove/avoid `base`, and place `public/CNAME` containing the domain.
- GitHub's custom-domain docs say Pages custom domains should be configured in repository settings; for custom GitHub Actions workflows, GitHub does not create a CNAME file and an existing one is not required. Therefore: configure both repository settings and `public/CNAME`, but consider settings the source of truth.
- For apex `with-agents.dev`, GitHub supports A records to:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Optional IPv6 AAAA records:
  - `2606:50c0:8000::153`
  - `2606:50c0:8001::153`
  - `2606:50c0:8002::153`
  - `2606:50c0:8003::153`
- Configure `www.with-agents.dev` as a CNAME to `colmarius.github.io` if using GitHub's recommended `www` pairing/redirect behavior.
- Verify the custom domain in GitHub before adding DNS records when possible, avoid wildcard DNS records, and enable HTTPS after DNS settles.

## dot-agents Notes

- Official install command: `curl -fsSL https://raw.githubusercontent.com/colmarius/dot-agents/main/install.sh | bash` from the target repo root.
- dot-agents adds root `AGENTS.md` and `.agents/` with work items, research, references, skills, and sync scripts.
- Re-running install/sync preserves work items and reusable research, but the target should start with no copied work items from this repository.
- After installation, run the `adapt` skill in the target to rewrite `AGENTS.md` for the `with-agents` site and commands.

## Sources

- [Astro GitHub Pages deployment docs](https://docs.astro.build/en/guides/deploy/github/) — official Astro Action, lockfile requirement, `site`/`base`, and custom-domain guidance.
- [GitHub Pages custom domains overview](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) — supported domain types, verification recommendation, private Pages caveat, and takeover risk.
- [GitHub Pages custom domain management](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) — repository setting flow, apex/`www` DNS records, no wildcard DNS, HTTPS, and Actions CNAME behavior.
- [dot-agents.dev](https://dot-agents.dev) — dot-agents install command, folder layout, and workflow summary.
- [colmarius/dot-agents README](https://github.com/colmarius/dot-agents) — installer, sync behavior, work item preservation, and next steps.

## Open Questions

- [ ] Confirm private GitHub Pages support for `colmarius/with-agents` before depending on private-repo deployment.
- [ ] Decide whether old personal-site URLs need moved stubs for one release cycle or whether one external pointer is enough.
