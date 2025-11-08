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
├── data/          # Content data
├── layouts/       # Astro layouts
├── pages/         # Routes (index.astro is entry)
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

### Plan Tracking

**All plans should be tracked in `.agents/plans/` structure:**

```text
.agents/plans/
├── todo/
├── in-progress/
└── completed/
```

**Plan Lifecycle:**

1. Create new plans in `.agents/plans/todo/[plan-name].md`
2. For complex/multi-layer plans: Consult Oracle to review and simplify before starting work
3. Move to `.agents/plans/in-progress/` when work begins
4. Keep plans up to date while working on implementation
5. Move to `.agents/plans/completed/` when done
6. Update plan after completion with results

**Guidelines:**

- Plans should have specific, actionable steps
- **Keep scope minimal:** Focus on core functionality, defer nice-to-haves
- **Include "Implementation Notes":** Add context for key principles, pitfalls, testing strategy
- Update plan status and progress regularly during development
- Reference related files and code locations in plans
- Use plans to track multi-step changes across layers
- For blocked plans: note the blocker and next action in the plan
