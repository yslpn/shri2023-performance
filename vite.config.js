import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

import { viteSingleFile } from "vite-plugin-singlefile"
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), createHtmlPlugin(), viteSingleFile({ removeViteModuleLoader: true })],
  base: "/shri2023-performance/",
});
