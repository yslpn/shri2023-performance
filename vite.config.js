import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

import { viteSingleFile } from "vite-plugin-singlefile";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), viteSingleFile(), createHtmlPlugin()],
  base: "/shri2023-performance/",
  build: {
    cssCodeSplit: false,
  },
  assetsInlineLimit: 100000000,
  rollupOptions: {
    output: {
      manualChunks: () => "everything.js",
    },
  },
});
