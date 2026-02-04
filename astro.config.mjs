// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  integrations: [
    react(),
    mdx({
      remarkPlugins: [
        // Adds a TOC when you place "## On this page" in MDX
        [remarkToc, { heading: 'On this page', maxDepth: 3 }],
      ],
    }),
  ],
});
