import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Import the Netlify adapter
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://positivustheme.vercel.app",
  integrations: [tailwind()],
  output: "server",
  adapter: netlify(), // Change the adapter to Netlify
});
