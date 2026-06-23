# Coding Agent Configuration

## Stack & Architecture

- **Astro v5** + React 19 + TailwindCSS v4
- **Static site** deployed to GitHub Pages
- **Site**: <https://marius-colacioiu.com>
- **Path aliases**: `@components`, `@config`, `@types`, `@assets`, `@layouts`

## Commands

- `npm run dev` - Dev server
- `npm run build` - Production build (runs type checking)
- `npm run preview` - Preview build
- `npm run check` - TypeScript check only
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
- No unused imports/vars in `.astro` files (Biome override)

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

Use the dot-agents v0.3 workflow for durable multi-session work:

```text
Work Item → Context as needed → Plan → Handoff Prompt → Implement → Record Progress
```

Work items live under `.agents/work/<category>/<slug>/` and keep related context together:

- `index.md` - required entrypoint with status, artifacts, next action, and open questions
- `research.md` or `research/` - optional work-local technical findings
- `prd.md` - optional requirements brief when behavior needs alignment
- `plan.md` or `plans/` - implementation-ready task plans
- `progress.md` - implementation log, verification notes, blockers, and next action
- `decisions/` - optional durable decision records

Keep `.agents/research/` for reusable findings that apply across unrelated work. External reference checkouts belong in `.agents/references/` and should not be committed.

### Work Item Lifecycle

1. Create a work item only when the work is multi-session, context-heavy, or benefits from durable handoff.
2. Start with `.agents/skills/agent-work/scripts/new-work.sh --category <category> --slug <slug> --title "<Title>"` when creating a new item.
3. Read `index.md` first when continuing a work item, then load only the artifacts needed for the current step.
4. Keep `index.md` current when status, artifacts, open questions, or next action changes.
5. Keep active task checkboxes in `plan.md` updated and append implementation notes to `progress.md`.
6. Ask for a paste-ready handoff prompt before starting a fresh implementation thread for an existing work item.

Use status values: `researching`, `planned`, `in-progress`, `blocked`, `completed`. Keep status in `index.md`; do not move folders between status directories.

### Task Format

```markdown
- [ ] **Task N: Short descriptive title**
  - Scope: `path/to/affected/files` or module name
  - Depends on: Task M or `none`
  - Acceptance:
    - Specific, verifiable criterion 1
    - Specific, verifiable criterion 2
  - Notes: Optional implementation hints
```

**Task markers:**

| Marker | Meaning |
|--------|---------|
| `- [ ]` | Not started |
| `- [x]` | Completed |
| `- [ ] (blocked)` | Blocked, needs intervention |
| `- [ ] (manual-verify)` | Requires manual verification |

### Installed dot-agents Skills

- `adapt` - analyze the project and refresh `AGENTS.md`
- `agent-work` - create and maintain `.agents/work/` work items
- `feature-planning` - create plans, requirements briefs, and handoff prompts
- `research` - save work-local or reusable research findings
- `tmux` - manage background processes for dev servers and long-running checks

## Git Workflow

- Write clear, descriptive commit messages
- Reference work items in commits when useful (e.g., `Work item: posts-section`)
- Commit after each logical step
