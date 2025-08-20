// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://colmarius.github.io',
  integrations: [react()],
  
  // Configure for GitHub Pages deployment
  output: 'static',

  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@config': '/src/config',
        '@types': '/src/types',
        '@assets': '/src/assets',
        '@layouts': '/src/layouts'
      }
    },

    plugins: [tailwindcss()]
  }
});