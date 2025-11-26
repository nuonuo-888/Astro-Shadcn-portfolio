import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://Astro-Shadcn-portfolio.edgeone.app/',
  adapter: edgeoneAdapter(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
