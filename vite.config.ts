import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { reactRouter } from "@react-router/dev/vite";
import { VitePWA } from "vite-plugin-pwa";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // reactRouter(),
    // Note: Framework Mode configured but disabled until server runtime is set up.
    // See react-router.config.ts and src/root.tsx
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
    ViteImageOptimizer({
      /* verify default options or configure as needed */
    }),
    VitePWA({
      registerType: "autoUpdate",
      // Caches all assets and the offline page
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,pdf}"],
        navigateFallback: "/index.html",
      },
      // Defines the web app manifest
      manifest: {
        name: "Bony Koshy | Portfolio",
        short_name: "Bony Koshy",
        description:
          "Personal portfolio of Bony Koshy, a passionate Full-Stack Developer.",
        theme_color: "#121212",
        background_color: "#121212",
        display: "standalone",
        icons: [
          {
            src: "letter-b.png", // Make sure you have this in /public
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "letter-b.png", // And a larger one
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
