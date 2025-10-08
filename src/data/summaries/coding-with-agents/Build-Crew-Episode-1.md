---
title: "BuildCrew - Episode 1"
resourceId: 3
series: "build-crew"
episode: 1
date: "2025-09-17"
---

This video from Sourcegraph, titled "Launching Build Crew: AI agent best practices and prompting strategies with the Amp team," features Ryan, Thorsten Ball, Jason Harris, Justin, Tyler, and Graham from the Amp team discussing the launch of Build Crew, a community for developers building with AI agents.

## Build Crew Launch

Sourcegraph launched "Build Crew," a free community for developers working with AI agents. It offers a platform for sharing knowledge, a leaderboard, badges, and a Twitter DM group for support. Users of Amp also receive $100 in credits.

Build Crew: <https://buildcrew.team/>

## Prompting Strategies for AI Agents

The team shares their best practices for prompting agents.

- Structured Prompts [20:03]: Jason uses a structured approach with a clear goal and phases, often asking the agent to repeat the mission to ensure understanding.

- Chain of Thought Prompting [27:38]: Thorsten emphasizes the importance of making the agent plan its actions aloud, similar to a "chain of thought," which improves results by keeping the plan in the context window.

- Short Threads and External Memory [29:04]: Thorsten prefers short threads and, if a new thread is needed for a continuing task, he has the agent write the relevant information (problem, background, steps left) into a file, which is then referenced in the new thread. This acts as an external memory to avoid context limits and noise.

- Oracle (Sub-Agent) for Reasoning [14:46]: The Amp team utilizes an "Oracle" sub-agent (using OpenAI's 03 model) for complex reasoning tasks. The main agent provides the Oracle with only the necessary context, allowing for more efficient and focused problem-solving.

- Verbalizing Prompts [55:08]: Graham finds verbalizing his ideas with tools like Super Whisper helpful for generating more comprehensive initial prompts.

- Slowing Down and Specificity [55:59]: Tyler and Thorsten both advocate for slowing down, thinking through the problem, and providing long, specific prompts to reduce the solution space for the agent.

- Code is Cheap, Iterate Fast [56:43]: Tyler highlights that with AI, code generation is cheap, encouraging willingness to revert and try different code paths without significant cost.

- Don't Get Drunk on Tokens [57:13]: Justin advises against filling the context window unnecessarily, promoting smaller, focused interactions.

- Don't Say No for Your Buyer [57:49]: Jason encourages users to be open-minded about what AI agents can achieve, as their capabilities are rapidly advancing.

## Sharing Threads and Public Prompts

The team discusses the growing trend of sharing AI agent threads, either for feedback, education, or as part of pull requests. While there's a perceived "imposter syndrome" [51:35] around sharing prompts, they encourage it as a way to collectively learn and advance the industry. They also mention redacting common API keys for security, but advise users to be cautious with sensitive data.

You can watch the full video here:

- Youtube: <<https://www.youtube.com/watch?v=3bqA5HVyQbk>
- X:  <https://x.com/AmpCode/status/1966532763680682286>
