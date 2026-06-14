import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const vars = {
  bg: "var(--background)",
  surface: "var(--surface)",
  border: "var(--border)",
  surfaceSubtle: "var(--surfaceSubtle)",
  surfaceHover: "var(--surfaceHover)",
  contentPrimary: "var(--contentPrimary)",
  contentSecondary: "var(--contentSecondary)",
  mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
};

const sectionStyle: React.CSSProperties = {
  borderRadius: "8px",
  border: `1px solid ${vars.border}`,
  padding: "16px",
};

const codeBlockStyle: React.CSSProperties = {
  backgroundColor: vars.surfaceSubtle,
  borderRadius: "8px",
  padding: "16px",
  overflowX: "auto",
  fontFamily: vars.mono,
  fontSize: "14px",
  lineHeight: 1.5,
  margin: 0,
};

const listStyle: React.CSSProperties = {
  listStyle: "disc",
  paddingInlineStart: "24px",
  margin: 0,
};

const listItemStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 1.75,
};

function HomeComponent() {
  return (
    <div style={{ maxWidth: "768px", margin: "0 auto", paddingInline: "16px" }}>
      <div style={{ paddingBlock: "64px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h1
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "36px",
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              margin: 0,
              color: vars.contentPrimary,
            }}
          >
            Blenx UI
          </h1>
          <p
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "16px",
              lineHeight: 1.5,
              margin: 0,
              color: vars.contentSecondary,
            }}
          >
            A design system of React components built with Stylex and Base UI. Distributed via the
            shadcn registry model.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h4
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "18px",
              fontWeight: 600,
              margin: 0,
              color: vars.contentPrimary,
            }}
          >
            Getting Started
          </h4>
          <p
            style={{
              fontSize: "14px",
              color: vars.contentSecondary,
              margin: 0,
            }}
          >
            Install individual components directly into your project.
          </p>
          <pre style={codeBlockStyle}>
            <code>npx shadcn@latest add http://localhost:3001/reg/button.json</code>
          </pre>
        </div>
      </div>

      <div style={{ ...sectionStyle, marginTop: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h4
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "18px",
              fontWeight: 600,
              margin: 0,
              color: vars.contentPrimary,
            }}
          >
            Prerequisites
          </h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>React 19+</li>
            <li style={listItemStyle}>Stylex bundler plugin</li>
            <li style={listItemStyle}>TypeScript</li>
          </ul>
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--borderSubtle)",
          margin: "24px 0",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: "24px",
            fontWeight: 700,
            margin: 0,
            color: vars.contentPrimary,
          }}
        >
          Documentation
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <Link
            to="/docs/installation"
            style={{
              display: "block",
              borderRadius: "8px",
              border: `1px solid ${vars.border}`,
              padding: "16px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                fontSize: "16px",
                fontWeight: 600,
                margin: "0 0 4px",
                color: vars.contentPrimary,
              }}
            >
              Installation &rarr;
            </h5>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
              }}
            >
              Configure your project and install components.
            </p>
          </Link>
          <Link
            to="/docs/styling"
            style={{
              display: "block",
              borderRadius: "8px",
              border: `1px solid ${vars.border}`,
              padding: "16px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                fontSize: "16px",
                fontWeight: 600,
                margin: "0 0 4px",
                color: vars.contentPrimary,
              }}
            >
              Styling &rarr;
            </h5>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
              }}
            >
              How Stylex works in Blenx UI.
            </p>
          </Link>
          <Link
            to="/docs/primitives"
            style={{
              display: "block",
              borderRadius: "8px",
              border: `1px solid ${vars.border}`,
              padding: "16px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                fontSize: "16px",
                fontWeight: 600,
                margin: "0 0 4px",
                color: vars.contentPrimary,
              }}
            >
              Primitives &rarr;
            </h5>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
              }}
            >
              Base UI component architecture.
            </p>
          </Link>
          <Link
            to="/docs/limitations"
            style={{
              display: "block",
              borderRadius: "8px",
              border: `1px solid ${vars.border}`,
              padding: "16px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                fontSize: "16px",
                fontWeight: 600,
                margin: "0 0 4px",
                color: vars.contentPrimary,
              }}
            >
              Limitations &rarr;
            </h5>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
              }}
            >
              Important constraints and tradeoffs.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
