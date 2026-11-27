import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in this file after choosing your public domain.
export default defineConfig({
  site: 'https://example.com',
  base: '/',
  integrations: [sitemap()],
  output: 'static'
});
