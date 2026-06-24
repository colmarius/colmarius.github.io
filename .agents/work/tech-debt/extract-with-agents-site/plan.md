# Extract With Agents Site Plan

Create a clean `with-agents` Astro site in `.agents/references/with-agents`, verify and back it up, then prune migrated coding-agent content from this personal site.

## Goals

- Build the new repository from an allowlist of this site's proven Astro/React/Tailwind files without carrying personal-site content or parent `.agents` history into target history.
- Migrate all coding-with-agents posts, resource data, summaries, slides support, and required rendering code.
- Set up target-specific dot-agents instructions and GitHub Pages deployment for <https://with-agents.dev>.
- Remove migrated content from this repository only after the target site builds successfully and is pushed/backed up or the user explicitly accepts local-only backup risk.

## Tasks

- [x] **Task 1: Scaffold target repository from the current site**
  - Scope: `.agents/references/with-agents`, root config files, `.github/workflows/deploy.yml`, fresh `.agents/` setup
  - Depends on: none
  - Acceptance:
    - Target repo remains an independent git repository on `main`; its existing `.git` directory is preserved and no parent repo files are staged.
    - Target working tree is populated from a broad allowlist: root package/config files, `.github/workflows`, `src`, `public`, and any required scripts.
    - Copy operation explicitly excludes `.git`, `.agents`, root `AGENTS.md`, `node_modules`, `dist`, `.astro`, `.DS_Store`, `.vscode`, `.env*`, root `CNAME`, personal images, and any other generated/secret files.
    - A fresh dot-agents install is run from the target repo root, followed by `adapt` or a manual target-specific `AGENTS.md` update.
    - Target `.agents/` exists with no copied work items from this repository; `find .agents/references/with-agents/.agents/work -mindepth 2 -type f` shows no parent work-item files.
    - Target `package.json` name, `README.md`, footer source link, and high-level branding are changed from `colmarius.github.io` to `with-agents`.
  - Notes: Prefer `rsync` with explicit include/exclude rules or a short allowlist script. Do not copy this repository's `.agents`; use the installer.

- [x] **Task 2: Migrate and normalize coding-agent content in target**
  - Scope: `.agents/references/with-agents/src/content`, `.agents/references/with-agents/src/data/resources/coding-with-agents.json`
  - Depends on: Task 1
  - Acceptance:
    - Target includes the six published agent posts: `what-is-an-agent.md`, `coding-with-agents-2025.md`, `amp-first-win-15-minutes.md`, `agent-workflows-that-stick.md`, `agent-planning-workflow.md`, and `amp-power-patterns.md`.
    - Target includes all 8 resource records in `coding-with-agents.json` and all 24 current summary files connected by `resourceId`: 20 under `src/content/summaries/coding-with-agents/**` plus 4 top-level agent/AI summaries.
    - A validation pass confirms every migrated resource ID has expected summaries and no migrated summary has a missing or incorrect `resourceId`.
    - Workshop material is recovered from `git show 4d78447:src/content/posts/workshop-hands-on-agents.md` or recreated from `.agents/work/docs/workshop-hands-on-agents/`; if included, it is marked `draft: true`, uses a unique draft order such as `99`, and is not published until refreshed.
    - Post `order` values are unique and produce the intended reading path.
    - Optional `draft/workflow-ideas.md` is intentionally left behind by default unless the user requests it.
  - Notes: Keep frontmatter compatible with `src/content.config.ts`; update internal links after target routes are finalized.

