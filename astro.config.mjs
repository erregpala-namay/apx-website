import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://erregpala-namay.github.io',
  base: '/apx-website',
  integrations: [sitemap()],
  output: 'static'
});
