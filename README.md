# colmarius.github.io

Personal website built with Astro and React, deployed on GitHub Pages.

**Live site**: [marius-colacioiu.com](https://marius-colacioiu.com)

## Tech Stack

- **Astro v5** with React 19
- **TailwindCSS v4**
- **Biome** for linting and formatting
- **GitHub Pages** automated deployment

## Development

```text
npm install       # Install dependencies
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview build
npm run check     # TypeScript check
npm run lint:fix  # Lint & format
```

## Project Structure

```bash
src/
├── components/    # React components
├── data/          # Content data
├── layouts/       # Astro layouts
├── pages/         # Routes (file-based)
├── scripts/       # Client scripts
├── styles/        # Global styles
├── types/         # TypeScript types
└── utils/         # Utilities
```

## Deployment

Auto-deploys to GitHub Pages on push to `main`. Uses [Astro GitHub Action](https://github.com/withastro/action).

**Setup**: Go to **Settings** > **Pages** > Set **Source** to "GitHub Actions"
