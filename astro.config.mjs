import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";

export default defineConfig({
  integrations: [tailwind(), lottie()],
  site: "https://dxravage.github.io",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
