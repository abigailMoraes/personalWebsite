import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personalWebsite/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["three/examples/jsm/Loaders/GLTFLoader"],
    },
  },
});
