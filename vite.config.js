import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project-ibm/",
  plugins: [react()],
  // base: "/project-ibm/",
  build: {
    outDir: "docs",
  },
});
