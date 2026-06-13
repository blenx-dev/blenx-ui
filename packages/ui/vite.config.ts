import path from "node:path";
import { fileURLToPath } from "node:url";
import stylex from "@stylexjs/unplugin";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isLadle = process.argv[1]?.includes("ladle");

const stylexPlugin = stylex.vite({
  useCSSLayers: true,
  dev: isLadle,
  runtimeInjection: true,
  unstable_moduleResolution: {
    type: "commonJS",
    rootDir: path.join(__dirname, "../.."),
  },
});

const dtsPlugin = dts({
  include: ["src"],
  exclude: ["src/**/*.stories.tsx", "src/components/_provider.tsx", "src/**/*.stories.ts"],
  tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
  beforeWriteFile: (filePath, content) => {
    const newPath = filePath.replace("/src/", "/");
    return { filePath: newPath, content };
  },
});

export default defineConfig({
  plugins: [stylexPlugin, ...(isLadle ? [] : [viteReact(), dtsPlugin])],
  build: isLadle
    ? undefined
    : {
        outDir: "dist",
        lib: {
          entry: "src/index.ts",
          formats: ["es"],
          fileName: "index",
        },
        rollupOptions: {
          external: [
            "react",
            "react-dom",
            /@phosphor-icons\/react/,
            "date-fns",
            "react-colorful",
            "react-day-picker",
            /@stylexjs\/stylex/,
          ],
        },
        cssCodeSplit: false,
      },
});
