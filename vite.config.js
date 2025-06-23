import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default defineConfig({
  base: "/coca_2/",
  root: "./src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        about: path.resolve(__dirname, "src/about.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        pricing: path.resolve(__dirname, "src/pricing.html"),
        blog: path.resolve(__dirname, "src/blog.html"),
      },
    },
  },
  plugins: [
    injectHTML({
      injectData: {
        load: (filePath) => {
          const fullPath = path.join(process.cwd(), "src", filePath);
          return require("fs").readFileSync(fullPath, "utf-8");
        },
      },
    }),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 80 },
      svg: false,
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["intl-tel-input", "intl-tel-input/build/js/utils.js"],
    exclude: [],
  },
});
