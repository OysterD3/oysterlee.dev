import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  plugins: [require("windicss/plugin/aspect-ratio")],
  darkMode: "class",
  shortcuts: {
    hoverable:
      "transition duration-150 ease-in-out opacity-50 group-hover:opacity-100 hover:opacity-100",
    "hoverable-invert":
      "transition duration-150 ease-in-out opacity-100 group-hover:opacity-50 hover:opacity-50",
  },
});
