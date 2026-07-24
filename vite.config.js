import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
/** Configuration for Vite, including plugins for React and Image Optimization. */
export default defineConfig({
    server: {
        host: "0.0.0.0",
    },
    plugins: [
        react({
            // @ts-expect-error - babel is a valid option for @vitejs/plugin-react
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
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        if (id.includes("react") || id.includes("framer-motion")) {
                            return "vendor";
                        }
                        if (id.includes("@radix-ui") ||
                            id.includes("lucide-react") ||
                            id.includes("react-icons")) {
                            return "ui";
                        }
                    }
                },
            },
        },
    },
});
