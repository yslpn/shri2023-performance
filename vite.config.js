import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), createHtmlPlugin(), cssInjectedByJsPlugin()],
  base: "/shri2023-performance/",
});
