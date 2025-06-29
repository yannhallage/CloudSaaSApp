import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",  // écoute sur toutes les interfaces réseau (important pour Docker)
    port: 4173,       // même port que celui exposé par Docker
  },
});
