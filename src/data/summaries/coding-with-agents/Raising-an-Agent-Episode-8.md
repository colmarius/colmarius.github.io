---
title: "Raising an Agent - Episode 8"
resourceId: 1
series: "coding-with-agents"
episode: 8
date: "2025-06-01"
---

# Summary of "Raising An Agent - Episode 8"

The video is an episode of "Raising an Agent," featuring a discussion between members of the Sourcegraph team about their process for evaluating and integrating different Large Language Models (LLMs) into their AI coding product, AMP.

## Model Strategy

AMP's philosophy is to combine the best models across the industry, creating a product that is more effective as a whole [01:09:00].

- The primary model is currently Sonnet 4 [01:39:00].

- They use an "alloying" approach, combining models like Sonnet (for fast, iterative behavior) and GPT-3 (03) (for the "Oracle" agent, which provides deep reasoning and a second opinion) [02:05:00].

## Evaluation of Competing Models

- Gemini Pro (Previous Version): Struggled to be the main agent due to issues with complex, multi-step tasks and unreliable low-level tool calling mechanics, which is crucial for an iterative, self-correcting agent [03:40:00].

- Open Source Models (e.g., K2, Qwen 3 Coder): Show great progress in tool calling but are currently only about 80% as capable as Sonnet for the main agent role. They are better suited for narrow, fast sub-agents like search and retrieval [13:16:00].

## GPT-5 Integration

- GPT-5 has significantly raised the bar for tool calling, making it a strong contender for the main agent driver [18:07:00].

- It is highly steerable and instructible but required extensive tuning to the existing system prompts, which were initially designed for Sonnet, to prevent overly succinct or awkward responses [23:04:00].

## Future Direction

The team is excited to explore the speed dimension of models, hoping that significantly faster agents can change the user experience and reduce the distracting latency that exists in current agentic workflows [34:06:00].

## Evaluation Philosophy

The team relies heavily on qualitative evals (manual testing and "vibe checks" across a diverse set of tasks) because quantitative metrics often fail to capture the complex, multi-dimensional nature of the end-user experience [38:36:00].

The ultimate goal is not to find a single "winner" but to understand each model's unique strengths to create specialized sub-agents that work together in an effective "alloy" [46:40:00].

You can watch the full video here: <https://youtu.be/ojAdu4vGYyI?si=UFYuFDvD-1Poh3pc>
