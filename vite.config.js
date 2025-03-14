import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true, // Ensures updates work inside Docker
    },
    strictPort: true, //Ensures it doesn't switch ports if 5173 is occupied
  },
  plugins: [react(), svgr()],
  base: "./",
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
});
