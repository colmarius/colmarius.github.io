# Extract With Agents Site Requirements Brief

## Problem

The current personal site mixes personal profile content with a growing body of material about coding with agents: posts, resource curation, media summaries, workshop material, and reusable research. That topic now deserves its own repository and site so the personal site can become simpler and `with-agents.dev` can grow as a focused resource.

## Desired Outcome

Create an implementation-ready path to turn `.agents/references/with-agents` into a clean Astro static site based on this repository's working patterns, then remove migrated topic content from this personal site after the target is verified. The target repository should be ready to push later as private `colmarius/with-agents` and deploy to GitHub Pages at <https://with-agents.dev>.

## Goals

- Preserve and migrate agent-related posts, summaries, resource data, slide support, and required rendering code.
- Start the new repository from an allowlist of current site architecture files where useful, but prune personal-only pages, content, assets, and navigation before committing the target repo.
- Initialize a fresh dot-agents setup in the target repository, similar to this repo, without copying this repo's `.agents` directory or work history.
- Prepare GitHub Pages deployment and custom-domain configuration for `with-agents.dev`.
- After the target is verified, prune migrated parts from this personal site and keep only personal-site content.

## Non-Goals

- Do not implement the extraction in this planning thread.
- Do not push to GitHub or configure DNS in this planning thread.
- Do not copy `node_modules`, `dist`, `.astro`, `.git`, `.agents`, root `AGENTS.md`, `.vscode`, `.env*`, root `CNAME`, or `.DS_Store` into the target repository.
- Do not redesign the full visual identity beyond the minimum rebrand needed to avoid personal-site branding in the target.
- Do not remove current personal-site content until the target site builds successfully with migrated content.

## Users / Use Cases

- Developers looking for practical material on coding with agents browse posts, slides, resources, and summaries at `with-agents.dev`.
- Future agents working in `colmarius/with-agents` can use project-specific `AGENTS.md`, dot-agents skills, work items, and reusable research.
- The personal site remains focused on Marius's profile, contact, remaining posts, and non-agent resources.

## Requirements

### Must Have

- [ ] Target repository builds as a static Astro site with React-powered resource summaries.
- [ ] Target repository includes the six published agent posts currently in `src/content/posts/`.
- [ ] Target repository includes the Coding with Agents resource manifest and all 24 summaries connected by `resourceId`.
- [ ] Target repository recovers or recreates the workshop post material from git/work-item history before deciding whether to publish it.
- [ ] Target repository contains a fresh dot-agents workspace and target-specific `AGENTS.md`, excluding this repository's `.agents` state and work items.
- [ ] Target repository config uses `site: 'https://with-agents.dev'` and no GitHub Pages `base` path for the custom domain.
- [ ] Personal-site pruning happens only after target build verification and either a remote push or explicit user acceptance of local-only backup risk.

### Optional

- [ ] Preserve `src/content/posts/draft/workflow-ideas.md` in the target as a draft if it is useful for future agent workflow content.
- [ ] Keep a small pointer from the personal site to `with-agents.dev` after migration.
- [ ] Add lightweight moved stubs for old personal-site URLs if external links/SEO continuity matters.

## Constraints / Decisions

- Use the existing Astro/React/Tailwind/Biome stack unless implementation uncovers a blocking reason to simplify.
- Prefer a broad allowlist plus prune implementation before the target's first commit; do not copy `.agents` or commit transient personal-site files to the target.
- Treat `.agents/references/with-agents` as an independent git repository; commits there are separate from commits in this repository.
- GitHub Pages and DNS changes are human/account-level steps unless `gh` authentication and DNS access are available later.

## Acceptance Criteria

- A future implementation can follow `plan.md` without needing to rediscover the content inventory or deployment requirements.
- The target repository has a verified build before any source content is removed from this repository.
- The current repository has no migrated agent-resource pages, data, summaries, or homepage links after the cleanup phase, unless explicit moved stubs or an external pointer are retained.

## Open Questions

- [ ] Is private GitHub Pages available for `colmarius/with-agents` under the current GitHub plan? Default: keep the repo private and delay Pages if unavailable.
- [ ] Should old personal-site URLs use moved stubs, or is removal plus a single pointer enough? Default: moved stubs for one release cycle after the new site is live.
