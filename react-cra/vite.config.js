import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: "3000",
    strictPort: true,
  },
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      data: "/src/data",
      hooks: "/src/hooks",
      layouts: "/src/layouts",
      pages: "/src/pages",
      routes: "/src/routes",
      services: "/src/services",
      store: "/src/store",
      themes: "/src/themes",
      utils: "/src/utils",
    },
  },
});
