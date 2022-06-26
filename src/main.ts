import { createHead } from "@vueuse/head";
import { ViteSSG } from "vite-ssg";
import VueGtag from "vue-gtag";
import App from "./App.vue";
import autoRoutes from "~pages";
import "./styles/main.scss";
import "virtual:windi.css";

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith("/") ? `${i.path}index.html` : `${i.path}.html`,
  };
});

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.use(createHead());
  app.use(VueGtag, {
    config: { id: "GTM-W8KNBSG" },
  });
});
