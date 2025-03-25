// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  image: {
    domains: ["astro.build"],
    remotePatterns: [{ protocol: "https" }],
  },
  site: import.meta.env.URL_SITE
});