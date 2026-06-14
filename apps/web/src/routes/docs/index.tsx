import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({
  component: DocsHome,
});

const vars = {
  border: "var(--border)",
  surfaceSubtle: "var(--surfaceSubtle)",
  contentPrimary: "var(--contentPrimary)",
  contentSecondary: "var(--contentSecondary)",
  mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
};

const cardStyle: React.CSSProperties = {
  display: "block",
  borderRadius: "8px",
  border: `1px solid ${vars.border}`,
  padding: "16px",
  textDecoration: "none",
  color: "inherit",
};

const preStyle: React.CSSProperties = {
  backgroundColor: vars.surfaceSubtle,
  borderRadius: "8px",
  padding: "16px",
  overflowX: "auto",
  fontFamily: vars.mono,
  fontSize: "14px",
  lineHeight: 1.5,
  margin: 0,
};

function DocsHome() {
  return (
    <div
      style={{ maxWidth: "768px", margin: "0 auto", paddingInline: "16px", paddingBlock: "32px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h1
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "36px",
              fontWeight: 700,
              margin: 0,
              color: vars.contentPrimary,
            }}
          >
            Blenx UI Docs
          </h1>
          <p style={{ fontSize: "16px", color: vars.contentSecondary, margin: 0 }}>
            A design system built with Stylex and Base UI, distributed via the shadcn registry
            model.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <Link to="/docs/installation" style={cardStyle}>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 4px",
                color: vars.contentPrimary,
              }}
            >
              Installation
            </h4>
            <p style={{ fontSize: "14px", color: vars.contentSecondary, margin: 0 }}>
              How to install Blenx UI components in your project using the shadcn CLI.
            </p>
          </Link>
          <Link to="/docs/styling" style={cardStyle}>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 4px",
                color: vars.contentPrimary,
              }}
            >
              Styling with Stylex
            </h4>
            <p style={{ fontSize: "14px", color: vars.contentSecondary, margin: 0 }}>
              All components use Stylex for atomic CSS-in-JS styling.
            </p>
          </Link>
          <Link to="/docs/primitives" style={cardStyle}>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 4px",
                color: vars.contentPrimary,
              }}
            >
              Primitives with Base UI
            </h4>
            <p style={{ fontSize: "14px", color: vars.contentSecondary, margin: 0 }}>
              Headless, accessible component primitives from Base UI React.
            </p>
          </Link>
          <Link to="/docs/limitations" style={cardStyle}>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 4px",
                color: vars.contentPrimary,
              }}
            >
              Limitations
            </h4>
            <p style={{ fontSize: "14px", color: vars.contentSecondary, margin: 0 }}>
              Important constraints: monorepo not supported, strict toolchain requirements.
            </p>
          </Link>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <div
          style={{
            borderRadius: "8px",
            border: `1px solid ${vars.border}`,
            padding: "16px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <h4
              style={{ fontSize: "18px", fontWeight: 600, margin: 0, color: vars.contentPrimary }}
            >
              Quick Start
            </h4>
            <pre style={preStyle}>
              <code>{`# Add a component via the shadcn CLI
npx shadcn@latest add http://localhost:3001/reg/button.json

# Or configure components.json:
{
  "registries": {
    "blenx-ui": {
      "baseUrl": "http://localhost:3001/reg"
    }
  }
}

# Then install with:
npx shadcn@latest add @blenx-ui/button`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
