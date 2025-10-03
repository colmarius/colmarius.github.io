---
title: "Amp: The Emperor Has No Clothes"
resourceId: 2
date: "2025-09-26"
---

# Summary of "Amp: The Emperor Has No Clothes"

This video from Latent Space, titled "Amp: The Emperor Has No Clothes," features a discussion with Alessio, Quinn Slack (CEO), and Thorsten Ball (Amp Dictator) from Sourcegraph about their new product, Amp, an AI coding agent. The video was published on September 26, 2025, and has 4,036 views.

## Extended summary of the important topics

- Introduction: The podcast introduces Quinn Slack, CEO, and Thorsten Ball, "Amp Dictator," from Sourcegraph, who discuss their AI coding agent, Amp Code.

- Transition from Cody to Amp: Sourcegraph decided to launch Amp as a new brand, separate from their previous product Cody, to reset user expectations and allow for faster iteration and a different pricing model. They realized Amp was a different kind of product—a "tool calling agent" that needed to be handled differently.

- The Importance of Building the Best Coding Agent: In a rapidly evolving AI tooling landscape where no single tool maintains dominance for long, the primary goal for Amp is to build the best coding agent, focusing on continuous improvement rather than static features.

- Adapting to a Rapidly Evolving AI Tooling Landscape: The speakers highlight the constant changes in AI models and tools, emphasizing the need for their product and team to be adaptable and ready to respond quickly to new developments.

- Dogfooding at Sourcegraph: The Amp team actively uses their own product (dogfooding) to build software, including writing 80-90% of their codebase with Amp, which provides valuable fast feedback loops. They also ship new features 15 times a day with no formal code reviews, showcasing an unconventional approach to development.

- CLI vs. VS Code Extension: While Amp started with a VS Code extension for ease of distribution and feedback, they were surprised by the popularity and advantages of a CLI tool, especially for its flexibility in various environments and the rich features terminals offer. They currently support both.

- Positioning Amp in the Coding Agent Market: Amp is not trying to compete with every developer tool, but rather focuses on power users and those at the "model product frontier" who want to move fast and are willing to adapt their workflows to leverage the latest AI capabilities.

- The Diminishing Importance of Model Selectors: They argue that offering model choices to users is becoming less important as the "harness" or "scaffolding" around the model—the system prompt, tools, and overall interaction design—plays a more critical role in achieving good results. Models are increasingly seen as implementation details.

- Tooling vs. Harness: The team focuses on building a "scaffolding" that can easily adapt as models improve, rather than over-investing in features that might be rendered obsolete by more capable models. They are cautious about adding complex features that don't fundamentally improve the agent's core capabilities.

- Common Failure Modes of Coding Agents: A significant challenge is users outsourcing thinking rather than just typing, leading to "spaghetti code" or ineffective results when they don't have a clear desired outcome or understand the agent's limitations. They also mention the non-deterministic nature of LLMs as a unique challenge in software development.

- Agent-Friendly Logging and Tooling: The discussion points to the need for tooling and logging to evolve to be more "agent-friendly," such as unified and verbose logs (like JSON line outputs) that agents can easily interpret, even if they are not formatted for human consumption.

- Are Subagents Real?: The concept of subagents, with curated tools and contexts, shows potential for tasks like running specific tests, potentially even utilizing smaller, fine-tuned models for those specialized functions.

- New Frameworks and Agent-Integrated Developer Tools: They anticipate a future where frameworks and developer tools are built with agents in mind, offering deeper integration and making it easier for agents to access context and troubleshoot problems, similar to how Rails provided an in-error-page CLI.

- How Agents Are Encouraging Codebase and Workflow Changes: Agents are driving a shift where developers are more willing to adapt their codebases and processes to better utilize AI, a departure from the past where codebases were considered static.

- Evolving Outer Loop Tasks: The challenge of managing multiple async agents and understanding their progress is discussed, comparing it to a chess master playing multiple boards simultaneously. The need for better UI/UX to quickly orient users to agent changes is highlighted.

- Version Control and Merge Conflicts in an AI-First World: AI agents, especially when run in parallel, can introduce more frequent merge conflicts, raising questions about whether current version control systems like Git are well-suited for this AI-driven future.

- Rise of User-Generated Enterprise Software: The discussion touches on the idea that non-coders who are skilled at unambiguously specifying their needs can build powerful custom software using AI agents, moving towards a future of user-generated enterprise applications.

- Empowering Technical Leaders with AI: They emphasize the importance of empowering technical leaders who possess a strong internal constitution and first-principles thinking to experiment and "do crazy stuff" to drive innovation in the AI space.

- Evaluating Product Without Traditional Evals: The Amp team does not use formal evals for their coding agent due to the rapid pace of change and the complexity of evaluating an agent across many different codebases and tasks. Instead, they rely on fast feedback loops from internal dogfooding.

- Hiring: They are interested in talking to and hiring engineers who are passionate about agentic programming and are excited to explore the changing landscape of programming.

You can watch the full video here: <https://www.youtube.com/watch?v=b4rOVZWLW6E>
