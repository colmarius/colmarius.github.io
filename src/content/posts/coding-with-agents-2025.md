---
title: 'Coding with Agents in 2025: A Practical Field Guide'
description: 'From zero to productive with coding agents—what works, what to avoid, and how to get your first wins in minutes.'
pubDate: 2025-11-07
tags: ['ai-agents', 'amp', 'workflows']
draft: true
---

**TL;DR:**

- Coding agents run tools in a loop to achieve your goals—no magic, just good engineering
- Small wins compounded beat big ambitious failures—start simple, iterate fast
- Short threads + clear goals + feedback loops = reliable results

## Why Agents Now?

The shift from copilots to agents happened when LLMs learned to:

- Use tools reliably (read files, run commands, edit code)
- Chain actions in a loop until goals are met
- Learn from observations and adjust their approach

An agent is just **an LLM calling tools in a loop to achieve a goal**. (Credit: [Simon Willison](https://simonwillison.net/2025/Sep/18/agents/))

## What "Good" Looks Like

Good agent work isn't about grand architectural changes—it's small wins compounded:

- Fix failing tests and verify they pass
- Add a dark mode toggle and confirm it renders
- Refactor a component and check the build succeeds
- Clean up debug statements across 20 files

Each task: clear goal, feedback loop, verification.

## The Core Loop

```text
goal → think → choose_tool → call_tool → observe_result
    → decide: done? otherwise refine and loop
```

This loop is why agents work. They don't just generate code—they:

- Run it
- See errors
- Fix them
- Verify the fix
- Repeat

## The Amp Mindset

[Amp](https://ampcode.com/) is built on four principles:

1. **Unconstrained token usage** - no artificial context limits
2. **Always uses the best models** - multi-model approach for each task
3. **Raw model power** - full access to AI capabilities
4. **Built to evolve** - adapts with new models

In practice, this means:

- **Short threads**: Start new threads around 50–100k tokens; beyond ~100k quality degrades
- **Clear goals**: "Fix TypeScript errors and re-run build until it passes"
- **Feedback loops**: Let the agent run tests, see screenshots, verify results
- **Git discipline**: Stage good changes, discard bad ones

## Three Workflows to Master

### 1. First Win in 15 Minutes

Pick a small task (failing test, UI tweak), give it to the agent with a verification step, review the diff, done.

**Example prompt:**

```text
Run the tests, list failures, fix one file at a time, re-run.
Stop after green.
```

### 2. Workflows That Stick

Keep threads small, use external memory (context.md files), maintain tight feedback loops, and leverage git staging.

**Pattern:**

```text
Start new threads often → Avoid context rot
Write to context.md → Future threads reference it
Stage good changes → Discard bad ones
```

### 3. Power Patterns

When simple won't cut it, reach for subagents (parallelization), Oracle (deep reasoning), or Librarian (cross-repo research).

**Example:**

```text
Use 3 subagents to convert these CSS files to Tailwind
```

## Prompts You Can Copy Today

**Quick wins:**

- "Fix all TypeScript errors in @src/components/Header.tsx and re-run build"
- "Add a dark mode toggle to @components/Nav.tsx"
- "Run the tests and fix failing ones in @tests/user-auth.test.ts"

**Planning without code:**

- "Plan how to add real-time chat to this app, but don't write code yet"

**Feedback loops:**

- "Look at localhost:3000, take a screenshot, and make the header more minimal"

**Deep analysis (uses Oracle):**

- "Review this API design and suggest improvements"

**Cross-repo research (uses Librarian):**

- "Find prior art across org repos for 'feature flag middleware'"

## Common Pitfalls

**Context sprawl:** Start new threads around 50–100k tokens; beyond ~100k quality degrades. Fix: start new threads often.

**Vague prompts:** "Build a batch tool" won't work. Fix: add file paths, links, constraints, approach guidance.

**No feedback loops:** Agent can't verify its work. Fix: include test runs, screenshots, build checks.

**Micromanaging:** Telling the agent every tiny step. Fix: give it the goal and verification criteria.

**Underprompting:** Assuming the agent knows what you want. Fix: be explicit—"Use git blame to tell me who wrote this component."

## Choosing Speed vs Depth

**Rush mode:** 67% cheaper, 50% faster—for small, well-defined tasks
**Smart mode:** State-of-the-art models, unconstrained context—for complex work (default)
**Oracle:** GPT-5 for deep reasoning, planning, debugging across multiple files

Pick based on task complexity, not urgency. Set mode from the Amp UI or command palette.

## Your First 30 Minutes with Amp

1. **Install:** [ampcode.com/install](https://ampcode.com/install)
2. **Setup:** CLI + VS Code extension, learn shortcuts (⌘I, ⌘L)
3. **Mode:** Default Smart works for most tasks; switch to Rush for small, clear tasks
4. **First task:** Pick a failing test or small UI change
5. **Prompt:** Clear goal + verification step
6. **Review:** Use git staging area—stage good, discard bad
7. **Iterate:** Refine prompt if needed, try again
8. **Success:** Green tests or working feature

## What's Next

**Deep-dive posts:**

- [How I Use Amp: From Clean Repo to First Win in 15 Minutes](/posts/amp-first-win-15-minutes) - End-to-end first win
- [Agent Workflows That Stick](/posts/agent-workflows-that-stick) - Repeatable patterns that avoid context rot
- [Amp Power Patterns](/posts/amp-power-patterns) - Subagents, Oracle, Librarian, and when to use them

**Foundation:**

- [LLM Agents: Tools in a Loop](/posts/what-is-an-agent) - Core concepts explained

**Resources:**

- [Amp Manual](https://ampcode.com/manual) - Comprehensive guide
- [How I Use Amp](https://ampcode.com/how-i-use-amp) - Thorsten Ball's workflow
- [Raising an Agent](https://www.youtube.com/playlist?list=PL6zLuuRVa1_iUNbel-8MxxpqKIyesaubA) - 8-part documentary on building Amp

---

**Remember:** Programming with agents is paint-by-numbers—you provide the structure and direction, the agent fills in the details. Start small, iterate fast, compound your wins.
