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
  aliases: {
    "#/*": [path.join(__dirname, "src/*")]
  },
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
  resolve: {
    alias: {
      "@blenx-dev/ui": path.resolve(__dirname, "./src/"),
      "#": path.resolve(__dirname, "./src/")
    },
  },
  build: isLadle
    ? undefined
    : {
        outDir: "dist",
        lib: {
          entry: {
            index: "src/index.ts",
            "lib/theme/contract.stylex": "src/lib/theme/contract.stylex.ts",
            "lib/theme/tokens.stylex": "src/lib/theme/tokens.stylex.ts"
          },
          formats: ["es"]
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
