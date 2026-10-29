// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // CONFIRM: final domain. The GitHub Pages client preview sets PAGES_SITE / PAGES_BASE (see .github/workflows).
  site: process.env.PAGES_SITE || 'https://www.gencoserramenti.it',
  base: process.env.PAGES_BASE || '/',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
});
