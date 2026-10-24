import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  // На GitHub Pages сайт живёт в подпути /urinatech/, локально — в корне
  base: mode === "production" ? "/urinatech/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
  },
}));
