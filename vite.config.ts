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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router"],
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
