import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import stylex from "@stylexjs/unplugin";
import path from "node:path";
export default defineConfig({
  server: {
    port: 3001,
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@/*": path.join(__dirname, "src/*"),
      "#/*": path.join(__dirname, "../../packages/ui/src/*"),
      "@blenx-dev/ui/*": path.join(__dirname, "../../packages/ui/src/*"),
      "@blenx-dev/ui/theme/*": path.join(__dirname, "../../packages/ui/src/lib/theme/*")
    }
  },
  plugins: [
    stylex.vite({
      useCSSLayers: true,
      dev: process.env.NODE_ENV === "development",
      runtimeInjection: process.env.NODE_ENV === "development",
      aliases: {
        "@/*": [path.join(__dirname, "src/*")],
        "#/*": [path.join(__dirname, "../../packages/ui/src/*")],
        "@blenx-dev/ui/*": [path.join(__dirname, "../../packages/ui/src/*")],
        "@blenx-dev/ui/theme/*": [path.join(__dirname, "../../packages/ui/src/lib/theme/*")]
      },
      unstable_moduleResolution: {
        type: "commonJS",
        rootDir: path.join(__dirname, "../.."), // monorepo root
      },
    }),
    tanstackStart(),
    viteReact(),
  ],
});
