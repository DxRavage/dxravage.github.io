import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import lottie from "astro-integration-lottie";

export default defineConfig({
  integrations: [tailwind(), lottie()],
  site: 'https://dxravage.github.io',
  vite: {
    resolve: {
      alias: {
        '@images': new URL('./src/images', import.meta.url).pathname,
        '@components': new URL('./src/components', import.meta.url).pathname,
      }
    }
  },
  experimental: {
    svg: {
      mode: 'sprite',
    }
  }
});