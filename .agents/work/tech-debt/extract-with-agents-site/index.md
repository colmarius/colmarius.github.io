# Extract With Agents Site

Status: completed
Category: tech-debt
Updated: 2026-06-24

## Summary

Extracted the coding-with-agents posts, resource hub, summaries, and reusable agent-learning material from this personal site into the nested repository at `.agents/references/with-agents`. Target extraction, public GitHub backup, GitHub Pages deployment, DNS setup, and personal-site pruning are complete. The personal site keeps lightweight external pointers from the homepage and `/resources` to <https://with-agents.dev>. The live target is <https://with-agents.dev> and the target repository is public by explicit user decision.

## Artifacts

- Research: research.md
- PRD: prd.md
- Plan: plan.md
- Progress: progress.md
- Decisions: none

## Next Action

- None for code. Optional DNS follow-up: keep `www.with-agents.dev` only if desired; the current `www` CNAME to `with-agents.dev` resolves, though GitHub's recommended Pages target is `colmarius.github.io` if domain checks ever complain.

## Open Questions

- [x] Repository visibility resolved: `colmarius/with-agents` is public by explicit user decision.
- [x] Old URL strategy resolved: remove migrated personal-site content and keep lightweight external pointers to `https://with-agents.dev`.
