import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
/** Configuration for Vite, including plugins for React and Image Optimization. */
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
