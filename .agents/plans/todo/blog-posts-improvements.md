# Blog Posts Improvements

## Goal

Enhance all blog posts to maximize reader value, learning, and actionability based on comprehensive Oracle review.

## Current State

- 7 blog posts covering AI agents, Amp workflows, and Git security
- Strong foundational content with practical examples
- Some repetition across posts (token hygiene, mode selection)
- Missing quick-start headers and visual aids
- Varying levels of actionability

## Oracle Assessment Summary

**Key findings:**

- Posts are strong and practical but can be more actionable
- Add "Try it now" exercises with copy/paste prompts
- Create consistent quick-start headers (prereqs, time, outcomes)
- Add 2-3 simple diagrams (agent loop, decision tree, .agents/plans Kanban)
- Reduce duplication by centralizing repeated content
- Convert some posts to slide-friendly formats

## Scope

**In scope:**

- Quick-start headers for all posts
- "Try it now" boxes with verification steps
- Simple diagrams (agent loop, mode decision tree, planning Kanban)
- Content de-duplication and cross-linking
- Post format optimization (slide-friendly vs tutorial)
- OS-specific guidance where needed (SSH post)
- Troubleshooting boxes

**Out of scope:**

- Building full slide decks with speaker notes
- Creating downloadable cheat sheets/PDFs
- Sample demo repository
- Workshop materials
- Heavy embeds or interactive content

## Implementation Strategy

### Phase 1: Series-Level Improvements (High Priority)

1. **Standard Quick-Start Header** (apply to all posts)
   - Who it's for
   - Time to complete
   - Prerequisites
   - Expected outcomes
   - Next action/recommended next read

2. **Create Core Diagrams**
   - Agent loop diagram (for what-is-an-agent.md, coding-with-agents-2025.md)
   - Mode decision tree (for amp-power-patterns.md)
   - .agents/plans Kanban flow (for agent-planning-workflow.md)

3. **Content De-duplication**
   - Centralize token hygiene guidance in amp-power-patterns.md
   - Centralize mode selection in amp-power-patterns.md
   - Replace duplicates with one-line callouts + links

4. **Consistent "Try It Now" Boxes**
   - 2-3 copy/paste prompts per post
   - Clear verification steps
   - Expected outcomes

### Phase 2: Per-Post Improvements

#### 1. amp-power-patterns.md (Hybrid: post with slide outline)

**High Priority:**

- Add mode decision tree diagram
- Add "Do it now: 3 exercises" box with verification
- Create slide outline (10 slides)

**Medium Priority:**

- Consolidate "Failure Modes and Pitfalls" into tight checklist
- Shorten Tailwind example by 20-30%
- Add final verification command block

**Low Priority:**

- Add version/disclaimer note (models evolve)

**Slide Outline:**

1. Why modes matter
2. Decision tree visual
3. Rush examples
4. Smart default
5. Oracle requests
6. Subagents do/don't
7. Librarian scope
8. Handoff
9. Pitfalls checklist
10. "Try this week"

#### 2. coding-with-agents-2025.md (Post format)

**High Priority:**

- Add "Quick-start in 5 minutes" box at top
- Add Core Loop diagram

**Medium Priority:**

- Replace repeated sections with callouts linking to Power Patterns
- Add "Self-check: Are you doing these 5 things?" checklist

#### 3. amp-first-win-15-minutes.md (Tutorial format)

**High Priority:**

- Add Quick-start header
- Branch the path for users without tests (UI/Storybook route)
- Provide npm/pnpm/yarn + Jest/Vitest command examples

**Medium Priority:**

- Add "Share your win" checklist at end
- Add troubleshooting box at top with fix prompts

#### 4. agent-workflows-that-stick.md (Slide-friendly + detailed post)

**High Priority:**

- Add top "Workflow checklist" card

**Medium Priority:**

- Add 2 visuals (clean vs messy desk; fork thread flow)
- DRY token hygiene → link to Power Patterns
- Add "This week: 3 reps" exercises with success criteria

