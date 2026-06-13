import type { UserConfig } from "@ladle/react";

const config: UserConfig = {
  stories: "src/components/**/*.stories.{tsx,ts}",
  port: 62000,
  appendToHead: "<style>:root { color-scheme: light; }</style>",
};

export default config;
