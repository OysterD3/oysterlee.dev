import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'

import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://oysterlee.dev',
  integrations: [vue(), sitemap(), mdx(), UnoCSS({
    injectReset: '@unocss/reset/tailwind.css',
  })]
});
