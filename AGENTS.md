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
- No unused imports/vars in `.astro` files (Biome override)

## Important Notes

- `client:only="react"` required for React components (avoid SSR issues)
- Browser APIs must be conditionally accessed
- Build outputs to `dist/`
- Always run `npm run build` after changes to verify
