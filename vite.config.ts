import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/dutchesscountywdb/' : '/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "copy-htaccess",
      closeBundle() {
        const source = path.resolve(__dirname, "public/.htaccess");
        const target = path.resolve(__dirname, "dist/.htaccess");

        if (fs.existsSync(source)) {
          fs.copyFileSync(source, target);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
