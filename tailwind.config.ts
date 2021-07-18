import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  plugins: [formsPlugin],
  theme: {
    extend: {
      colors: {
        primary: "#274BA1",
        accent: "#28ACE1",
        secondary: "#22EFF2",
      },
    },
  },
});
