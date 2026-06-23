# Upgrade packages to latest

Status: planned
Category: tech-debt
Updated: 2026-06-23

## Summary

Upgrade this Astro static site and its npm packages to the latest compatible versions, with Astro as the primary migration focus. The work item captures current dependency drift, Astro v6/v7 migration risks, and an implementation-ready plan for a safe upgrade branch.

## Artifacts

- Research: research.md
- PRD: none
- Plan: plan.md
- Progress: progress.md
- Decisions: none

## Next Action

- Implement Task 1 from `plan.md`: create an upgrade branch, record baseline verification, then run the dependency upgrade.

## Open Questions

- [ ] Should `compressHTML: true` be set proactively, or only if visual smoke testing finds missing inline spaces? Default: only add it if needed.
