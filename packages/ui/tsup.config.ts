// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  format: ["esm"],
  dts: true,
  splitting: false,
  clean: true,
  external: ["react", "react-dom", "@stylexjs/stylex", "@base-ui/react"],
});
