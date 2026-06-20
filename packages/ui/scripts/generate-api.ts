import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { withCustomConfig, type ComponentDoc, type PropItem } from "react-docgen-typescript";

const __dirname = dirname(fileURLToPath(import.meta.url));

// =====================
// Paths
// =====================
const REPO_ROOT = dirname(__dirname);
const UI_SRC = join(REPO_ROOT, "src");
const COMPONENTS_DIR = join(UI_SRC, "components");
const DATATABLE_DIR = join(UI_SRC, "DataTable");
const OUTPUT_DIR = join(REPO_ROOT, "generated", "api");
const TSCONFIG_PATH = join(REPO_ROOT, "tsconfig.json");

// =====================
// Types (output shape kept compatible with the old script)
// =====================
interface ApiProp {
  name: string;
  type: string;
  optional: boolean;
  description: string;
  default?: string;
  deprecated?: string;
  since?: string;
}

interface ApiMeta {
  name: string;
  description: string;
  props: ApiProp[];
}

// =====================
// react-docgen-typescript setup
// =====================
// Uses the real TS compiler — correctly resolves extended interfaces,
// generics (e.g. React.ComponentProps<'button'>), unions, and intersections.
const parser = withCustomConfig(TSCONFIG_PATH, {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  // Only pull props actually declared/extended within the package —
  // skip ones inherited purely from DOM/React internals with no JSDoc.
  propFilter: (prop: PropItem) => {
    if (prop.parent?.fileName.includes("node_modules/@types/react")) {
      return !!prop.description;
    }
    return true;
  },
});

// =====================
// Discovery (unchanged from original)
// =====================
function findComponentDirs(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const dp = join(dir, entry.name);
    const hasSrc = readdirSync(dp).some((f) => f.endsWith(".tsx") || f.endsWith(".ts"));
    out.push(...(hasSrc ? [dp] : findComponentDirs(dp)));
  }
  return out;
}

function findMainFile(dir: string): string | null {
  const files = readdirSync(dir);
  const base = basename(dir);
  const hit = files.find((f) => f === `${base}.tsx` || f === `${base}.ts`);
  if (hit) return join(dir, hit);
  const tsx = files.find((f) => f.endsWith(".tsx"));
  if (tsx) return join(dir, tsx);
  const ts = files.find((f) => f.endsWith(".ts"));
  if (ts) return join(dir, ts);
  return null;
}

// =====================
// Extraction
// =====================
function toApiMeta(doc: ComponentDoc): ApiMeta {
  const props: ApiProp[] = Object.values(doc.props).map((p) => {
    const tags = p.tags ?? {};
    const out: ApiProp = {
      name: p.name,
      type: p.type.name,
      optional: !p.required,
      description: p.description ?? "",
    };
    if (p.defaultValue?.value !== undefined) {
      out.default = String(p.defaultValue.value);
    }
    if (typeof tags.deprecated === "string") out.deprecated = tags.deprecated;
    if (typeof tags.since === "string") out.since = tags.since;
    return out;
  });

  // Stable ordering — required props first, then alphabetical
  props.sort((a, b) => {
    if (a.optional !== b.optional) return a.optional ? 1 : -1;
    return a.name.localeCompare(b.name);
  });

  return { name: doc.displayName, description: doc.description ?? "", props };
}

function extractApi(filePath: string): ApiMeta | null {
  const docs = parser.parse(filePath);
  if (!docs.length) return null;

  // A file may export multiple components (rare) — prefer the one matching
  // the folder name, otherwise take the first documented export.
  const folderName = basename(dirname(filePath));
  const pascal = folderName
    .split("-")
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join("");

  const match = docs.find((d) => d.displayName === pascal) ?? docs[0];
  return toApiMeta(match);
}

// =====================
// Main
// =====================
function generate() {
  console.log("\n── Generating API Metadata ──\n");
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  const dirs = [...findComponentDirs(COMPONENTS_DIR), ...findComponentDirs(DATATABLE_DIR)];

  let generated = 0;
  let skipped = 0;

  for (const dir of dirs) {
    const file = findMainFile(dir);
    if (!file) {
      skipped++;
      continue;
    }

    let api: ApiMeta | null = null;
    try {
      api = extractApi(file);
    } catch (err) {
      console.warn(`  ✗ ${basename(dir)} — parse error: ${(err as Error).message}`);
      skipped++;
      continue;
    }

    if (!api || api.props.length === 0) {
      skipped++;
      continue;
    }

    const out = join(OUTPUT_DIR, `${basename(dir)}.json`);
    writeFileSync(out, JSON.stringify(api, null, 2));
    console.log(`  ✔ ${basename(dir)}.json  (${api.props.length} props)`);
    generated++;
  }

  console.log(`\n  Generated: ${generated}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`\n✓ Complete\n`);

  if (skipped > 0) {
    console.log(
      "  Tip: skipped components either have no <Name>Props type docgen could find,\n" +
        "  or react-docgen-typescript failed to parse them. Run with the file path\n" +
        "  directly through `parser.parse()` to debug a specific component.\n",
    );
  }
}

if (import.meta.main) {
  generate();
}
