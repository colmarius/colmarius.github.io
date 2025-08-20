# Agents Configuration

## Project Setup

This is an Astro-based static site generator with React integration, configured for GitHub Pages deployment.

## Commands

- **Dev server**: `npm run dev` or `npm start`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Lint**: `npm run lint` (Biome linting with auto-fix)
- **Lint & Format**: `npm run lint:fix` (Biome check with formatting and fixes)
- **Deploy**: `npm run publish` (builds and commits to main branch)

## Architecture

- **Framework**: Astro v5 with React integration
- **Styling**: TailwindCSS v4
- **Deployment**: GitHub Pages (static generation)
- **Routing**: React Router with hash routing for SPA compatibility

## Key Files

- `astro.config.mjs`: Astro configuration
- `src/pages/index.astro`: Main entry point
- `src/components/App.tsx`: React router setup
- `src/pages/_*.tsx`: Page components (prefixed with _ to avoid Astro routing)
- `scripts/publish.sh`: Deployment script

## Linting & Formatting

- **Biome**: Modern linter and formatter for JavaScript, TypeScript, and web frameworks
- **Configuration**: Tab indentation, double quotes, recommended rules enabled
- **Auto-fix**: Import organization and code fixes on save
- **File support**: `.astro`, `.tsx`, `.ts`, `.jsx`, `.js` files
- **Special rules**: Relaxed linting for `.astro` files (unused variables/imports disabled)

## Code Guidelines

- **TypeScript**: Use `type` instead of `interface` for type definitions
- **Style**: Prefer functional programming patterns, avoid class/object-oriented approaches
- **Workflow**: Commit changes after each logical step during development

## Development Notes

- Uses `client:only="react"` for the main app to avoid SSR issues
- Browser APIs (like `window`) must be conditional for build compatibility
- Build output goes to `dist/` directory
- GitHub Pages configured with CNAME for custom domain
