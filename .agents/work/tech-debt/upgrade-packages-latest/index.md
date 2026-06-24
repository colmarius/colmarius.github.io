# Upgrade packages to latest

Status: completed
Category: tech-debt
Updated: 2026-06-24

## Summary

Upgraded this Astro static site from Astro 5.15.9 to Astro 7.0.2 and refreshed compatible packages while preserving static GitHub Pages behavior. TypeScript remains on 5.9.3; TypeScript 6 is intentionally deferred.

## Artifacts

- Research: research.md
- PRD: none
- Plan: plan.md
- Progress: progress.md
- Decisions: none

## Next Action

- Work item complete. Optional follow-ups: evaluate TypeScript 6 separately and monitor `@astrojs/check`/language-server audit advisories for a non-downgrade fix.

## Decisions

- Upgrade directly to latest Astro 7.
- Keep TypeScript on latest 5.x; defer TypeScript 6.
- Set `compressHTML: true` proactively for compatibility with Astro 5/6 whitespace behavior.
- Update the GitHub Pages workflow Node version for Astro 7.

## Open Questions

- [ ] None.
