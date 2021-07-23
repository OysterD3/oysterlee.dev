import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import WindiCSS from "vite-plugin-windicss";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    WindiCSS(),
    viteImagemin({
      optipng: {
        optimizationLevel: 4,
      },
    }),
  ],
  server: {
    port: 8000,
    strictPort: true,
    host: "local.oysterlee.io",
  },
  assetsInclude: ["json"],
});
