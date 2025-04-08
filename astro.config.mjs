import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import lottie from "astro-integration-lottie";
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  integrations: [tailwind(), lottie()],
  site: 'https://dxravage.github.io',
  experimental: {
    svg: {
      mode: 'sprite',
    }
  },
  resolve: {
    alias: {
      '@images': fileURLToPath(new URL('./src/images', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
});