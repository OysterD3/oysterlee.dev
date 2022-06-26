import { resolve } from "path";
import * as fs from "fs";
// @ts-ignore
import matter from "gray-matter";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import MD from "vite-plugin-md";
import MILA from "markdown-it-link-attributes";
import VitePluginWindicss from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ["vue", "md"],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));

        if (!path.includes("projects.md")) {
          const md = fs.readFileSync(path, "utf-8");
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }

        return route;
      },
    }),
    VitePluginWindicss(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      extensions: ["vue", "md"],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      directoryAsNamespace: true,
      resolvers: [
        IconsResolver({
          componentPrefix: "",
        }),
      ],
    }),
    MD({
      wrapperComponent: "layout",
      wrapperClasses: "md-body",
      headEnabled: true,
      markdownItOptions: {
        quotes: "\"\"''",
        html: true,
      },
      markdownItSetup(md) {
        md.use(MILA, {
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        });
      },
    }),
    Icons({
      defaultClass: "inline",
      defaultStyle: "vertical-align: sub;",
    }),
  ],
});
