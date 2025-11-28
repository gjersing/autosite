import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    // Minification is enabled by default in production builds
    // Vite uses esbuild which is fast and produces optimized output
    minify: "esbuild",
    cssMinify: true,
    // Code splitting for better caching
    // React Router v7 handles React bundling automatically
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Only chunk non-React vendor libraries if needed
          // React Router handles React/React-DOM bundling
          if (id.includes("node_modules") && !id.includes("react") && !id.includes("react-dom") && !id.includes("react-router")) {
            return "vendor";
          }
        },
      },
    },
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
    // Generate source maps only in development
    sourcemap: false,
  },
  // Optimize CSS
  css: {
    devSourcemap: false,
  },
});
