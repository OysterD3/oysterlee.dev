import { defineNuxtConfig } from 'nuxt/config';
import TransformerModule from './transformer-module.mjs';

export default defineNuxtConfig({
  css: ['~/assets/styles/content.scss'],
  app: {
    head: {
      titleTemplate: (titleChunk) =>
        titleChunk ? `${titleChunk} | Oyster Lee` : 'Oyster Lee',
    },
  },
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
