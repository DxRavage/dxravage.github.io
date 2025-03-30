import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";

export default defineConfig({
  integrations: [tailwind(), lottie()],    
  site: 'https://dxravage.github.io',
});