- [x] **Task 3: Prune personal-site features from target and create a focused landing page**
  - Scope: `.agents/references/with-agents/src/pages`, `src/components`, `src/layouts`, `src/styles`, `public`
  - Depends on: Task 2
  - Acceptance:
    - Target has no personal About/Contact pages, personal homepage sections, `marius-photo.png`, or books/newsletters resource sections unless deliberately retained.
    - Target navigation is focused on Home, Posts, and Resources or an equally small topic-site structure.
    - Target homepage introduces With Agents and links to the practice path and Coding with Agents resource hub.
    - Post pages, slide pages, Mermaid rendering, resource summaries, and the summaries API still work.
    - Footer and metadata no longer identify the site as `Marius Colacioiu – Engineering Leader and Entrepreneur` except as author attribution where appropriate.
    - Target internal links do not point to unmigrated personal routes such as `/posts/verified-git-commits-ssh`, `/about`, `/contact`, or removed resources pages.
  - Notes: Keep the current design system unless a smaller Astro-only replacement is faster and preserves required behavior.

- [x] **Task 4: Configure target deployment and custom domain**
  - Scope: `.agents/references/with-agents/astro.config.mjs`, `.github/workflows/deploy.yml`, `public/CNAME`, README deployment docs
  - Depends on: Task 3
  - Acceptance:
    - `astro.config.mjs` uses `site: 'https://with-agents.dev'`, `output: 'static'`, and no GitHub Pages `base` path.
    - `public/CNAME` contains exactly `with-agents.dev`.
    - GitHub Pages workflow uses the Astro action with Node `22.18.0` and npm lockfile support.
    - README documents required manual GitHub settings: use public `colmarius/with-agents`, enable Pages from GitHub Actions, add custom domain, verify domain, configure DNS, and enforce HTTPS.
    - Deployment notes call out that the source repository is public by explicit user decision.
    - README says not to commit private notes, secrets, drafts that should stay private, or account-only deployment details.
  - Notes: DNS for apex `with-agents.dev`: A records to GitHub Pages IPv4s; optional AAAA records; optional `www` CNAME to `colmarius.github.io` for redirect pairing.

- [x] **Task 5: Verify and commit the target repository**
  - Scope: `.agents/references/with-agents`, target git history
  - Depends on: Task 4
  - Acceptance:
    - `npm ci` succeeds in the target repository.
    - `npm run check` succeeds in the target repository.
    - `npm run lint:fix` succeeds or produces only intentional formatting changes that are committed.
    - `npm run build` succeeds and generates expected routes for `/`, `/posts`, `/posts/coding-with-agents-2025/`, `/posts/coding-with-agents-2025/slides/`, `/resources/coding-with-agents`, and at least one `/api/summaries/*.json` endpoint.
    - Pre-first-commit leak audit passes: no matches for `marius-colacioiu`, `marius-colacioiu.com`, `colmarius.github.io`, `Engineering Leader`, `marius-photo`, `/about`, `/contact`, `/resources/books`, `/resources/newsletters`, `books.json`, `newsletters.json`, `verified-git-commits-ssh`, copied parent work items, or other personal-only strings/files except deliberate author attribution.
    - Target git status is clean after a first commit with a descriptive message.
    - If `gh` is available and authenticated, GitHub repo setup/push is completed with the user-approved visibility; otherwise README/progress records the exact manual push commands.
  - Notes: Do not proceed to current-repo pruning until this task is complete and the target commit is pushed/backed up, unless the user explicitly accepts local-only backup risk.

- [x] **Task 6: Prune migrated content from this personal site**
  - Scope: `src/content`, `src/data/resources`, `src/pages`, `src/components/resources`, `src/layouts/PostLayout.astro`, `src/pages/index.astro`
  - Depends on: Task 5
  - Acceptance:
    - Target content is committed and either pushed/backed up remotely or the user explicitly accepts local-only backup risk.
    - URL strategy is resolved before removal: default is lightweight moved stubs or one external pointer to `https://with-agents.dev` after the new site is live.
    - Published agent posts migrated to target are removed from this repository.
    - Coding with Agents resource page, summaries API, summaries content, and resource data are removed if no remaining personal-site route uses them.
    - Homepage featured link to `/posts/coding-with-agents-2025` is removed or replaced with an explicit external pointer to `https://with-agents.dev` if the open question is resolved that way.
    - Agent-specific resource callout in `PostLayout.astro` is removed or adjusted so no dead `/resources/coding-with-agents` link remains.
    - Remaining personal-site content does not contain dead internal links to removed agent posts; `verified-git-commits-ssh.md` links to absolute `with-agents.dev` URLs or drops those links.
    - Posts/resources navigation still builds with remaining personal-site content.
  - Notes: Preserve books/newsletters resources unless a later decision removes the entire resources section.

