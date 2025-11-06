---
title: 'LLM Agents: Tools in a Loop'
description: 'A simple introduction: an LLM agent runs tools in a loop to achieve a goal—what that means, a quick example, and when the loop stops.'
pubDate: 2025-11-05
tags: ['ai-agents', 'intro']
draft: false
---

Inspired by [Simon Willison's definition](https://simonwillison.net/2025/Sep/18/agents/)—"LLMs calling tools in a loop to achieve a goal"—this post keeps things simple and practical. If you remember one thing about agents, make it this: **an agent is a loop that thinks, acts with tools, observes, and repeats until done.**

## What is an Agent?

- An agent uses an LLM to decide what to do next
- It can call **tools** (functions/APIs/scripts) to act in the world
- It runs in a loop: think → act → observe → decide → repeat, guided by a goal

## The Core Loop

```text
goal → think → choose_tool → call_tool → observe_result
    → decide: done? otherwise refine plan and loop
```

## Tools an Agent Can Call

- **Files:** read/write files, list directories
- **Code:** run a snippet (e.g., Python/TypeScript) or a test
- **HTTP/APIs:** fetch JSON, call app backends, web search
- **Data:** query a database or vector index
- **System:** shell commands or task runners (with guardrails)

## A Quick Example

**Goal:** "Turn expenses.csv into a bar chart of monthly totals."

1. **Think:** "I need to read the file, group by month, and plot."
2. **Act:** Call `file.read('expenses.csv')` → observe rows
3. **Think:** "I'll write and run a small Python snippet."
4. **Act:** Call `code.run(python, script)` → observe a PNG path
5. **Decide:** Goal reached → return "Chart saved at charts/monthly.png"

## When Does the Loop Stop?

- **Goal reached:** the result satisfies the instruction
- **Safety limits:** max steps/tokens/time reached
- **Stuck:** repeated failures or no progress detected
- **User stop:** human cancels or asks for partial results

## Why This Matters

- **Moves beyond chat:** the LLM can actually *do* things via tools
- **Robustness via iteration:** adjust after each observation
- **Composability:** clear, testable tools keep agents maintainable
- **Safety by design:** constrain tools, log actions, cap loops

## What's Next

Future posts will cover:

- How I think about coding agents
- How I use Amp coding agent
- Practical patterns and workflows
- Real-world examples and lessons learned

---

**Reference:** Simon Willison's [post on agents](https://simonwillison.net/2025/Sep/18/agents/) provides the foundational definition this intro builds on.
