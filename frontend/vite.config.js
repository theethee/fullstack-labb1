import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // För att få frontend att kommunicera med backend
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
