import { createFileRoute } from "@tanstack/react-router";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const REGISTRY_DIR = resolve(
  import.meta.dirname,
  "../../../../../../packages/registry/public/r",
);

export const Route = createFileRoute("/api/r/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const filePath = resolve(REGISTRY_DIR, params._splat ?? "registry.json");

        if (!filePath.startsWith(REGISTRY_DIR)) {
          return new Response("Forbidden", { status: 403 });
        }

        try {
          const content = await readFile(filePath, "utf-8");
          const ext = filePath.endsWith(".json") ? "application/json" : "text/plain";
          return new Response(content, {
            headers: { "Content-Type": ext },
          });
        } catch {
          return new Response("Not Found", { status: 404 });
        }
      },
    },
  },
});
