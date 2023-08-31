/* eslint-disable no-undef */
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    plugins: [react()],
    server: {
      host: process.env.VITE_HOST,
      port: process.env.VITE_PORT,
      strictPort: true,
    },
    build: {
      outDir: "build",
      sourcemap: "hidden",
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
        utils: "/src/utils",
      },
    },
  });
};
