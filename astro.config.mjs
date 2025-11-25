import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  adapter: edgeoneAdapter(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
