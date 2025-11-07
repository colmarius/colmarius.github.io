# Amp Research Notes

## What is Amp?

Amp is a frontier coding agent built by Sourcegraph that integrates into terminal and editor workflows. It's designed to maximize capabilities of latest AI models for coding tasks.

### Core Value Proposition

- Autonomous reasoning and comprehensive code editing
- Complex task execution with multiple models
- Premium, highly polished agentic experience
- Significantly boosts developer productivity

### Four Key Principles

1. **Unconstrained token usage** - no artificial context limits
2. **Always uses the best models** - multi-model approach
3. **Raw model power** - direct access to full AI capabilities
4. **Built to evolve** - adapts with new model releases

## How Amp Works

### Agent Modes

- **Smart (default)**: Claude Sonnet 4.5, state-of-the-art, unconstrained context (paid)
- **Rush**: Claude Haiku 4.5, 67% cheaper & 50% faster for small tasks
- **Free**: Various fast models, ad-supported, no data training required

### Models Used

- **Agent**: Claude Sonnet 4.5 (smart), Claude Haiku 4.5 (rush)
- **Oracle**: GPT-5 for complex reasoning
- **Librarian**: Claude Sonnet 4.5 for cross-repo research
- **Search**: Claude Haiku 4.5 for codebase retrieval
- **Tab**: Amp-Tab-4 for next-action predictions
- **Review**: Gemini 2.5 Flash-Lite for code review

### Core Features

- **AGENTS.md files**: Project-specific guidance for the agent
- **Subagents**: Spawn independent agents for complex tasks
- **Oracle**: Second-opinion model for deep analysis
- **Librarian**: Search public/private GitHub repos
- **Thread sharing**: Save and share conversations
- **Image support**: Screenshots, diagrams, visual feedback
- **File mentioning**: `@filename` to include files
- **Custom commands**: Reusable prompts in `.agents/commands`
- **Toolboxes**: Extend with project-specific scripts
- **MCP support**: Model Context Protocol for custom tools

## Best Practices from Thorsten Ball

### Workflow Patterns

- **"Paint-by-Numbers" Programming**: You provide structure/direction, agent fills in details
- **Keep threads small**: Context >100k tokens leads to imprecision
- **Start new threads often**: Most user problems stem from reusing threads too long
- **Use Git staging area**: Stage good changes, discard bad ones
- **Iterate with screenshots**: Use Storybook/visual feedback for UI changes

### Prompting Strategy

- **Be explicit and detailed** - not vague
- Include file paths, links to relevant code/docs
- Specify constraints, architecture considerations
- Tell it HOW to approach (e.g., "start simple, then evolve")
- Provide context about bugs or desired outcomes
- State intent clearly: "Use git blame to tell me who wrote this"

### Practical Tips

- Use VS Code extension with keyboard shortcuts (⌘I, ⌘L)
- Ask for small, focused tasks (remove debug statements, fix errors)
- Paste screenshots directly (⌘-v/ctrl-v)
- Use screenshots of errors for debugging
- Ask for diagrams (Mermaid) to explain complex logic
- Connect to databases for SQL query generation
- Use git diff for code review
- Share threads for knowledge transfer

### What Thorsten Uses Amp For

- 70-80% of code he commits is written by Amp
- Small feature implementation
- Running builds and fixing errors
- Code cleanup and simplification
- UI component changes (with Storybook feedback)
- Database queries via psql or MCP
- Code search and navigation

## Latest Features (2025)

### New Capabilities

- **Rush mode**: 67% cheaper, 50% faster for small tasks
- **Librarian**: Cross-repo GitHub search (public & private)
- **GPT-5 Oracle**: Access to GPT-5 for complex reasoning
- **Workspace settings**: `.amp/settings.json` for project configs
- **Public profiles**: Share threads and learn from others
- **Amp reads threads**: Reference existing threads with `@`
- **Command palette**: Replaces slash menu
- **Review panel**: VS Code panel for reviewing agent changes
- **Handoff**: Extract relevant context into new focused threads
- **50% faster search**: Using Haiku 4.5

### Developer Experience

- CLI edit, restore, fork with keyboard shortcuts
- Better toolboxes (`amp tools make/show/use`)
- Free mode with no training required
- 1M token context windows
- Streaming JSON for integration
- Multi-root workspace support
- Secret redaction

## Building Coding Agents - Key Insights

### What Makes Agents Work

Three core components:

1. **LLM** - the "brain" (e.g., Claude)
2. **Loop** - execution cycle for repeated actions
3. **Enough tokens** - sufficient context window

### The Power of Tools

- Tools are external capabilities LLM can invoke
- LLMs are trained and eager to use tools
- Can chain tools together for complex tasks
- Examples: read_file, list_files, edit_file

### Design Principles

- **Simplicity first**: Core loop is surprisingly simple
- **Clear tool definitions**: Descriptive names, precise descriptions
- **Iterative development**: Start small, experiment, refine
- **Leverage LLM eagerness**: Design for natural tool use
- **Manage conversation state**: Agent maintains history/memory
- **Focus on integration**: "Elbow grease" for advanced features

### Emergent Capabilities

- Tool chaining (list → read → edit)
- Contextual understanding beyond initial input
- Proactive problem solving without explicit instructions

## Communication Guidelines

When describing Amp:

- Avoid marketing buzzwords
- Be succinct and conversational
- Reference the 4 principles
- Mention oracle, subagents, CLI, web UI
- Show concrete example prompts
- Focus on practical capabilities

### Example Prompts

- "Fix all the TypeScript errors in this file"
- "Run the tests and fix any failing ones"
- "Add a dark mode toggle to this React component"
- "Find where user authentication is handled"
- "Plan how to add real-time chat, but don't write code yet"
- "Use 3 subagents to convert CSS files to Tailwind"
- "Review this API design and suggest improvements" (Oracle)
- "git blame this file and tell me who added that function"

## Resources

### Video Content

- **Raising an Agent** (8-part series): Building Amp, context engineering, sub-agents, Oracle pattern
- **Build Crew** (series): Best practices, prompting strategies, live coding
- **Next Token** (series): Discussions on AI agents and trends
- **"The Emperor Has No Clothes"**: Philosophy, shipping cadence, architecture insights
- **Beyang Liu talk**: Evolution from copilots to agents, design decisions, best practices

### Links

- Website: <https://ampcode.com/>
- Manual: <https://ampcode.com/manual>
- News: <https://ampcode.com/news/>
- Models: <https://ampcode.com/models>
- Free version: <https://ampcode.com/free>
- How to build: <https://ampcode.com/how-to-build-an-agent>
- Thorsten Ball: <https://ampcode.com/how-i-use-amp>
- YouTube: <https://www.youtube.com/@Sourcegraph>
- Twitter: <https://x.com/AmpCode>
