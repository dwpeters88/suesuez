import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  image: {
    domains: ['cdn.shopify.com'],
  },
  vite: {
    ssr: {
      noExternal: ['shopify-buy'],
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});