# Plan 002: Workshop - Hands on Agents

**Status:** Completed
**Created:** 2025-01-31

## Goal

Create a 30-minute workshop blog post with slides about setting up `dot-agents` on personal projects.

## Context

- Workshop format: 30 minutes, fun and informative
- Primary topic: Setting up <https://github.com/colmarius/dot-agents>
- Target: Participants set up dot-agents on their own projects

## Time Allocation

| Section | Time | Percentage |
|---------|------|------------|
| Intro to Amp | ~6 min | 20% |
| Main Workshop (dot-agents setup) | ~12 min | 40% |
| Production Example Demo | ~6 min | 20% |
| Resources + Q&A | ~6 min | 20% |

## Tasks

- [x] **Task 1: Create workshop post file**
  - Scope: `src/content/posts/workshop-hands-on-agents.md`
  - Depends on: none
  - Acceptance:
    - File created with proper frontmatter (title, description, pubDate, tags)
    - Uses existing post structure conventions

- [x] **Task 2: Write Intro Section (20%)**
  - Scope: Intro content in post
  - Depends on: Task 1
  - Acceptance:
    - Philosophy of Amp as a coding agent
    - How it differs from other agents (e.g., cursor, GitHub Copilot)
    - Links: [ampcode.com](https://ampcode.com), [manual](https://ampcode.com/manual)
    - Discount link: <https://www.buildcrew.team/> ($100 discount)
    - Note: Amp has free tier with ads, $10 free/day

- [x] **Task 3: Write Main Workshop Section (40%)**
  - Scope: Step-by-step guide in post
  - Depends on: Task 2
  - Acceptance:
    - Prerequisites (Amp installed, personal project ready)
    - Steps to clone/setup dot-agents
    - How to run the `adapt` skill
    - Verify setup works
    - Simple, follow-along format

- [x] **Task 4: Add Production Example Placeholder (20%)**
  - Scope: Placeholder section in post
  - Depends on: Task 3
  - Acceptance:
    - Add placeholder heading and note for live demo
    - Content: "Live demo: showing agents on actual codebase"
    - Will be filled during actual workshop presentation
  - Notes: This section is for live code showing, not written content

- [x] **Task 5: Write Resources & Q&A Section (20%)**
  - Scope: Resources section at end
  - Depends on: Task 4
  - Acceptance:
    - Links to dive deeper (existing blog posts, Amp manual, dot-agents repo)
    - Space for discussion prompts / Q&A starters
    - Related posts from the practice path

- [x] **Task 6: Verify build and lint**
  - Scope: Build verification
  - Depends on: Task 5
  - Acceptance:
    - `npm run build` passes
    - `npm run lint:fix` passes

## Implementation Notes

- Use existing post structure from `src/content/posts/`
- Match frontmatter format (see `amp-first-win-15-minutes.md` for example)
- Keep slides-friendly: use headings, bullet points, callout boxes
- Consider `difficulty: 'beginner'` and appropriate `readingTime`
- Tag with: `['AI Agents', 'Amp', 'Workshop', 'Getting Started']`

## Resources to Reference

- dot-agents repo: <https://github.com/colmarius/dot-agents>
- Amp signup: <https://ampcode.com>
- Amp manual: <https://ampcode.com/manual>
- BuildCrew discount: <https://www.buildcrew.team/>
- Existing posts for linking:
  - `/posts/what-is-an-agent`
  - `/posts/amp-first-win-15-minutes`
  - `/posts/agent-workflows-that-stick`
  - `/posts/amp-power-patterns`
