import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth()],
  security: {
    checkOrigin: true,
  },
  output: "server",
  adapter: netlify(),
});
