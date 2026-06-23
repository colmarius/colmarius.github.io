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

- Implement Task 1 from `plan.md`: create an upgrade branch and record baseline verification, then continue with Task 2 compatibility prep.

## Decisions

- Upgrade directly to latest Astro 7.
- Keep TypeScript on latest 5.x; defer TypeScript 6.
- Set `compressHTML: true` proactively for compatibility with Astro 5/6 whitespace behavior.
- Update the GitHub Pages workflow Node version for Astro 7.

## Open Questions

- [ ] None.
