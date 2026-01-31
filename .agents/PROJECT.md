# Project Configuration

## Project Name

marius-colacioiu.com (colmarius.github.io)

## Tech Stack

- Language: TypeScript
- Framework: Astro v5 + React 19
- Styling: TailwindCSS v4
- Linting/Formatting: Biome
- Deployment: GitHub Pages (static site)

## Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build (includes type checking)
npm run build

# Preview production build
npm run preview

# Type check only
npm run check

# Lint & format
npm run lint:fix
```

## Conventions

- Use `type` not `interface` for TypeScript
- Functional patterns over OOP
- Single quotes, semicolons (Biome enforced)
- 2 spaces for indentation (Biome enforced)
- `client:only="react"` required for React components (SSR compatibility)
- Path aliases: `@components`, `@config`, `@types`, `@assets`, `@layouts`

## Architecture Notes

Static personal website built with Astro. React components hydrated client-side only. Source structure:

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

Build outputs to `dist/`, deployed to https://marius-colacioiu.com
