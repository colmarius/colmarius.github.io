# Extract With Agents Site

Status: planned
Category: tech-debt
Updated: 2026-06-24

## Summary

Extract the coding-with-agents posts, resource hub, summaries, and reusable agent-learning material from this personal site into the empty nested repository at `.agents/references/with-agents`. The target repository will become `colmarius/with-agents`, a private Astro/GitHub Pages site for <https://with-agents.dev>, while this repository will later be pruned back toward a minimal personal site.

## Artifacts

- Research: research.md
- PRD: prd.md
- Plan: plan.md
- Progress: progress.md
- Decisions: none

## Next Action

- Execute Task 1 in `plan.md`: scaffold `.agents/references/with-agents` from an allowlist of current site files, preserve the target `.git`, and run a fresh dot-agents install instead of copying this repository's `.agents` directory.

## Open Questions

- [ ] Confirm private GitHub Pages support before deployment; default is to keep the repo private and delay Pages rather than make source public automatically.
- [ ] Confirm old URL strategy; default is to keep lightweight moved stubs or an external pointer for one release cycle after `with-agents.dev` is live.
