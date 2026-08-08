# Coding Agent Configuration

## Stack & Architecture

- **Astro v7** + React 19 + TailwindCSS v4
- **Static site** deployed to GitHub Pages
- **Site**: <https://marius-colacioiu.com>
- **Path aliases**: `@components`, `@config`, `@types`, `@assets`, `@layouts`, `@utils`, `@scripts`

## Commands

- `npm run dev` - Dev server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run check` - Astro and TypeScript diagnostics
- `npm run lint:fix` - Lint & format with Biome

## Project Structure

```text
src/
├── components/    # React components
├── content/       # Astro content collections (posts, summaries)
├── data/          # Content data
├── hooks/         # React hooks
├── layouts/       # Astro layouts
├── pages/         # Routes and API endpoints (index.astro is entry)
├── scripts/       # Client scripts
├── styles/        # Global styles
├── types/         # Type definitions
└── utils/         # Utilities
```

## Code Conventions

- Use `type` not `interface`
- Functional patterns over OOP
- Single quotes, semicolons (Biome enforced)
- 2 spaces for indentation, no tabs (Biome enforced)
- Biome's `.astro` override disables `useConst`, `useImportType`, and unused import/variable rules

## Important Notes

- `client:only="react"` required for React components (avoid SSR issues)
- Browser APIs must be conditionally accessed
- Build outputs to `dist/`
- Always run `npm run build` after changes to verify

## Astro Best Practices

- When implementing features with Astro, consult <https://docs.astro.build/llms.txt> for official best practices and patterns
- Use `read_web_page` tool to fetch guidance when needed

## Development Workflow

### dot-agents Work Items

Choose the smallest useful path:

- Keep small, self-contained planning and execution in the current conversation.
- Create a durable work item when resumption, coordination, handoff, auditability, durable decisions, or an explicit request makes repository context valuable.
- Implement in the current thread by default; use an optional handoff only when another thread, worker, or environment is useful.

Durable work lives under `.agents/work/<category>/<slug>/`. Read `index.md` first when continuing an item, then load only the artifacts needed for the current step. Use `agent-work` for requirements, plans, refinement, execution, coordination, and handoffs.

Follow `.agents/work/AGENTS.md` for the canonical artifact, status, evidence, and lifecycle rules. Keep `.agents/research/` for reusable findings that apply across unrelated work; external reference checkouts belong in `.agents/references/` and should not be committed.

After implementation and verification, promote reusable outcomes, commit the completed work-item snapshot, then use `.agents/skills/agent-work/scripts/close-work.sh` to validate and stage explicit removal. Git history is the archive; sync never deletes work items.

### Installed dot-agents Skills

- `adapt` - analyze the project and refresh `AGENTS.md`
- `agent-browser` - discover current browser automation workflows from the installed CLI
- `agent-work` - manage durable work from requirements and plans through execution and handoffs
- `research` - research technical topics and save findings when durability helps

## Git Workflow

- Write clear, descriptive commit messages
- Reference work items in commits when useful (e.g., `Work item: posts-section`)
- Commit after each logical step
