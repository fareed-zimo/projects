// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/tfjs-model": {
        target: "https://tfhub.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tfjs-model/, ""),
      },
    },
  },
});
