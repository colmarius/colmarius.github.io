# Cross-Linking Improvements Summary

## Completed: 2025-11-08

All blog posts now have improved cross-linking that creates a clear practice path for readers.

## Changes Made

### 1. what-is-an-agent.md

**Added:**

- Clear "What's Next" section with next recommended post
- Practice path showing where this post fits (step 1 of 5)
- Alternative entry point to coding-with-agents-2025
- Visual numbered list showing full learning path

**Key links:**

- Next: [First Win in 15 Minutes](/posts/amp-first-win-15-minutes)
- Alternative: [Coding with Agents in 2025](/posts/coding-with-agents-2025)

### 2. coding-with-agents-2025.md

**Added:**

- Next step recommendation (First Win in 15 Minutes)
- Alternative start (What is an Agent)
- Practice path with "You are here" marker
- Standalone post callout (verified-git-commits-ssh)
- Kept resources section

**Key links:**

- Next: [First Win in 15 Minutes](/posts/amp-first-win-15-minutes)
- Foundation: [What is an Agent?](/posts/what-is-an-agent)

### 3. amp-first-win-15-minutes.md

**Already had:**

- Next step in Quick Start box: [Workflows That Stick](/posts/agent-workflows-that-stick)
- Related posts at bottom

**Status:** No changes needed (already well-linked)

### 4. agent-workflows-that-stick.md

**Updated:**

- Added practice path with "You are here" marker (step 3 of 5)
- Kept clear "Next:" to Power Patterns
- Simplified related links
- Updated token management callout to reference Power Patterns

**Key links:**

- Next: [Amp Power Patterns](/posts/amp-power-patterns)
- Reference in callout: [Power Patterns](/posts/amp-power-patterns) for token hygiene

### 5. amp-power-patterns.md

**Updated:**

- Added "Next:" section pointing to Planning Workflow
- Added practice path with "You are here" marker (step 4 of 5)
- Simplified related links
- Kept resources section

**Key links:**

- Next: [Set Up Planning Workflow](/posts/agent-planning-workflow)
- Related: [Coding with Agents in 2025](/posts/coding-with-agents-2025)

### 6. agent-planning-workflow.md

**Updated:**

- Changed "Related Posts" to "What's Next"
- Added completion message ("You've completed the practice path!")
- Added full practice path with "You are here" marker (step 5 of 5)
- Added standalone post callout
- Changed "Next:" to "Challenge:" since this is the end of the path

**Key links:**

- Related: [Coding with Agents in 2025](/posts/coding-with-agents-2025)
- Standalone: [Verified Git Commits with SSH](/posts/verified-git-commits-ssh)

### 7. verified-git-commits-ssh.md

**Updated:**

- Added "Related:" section with links back to main content
- Positioned as standalone security best practice

**Key links:**

- Related: [Coding with Agents in 2025](/posts/coding-with-agents-2025)
- Related: [What is an Agent?](/posts/what-is-an-agent)

## Practice Path Flow

The recommended learning path is now clearly visible in all posts:

1. **What is an Agent** (5 min) - Foundation
2. **First Win in 15 Minutes** (15 min) - Hands-on practice
3. **Workflows That Stick** (20 min) - Repeatable patterns
4. **Power Patterns** (30 min) - Advanced features
5. **Planning Workflow** (25-40 min) - Complex features

**Alternative entry points:**

- **Coding with Agents in 2025** - Complete overview before diving in

**Standalone:**

- **Verified Git Commits with SSH** - Security best practice

## Cross-References Added

### Contextual Body Links

- agent-workflows-that-stick.md → amp-power-patterns.md (token management callout)

### Quick Start Box Links

All posts already have "Next step:" in Quick Start boxes pointing to recommended next post.

### Bottom Navigation

All posts now have:

- Clear "Next:" recommendation
- Practice path with current position
- Related/Standalone posts where appropriate

## Verification

✅ Build succeeds (`npm run build`)
✅ All internal links use correct format: `/posts/[slug]`
✅ Practice path is consistent across all posts
✅ Each post clearly indicates position in path
✅ Standalone post (verified-git-commits-ssh) properly identified

## Benefits

1. **Clear learning path**: Readers know exactly what to read next
2. **Progress tracking**: "You are here" markers show position in path
3. **Flexible entry**: Multiple entry points (what-is-an-agent or coding-with-agents-2025)
4. **Completion signal**: Final post celebrates path completion and issues challenge
5. **Better discovery**: Related links help readers find relevant content
6. **Reduced redundancy**: Removed duplicate "related" links, focused on path
7. **Standalone clarity**: Git security post clearly marked as optional/standalone

## Next Actions

- ✅ Cross-linking complete
- Move to next improvement phase (diagrams, exercises, or content de-duplication)
