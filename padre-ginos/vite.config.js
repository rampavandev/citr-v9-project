import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  plugins: [TanStackRouterVite(), react()],
  //this will be now taken care of in vitest.workspace.js
  // test: {
  //   environment: "happy-dom",
  //   coverage: {
  //     reporter: ["text", "json", "html"],
  //   }
  // },
  
});
