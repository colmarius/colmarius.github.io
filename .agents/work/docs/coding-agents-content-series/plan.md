# Coding Agents Content Series Plan

## Goal

Create a series of blog posts about coding agents and Amp to share knowledge with developers and inspire them to try coding agents. Content should work both as standalone posts and as presentation slides for meetups.

## Scope

- Keep it essential and focused
- Posts should be slide-friendly where appropriate
- Create a main entry/keynote post that links to all others
- Focus on practical insights and real examples

## Resources to Research

### Web Resources

- [ ] Amp website: <https://ampcode.com/>
- [ ] Manual: <https://ampcode.com/manual>
- [ ] Latest news/features: <https://ampcode.com/news/>
- [ ] Models: <https://ampcode.com/models>
- [ ] Free version: <https://ampcode.com/free>
- [ ] How to build an Agent: <https://ampcode.com/how-to-build-an-agent>
- [ ] Thorsten Ball - "How I use Amp": <https://ampcode.com/how-i-use-amp>
- [ ] YouTube channel: <https://www.youtube.com/@Sourcegraph>
- [ ] X/Twitter: <https://x.com/AmpCode>

### Local Resources

- [ ] Read existing blog posts to understand style/format
- [ ] Review coding-with-agents.json for existing summaries
  - Raising an Agent series (8-part documentary)
  - Build Crew series (practices & prompting)
  - Next Token series
  - "The Emperor Has No Clothes" podcast
  - Beyang Liu's skillset talk

## Proposed Posts (Oracle-Reviewed)

**Total: 4 posts (1 hub + 3 practical deep-dives)**

### 1. Hub/Keynote: Coding with Agents in 2025 — A Practical Field Guide

- One-link overview, works as a talk
- ~8-12 H2 slides
- Covers: why agents now, core loop, Amp mindset, workflows overview, example prompts, pitfalls
- Links to the three deep-dive posts

### 2. How I Use Amp: From Clean Repo to First Win in 15 Minutes

- Goal: Get readers a quick, real success
- End-to-end first win example
- Covers: setup, feedback loops, prompt patterns, diff review, verification
- Example: fixing failing tests

### 3. Agent Workflows That Stick: Short Threads, External Memory, Staged Diffs

- Goal: Make success repeatable and robust
- Covers: short threads, external memory, git discipline, feedback loops
- The "desk analogy" - keep context clean
- Practical patterns for avoiding context rot

### 4. Amp Power Patterns: Subagents, Oracle, Librarian, and Rush Mode

- Goal: Unlock leverage without complexity
- When and how to use power features
- Covers: Rush vs Smart, subagents, Oracle, Librarian, Handoff
- Cost/time tips and failure modes

## Implementation Phases

### Phase 1: Research & Context Building

1. Read all web resources systematically
2. Store key information in `.agents/context/amp-research.md`
3. Read existing local blog posts for style
4. Identify additional insightful topics

### Phase 2: Planning & Review

1. Refine post topics based on research
2. Consult Oracle to review and simplify plan
3. Create detailed outlines for each post

### Phase 3: Content Creation

1. Write individual posts
2. Ensure slide-friendly structure where appropriate
3. Create main entry/keynote post
4. Consult Oracle for final review

### Phase 4: Polish & Integration

1. Address Oracle feedback
2. Verify links and references
3. Test slide view (if applicable)
4. Final build check

## Implementation Notes

### Key Principles

- **Essential over comprehensive**: Focus on core insights
- **Practical over theoretical**: Real examples and use cases
- **Inspiring over technical**: Make developers want to try it
- **Structured for slides**: Clear sections, concise points where appropriate

### Style Guidelines

- Match existing blog post style
- Use markdown for all content
- Include code examples where relevant
- Link to resources fluently
- Keep technical but accessible

### Testing Strategy

- Run `npm run build` to verify content compiles
- Preview posts in both blog and slide views
- Check all external links
- Verify type safety

## Files to Create/Modify

- `.agents/context/amp-research.md` - Research notes
- `src/pages/blog/[post-slugs].md` - Individual posts
- Main data files if needed for post metadata

## Blockers/Dependencies

- None identified yet
- May need to understand existing blog post structure/frontmatter format

## Next Actions

1. Start researching web resources systematically
2. Store findings in context folder
3. Review existing blog posts
4. Consult Oracle for plan review
