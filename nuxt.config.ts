import { defineNuxtConfig } from 'nuxt/config';
import TransformerModule from './transformer-module.mjs';

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },
  runtimeConfig: {
    public: {
      appEnv: '',
    },
  },
  css: ['~/assets/styles/content.scss'],
  devtools: { enabled: true },
  modules: [
    TransformerModule,
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],
  unocss: {
    preflight: true,
  },
  googleFonts: {
    families: {
      Poppins: [400, 600],
    },
  },
});
