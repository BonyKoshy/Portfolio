import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createRequire } from "module";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const require = createRequire(import.meta.url);
const vitePrerender = require("vite-plugin-prerender");
const Renderer = require("@prerenderer/renderer-puppeteer");

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80, lossless: false },
      avif: { quality: 75 },
    }),
    vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/about",
        "/projects",
        "/contact",
        "/certificates",
        "/privacy",
      ],
      server: {
        port: 8080,
        host: "localhost",
      },
      renderer: new Renderer({
        renderAfterTime: 5000,
        headless: true,
      }),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "framer-motion"],
          ui: [
            "@radix-ui/react-accordion",
            "@radix-ui/react-aspect-ratio",
            "@radix-ui/react-context-menu",
            "@radix-ui/react-hover-card",
            "@radix-ui/react-slot",
            "@radix-ui/react-tooltip",
            "lucide-react",
            "react-icons",
          ],
        },
      },
    },
  },
});
