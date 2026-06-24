# Progress: Extract With Agents Site

## 2026-06-24 — Research and planning

**Status:** Planning artifacts drafted and Oracle feedback incorporated

**Actions:**

- Created work item `.agents/work/tech-debt/extract-with-agents-site/`.
- Inventoried current coding-agent posts, resource data, summaries, target repository state, and deployment requirements.
- Confirmed `.agents/references/with-agents` is an empty independent git repository with no commits on `main`.
- Found that `src/content/posts/workshop-hands-on-agents.md` is absent at `HEAD` but recoverable from commit `4d78447` and from `.agents/work/docs/workshop-hands-on-agents/` context.
- Drafted `prd.md`, `research.md`, and `plan.md` for future implementation.
- Consulted Oracle for grill/stress review of the research and plan.
- Incorporated Oracle recommendations: use broad allowlist copy plus fresh dot-agents install, add target leak audits, make the summary inventory exact, add internal-link cleanup, add `npm run check`, and gate current-site pruning behind target backup/push or explicit user acceptance.
- Ran a final post-commit Oracle review; it reported no blockers and "safe to proceed". Incorporated its two hardening tweaks: exclude root `AGENTS.md` from target copying and expand the leak audit to catch books/newsletters and personal-domain leftovers.

**Verification:**

- `.agents/skills/agent-work/scripts/list-work.sh --all` ✓ — work item appears as `planned`.
- `git diff --check` ✓
- `npm run check` ✓
- `npm run build` ✓
- Oracle review/stress test completed.

**Next Action:**

- Execute Task 1 in `plan.md` in a future implementation thread.