**Slide Outline:**

1. Problem with long threads
2. Start new threads often
3. External memory pattern
4. Feedback loops
5. Git discipline
6. Forking threads
7. Add tests to confirm
8. Try this week

#### 5. what-is-an-agent.md (Slide-friendly micro-post)

**High Priority:**

- Add "Try it now in 2 minutes" CTA with exact prompt
- Add agent loop diagram

**Medium Priority:**

- Add 3-question mini-FAQ

**Slide Outline (5 slides):**

1. What is an agent?
2. The core loop (diagram)
3. Tools agents use
4. When the loop stops
5. Try it now

#### 6. agent-planning-workflow.md (Tutorial/guide format)

**High Priority:**

- Front-load 2-minute quickstart

**Medium Priority:**

- Add .agents/plans Kanban flow diagram
- Add copy/paste Oracle review prompt box
- Consider moving detailed templates to separate page
- Trim "Real Example: This Blog" by ~30%

#### 7. verified-git-commits-ssh.md (Tutorial format)

**High Priority:**

- Add OS-specific notes (macOS/Linux/Windows)

**Medium Priority:**

- Add "Enforce signed commits" section (GitHub branch protection)
- Add troubleshooting box (common issues)

**Low Priority:**

- Note that SSH signing config is stable

### Phase 3: Cross-Linking & Navigation

1. **Practice Path for New Users**
   - What is an Agent (5 min) →
   - First Win (15 min) →
   - Workflows That Stick (20 min) →
   - Planning Workflow (25-40 min) →
   - Power Patterns (30 min) →
   - Optional: Verified Commits (10-15 min)

2. **Specific Next Steps**
   - At end of each post, link to specific next recommended step
   - Not just generic related list

3. **Add Difficulty Tags**
   - Beginner / Intermediate / Advanced
   - Estimated reading time

## Success Criteria

- [ ] All posts have quick-start headers
- [ ] All posts have "Try it now" boxes with verification
- [ ] 3 core diagrams created and inserted
- [ ] Duplicate content removed and centralized
- [ ] Cross-linking improved with practice path
- [ ] OS-specific guidance added to SSH post
- [ ] Slide outlines created for 3 posts (Power Patterns, Workflows, What is an Agent)
- [ ] Build succeeds
- [ ] All posts render correctly in preview

## Implementation Notes

**Effort Estimates:**

- Small (S, <1h each): Quick-start headers, "Try it now" boxes, small trims, prompt blocks
- Medium (M, 1-3h each): Creating diagrams, OS-specific notes, consolidating content, slide outlines
- Large (L, 1-2d total): Visual assets from scratch, downloadable templates, polished slide decks

**Prioritization:**

- Focus on high-priority items first
- Start with series-level improvements (consistent headers, diagrams)
- Then tackle per-post improvements
- Finally improve cross-linking

**Visual Strategy:**

- Use Mermaid diagrams for simplicity (no external tools needed)
- Keep diagrams simple and focused
- Agent loop: flowchart
- Mode decision tree: flowchart with decision nodes
- Planning Kanban: simple boxes with arrows

**Content De-duplication Strategy:**

- Identify all instances of token hygiene guidance
- Keep most comprehensive version in amp-power-patterns.md
- Replace others with: "For token management best practices, see [Power Patterns](/posts/amp-power-patterns#cost-and-time-tips)"

**Testing Strategy:**

- Build after each major change
- Preview posts locally to verify formatting
- Check all internal links work
- Verify diagrams render correctly

## Deferred for Future

- Full slide decks with speaker notes (wait for workshop needs)
- Downloadable cheat sheets/PDFs (wait for traffic growth)
- Sample demo repository (if readers request more hands-on)
- Interactive content/embeds

## Related Context

- All blog posts in src/content/posts/
- Site structure: Astro v5 + React + TailwindCSS
- Diagrams: Use Mermaid (supported in Markdown)
