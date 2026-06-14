import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  statSync,
} from "fs";
import { join, relative } from "path";

const UI_DIR = "packages/ui/src/components";
const LIB_DIR = "packages/ui/src/lib";
const UTILS_DIR = "packages/ui/src/utils";

const OUTPUT = "packages/registry/registry.json";
const REGISTRY_URL = process.env.REGISTRY_URL || "http://localhost:3001/reg";

const items = [];

function getFilesRecursive(dir: string): string[] {
  const entries = readdirSync(dir);

  return entries.flatMap((entry) => {
    const fullPath = join(dir, entry);

    if (statSync(fullPath).isDirectory()) {
      return getFilesRecursive(fullPath);
    }

    return [fullPath];
  });
}

function buildRegistryFiles(
  sourceDir: string,
  targetPrefix: string,
): Array<{
  path: string;
  type: string;
  target: string;
}> {
  return getFilesRecursive(sourceDir).map((file) => ({
    path: file,
    type: "registry:file",
    target: join(
      targetPrefix,
      relative(sourceDir, file).replaceAll("\\", "/"),
    ),
  }));
}
items.push({
  name: "shared",
  type: "registry:lib",
  title: "Shared",
  description: "Shared libraries, theme and utilities.",
  dependencies: [
    "@stylexjs/stylex",
    "@phosphor-icons/react",
    "@base-ui/react",
  ],
  files: [
    ...buildRegistryFiles(LIB_DIR, "@lib"),
    ...buildRegistryFiles(UTILS_DIR, "@utils"),
  ],
});

const themeRegistryUrl = `${REGISTRY_URL}/shared.json`;
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

const content = JSON.stringify(registry, null, 2)
console.log(`🔍 Building registry with ${items.length} items...`);
writeFileSync(OUTPUT, content);
console.log(`✔ registry.json built with ${items.length} items`);
