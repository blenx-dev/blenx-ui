import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const UI_DIR = "packages/ui/src/components";
const THEME_DIR = "packages/ui/src/theme";
const OUTPUT = "packages/registry/registry.json";
const REGISTRY_URL = process.env.REGISTRY_URL || "http://localhost:3001/reg";

const items = [];

// Scan theme folder first
const themeFiles = readdirSync(THEME_DIR).map((file) => ({
  path: `${THEME_DIR}/${file}`,
  type: "registry:file",
  target: `app/lib/theme/${file}`,
}));

items.push({
  name: "theme",
  type: "registry:lib",
  title: "Theme",
  description: "Base theme contracts and utils.",
  dependencies: ["@stylexjs/stylex", "@phosphor-icons/react", "@base-ui/react"],
  files: themeFiles,
});

const themeRegistryUrl = `${REGISTRY_URL}/theme.json`;
// Scan component folders
const components = readdirSync(UI_DIR);

for (const component of components) {
  const metaPath = join(UI_DIR, component, "registry-meta.json");
  if (!existsSync(metaPath)) continue;

  const meta = JSON.parse(readFileSync(metaPath, "utf-8"));

  // Resolve file paths and registryDependencies URLs
  const files = meta.files.map(({ file, type, target }) => ({
    path: `${UI_DIR}/${component}/${file}`,
    type,
    target,
  }));
  const itemRegistryDependencies = (meta.registryDependencies || []).map((dep: string) =>
    dep.startsWith("http") ? dep : `${REGISTRY_URL}/${dep}.json`,
  );

  const registryDependencies = [...itemRegistryDependencies, themeRegistryUrl]

  items.push({
    ...meta,
    files,
    registryDependencies,
    dependencies: ["@stylexjs/stylex", "@phosphor-icons/react", "@base-ui/react"],
  });
}

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "blenx-ui",
  homepage: "https://blenx-ui.com",
  items,
};

writeFileSync(OUTPUT, JSON.stringify(registry, null, 2));
console.log(`✔ registry.json built with ${items.length} items`);