- [x] **Task 7: Verify and commit this personal-site cleanup**
  - Scope: current repository worktree and `.agents/work/tech-debt/extract-with-agents-site/`
  - Depends on: Task 6
  - Acceptance:
    - `npm run check` succeeds in this repository.
    - `npm run build` succeeds in this repository.
    - Work item `progress.md` records target commit hash, current-repo cleanup summary, verification commands, and any manual deployment/DNS follow-up.
    - `plan.md` task checkboxes and `index.md` status/next action are updated.
    - Current repository has a clean git status after a descriptive cleanup commit.
  - Notes: If target push/DNS remains manual, keep this work item `in-progress` rather than `completed`.

## Implementation Notes

- The safest default is a broad allowlist copy, fresh dot-agents install, prune immediately, leak audit, verify, then commit. The target repository's first commit should not include personal-only pages/assets or copied work-item history.
- Keep target work inside `.agents/references/with-agents`; because `.agents/references/*` is ignored by this repository, use `git -C .agents/references/with-agents ...` for target status/commits.
- Treat `with-agents.dev` GitHub Pages and DNS configuration as manual/account-level unless the implementation thread confirms authenticated tooling or user reports manual completion.
- If target build fails because of missing dependencies after pruning, restore from the current repo rather than inventing replacements until the dependency boundary is clear.
- After target extraction, consider a separate content refresh plan for updating older `.agents/plans` references in posts to dot-agents v0.3 `.agents/work` language.

## Constraints / Decisions

- Target stack remains Astro + React + TailwindCSS + Biome for the initial extraction.
- Current repository `.agents/work` items are not copied to target.
- Current repository is not pruned until target build verification passes.
- `verified-git-commits-ssh.md` stays in the personal site by default because it is Git/security content, not coding-agent-specific.
- Workshop post is restored as draft by default with a unique draft order unless the user decides to publish/refine it immediately.
- Personal site keeps lightweight external pointers to `https://with-agents.dev` from the homepage and `/resources`, without restoring duplicated migrated content.

## Acceptance Criteria

- The target repository can be built and committed independently.
- The target repository contains all coding-agent content and resource summaries needed for `with-agents.dev`.
- The personal repository no longer contains migrated agent-resource sections after cleanup, except for any explicit pointer chosen by the user.
- Work item artifacts remain current enough for a fresh implementation thread to continue without rereading this conversation.

## Verification

- `git -C .agents/references/with-agents status --short --branch`
- `npm ci` from `.agents/references/with-agents`
- `npm run check` from `.agents/references/with-agents`
- `npm run lint:fix` from `.agents/references/with-agents`
- `npm run build` from `.agents/references/with-agents`
- Leak audit: `rg -n "marius-colacioiu|marius-colacioiu.com|colmarius.github.io|Marius Colacioiu|Engineering Leader|marius-photo|/about|/contact|/resources/books|/resources/newsletters|books\.json|newsletters\.json|verified-git-commits-ssh" .agents/references/with-agents`
- Parent work item audit: `find .agents/references/with-agents/.agents/work -mindepth 2 -type f`
- `npm run check` from this repository after pruning
- `npm run build` from this repository after pruning
- `.agents/skills/agent-work/scripts/list-work.sh --all` from this repository

## Handoff-Ready Checklist

- [x] The plan lives at `.agents/work/tech-debt/extract-with-agents-site/plan.md`.
- [x] `index.md` links this active plan file and has the correct `Status:`.
- [x] Every task has `Scope`, `Depends on`, and verifiable `Acceptance`.
- [x] The next task is clear.
- [x] External blockers and human-only steps are explicit.
- [x] The intended verification commands are named.
