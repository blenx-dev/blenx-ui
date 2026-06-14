import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/installation")({
  component: InstallationDoc,
});

const vars = {
  surfaceSubtle: "var(--surfaceSubtle)",
  contentPrimary: "var(--contentPrimary)",
  contentSecondary: "var(--contentSecondary)",
  mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
};

const s = {
  section: { marginBottom: "32px" },
  code: {
    backgroundColor: vars.surfaceSubtle,
    borderRadius: "4px",
    paddingInline: "4px",
    fontFamily: vars.mono,
    fontSize: "14px",
  } as React.CSSProperties,
  pre: {
    backgroundColor: vars.surfaceSubtle,
    borderRadius: "8px",
    padding: "16px",
    overflowX: "auto",
    fontFamily: vars.mono,
    fontSize: "14px",
    lineHeight: 1.5,
    margin: 0,
  } as React.CSSProperties,
  list: {
    listStyle: "disc",
    paddingInlineStart: "24px",
    margin: 0,
  } as React.CSSProperties,
  li: { fontSize: "14px", lineHeight: 1.75 } as React.CSSProperties,
};

function InstallationDoc() {
  return (
    <div
      style={{ maxWidth: "768px", margin: "0 auto", paddingInline: "16px", paddingBlock: "32px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}>
          Installation
        </h1>

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Prerequisites
            </h3>
            <ul style={s.list}>
              <li style={s.li}>React 19+</li>
              <li style={s.li}>@stylexjs/stylex</li>
              <li style={s.li}>@base-ui/react</li>
              <li style={s.li}>A JS bundler with Stylex plugin support (Vite, Next.js, Webpack)</li>
              <li style={s.li}>shadcn CLI v4+</li>
            </ul>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              1. Configure the Registry
            </h3>
            <p style={{ fontSize: "14px", color: vars.contentSecondary, margin: 0 }}>
              Add the Blenx UI registry to your project's{" "}
              <code style={s.code}>components.json</code>:
            </p>
            <pre style={s.pre}>
              <code>{`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "blenx-ui": {
      "baseUrl": "http://localhost:3001/reg"
    }
  }
}`}</code>
            </pre>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              2. Install a Component
            </h3>
            <pre style={s.pre}>
              <code>{`# Using the registry URL directly
npx shadcn@latest add http://localhost:3001/reg/button.json

# Or using the configured registry name
npx shadcn@latest add @blenx-ui/button`}</code>
            </pre>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              3. Required Dependencies
            </h3>
            <p style={{ fontSize: "14px", color: vars.contentSecondary, margin: 0 }}>
              Each component may require installing additional packages:
            </p>
            <pre style={s.pre}>
              <code>{`npm install @stylexjs/stylex @base-ui/react @phosphor-icons/react
# Plus optional: react-day-picker, date-fns, react-colorful`}</code>
            </pre>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              4. Configure Stylex
            </h3>
            <p style={{ fontSize: "14px", color: vars.contentSecondary, margin: 0 }}>
              Your bundler must be configured with the Stylex plugin. Components use atomic CSS via
              Stylex, which requires a build-time transform.
            </p>
            <pre style={s.pre}>
              <code>{`// Example: vite.config.ts
import { stylexPlugin } from "@stylexjs/unplugin/vite";

export default defineConfig({
  plugins: [
    stylexPlugin({ ... }),
  ],
});`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
