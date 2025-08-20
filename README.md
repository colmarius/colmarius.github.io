# colmarius.github.io

Hi there, this is my personal website built with Astro. Feel free to look around!

Don't be shy.. drop me a line if you feel like doing so :-)

## 🚀 Tech Stack

- **Framework**: [Astro v5](https://astro.build/) with React integration
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Deployment**: GitHub Pages with automated deployment
- **Domain**: [marius-colacioiu.com](https://marius-colacioiu.com)

## 🛠️ Development

### Commands

```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run check      # TypeScript type checking
```

### Project Structure

```text
├── src/
│   ├── components/    # React components
│   ├── layouts/       # Astro layouts
│   ├── pages/         # Astro pages (file-based routing)
│   └── styles/        # Global styles
├── public/            # Static assets
└── .github/workflows/ # GitHub Actions
```

## 🚢 Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

The deployment uses the official [Astro GitHub Action](https://github.com/withastro/action) for seamless integration.

### Manual Setup Required

After cloning, configure your GitHub repository:

1. Go to **Settings** > **Pages**
2. Set **Source** to "GitHub Actions"
3. Configure custom domain if needed

## 📁 Key Files

- `astro.config.mjs` - Astro configuration
- `src/layouts/Layout.astro` - Main layout with navigation
- `public/CNAME` - Custom domain configuration
- `.github/workflows/deploy.yml` - Deployment workflow
