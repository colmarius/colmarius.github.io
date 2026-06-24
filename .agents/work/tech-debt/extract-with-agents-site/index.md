# Extract With Agents Site

Status: blocked
Category: tech-debt
Updated: 2026-06-24

## Summary

Extract the coding-with-agents posts, resource hub, summaries, and reusable agent-learning material from this personal site into the nested repository at `.agents/references/with-agents`. Target-side extraction, verification, and private GitHub backup are complete at target commit `e7ca74f` pushed to private `colmarius/with-agents`. This repository still needs the gated pruning phase after the old URL strategy is decided.

## Artifacts

- Research: research.md
- PRD: prd.md
- Plan: plan.md
- Progress: progress.md
- Decisions: none

## Next Action

- Decide the old URL strategy for migrated personal-site URLs, then execute Task 6 in `plan.md` to prune migrated content from this personal site. Manual follow-up remains for GitHub Pages/custom-domain settings and DNS for `with-agents.dev`.

## Open Questions

- [ ] Confirm private GitHub Pages support before deployment; default is to keep the repo private and delay Pages rather than make source public automatically.
- [ ] Confirm old URL strategy before Task 6 deletions; default is to keep lightweight moved stubs or an external pointer for one release cycle after `with-agents.dev` is live.
