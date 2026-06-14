import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const sectionStyle: React.CSSProperties = {
  borderRadius: "var(--radius-medium)",
  border: "1px solid var(--border)",
  padding: "var(--space-4)",
};

const codeBlockStyle: React.CSSProperties = {
  backgroundColor: "var(--surfaceSubtle)",
  borderRadius: "var(--radius-medium)",
  padding: "var(--space-4)",
  overflowX: "auto",
  fontFamily: "var(--font-mono)",
  fontSize: "var(--font-size-small)",
  lineHeight: "var(--leading-normal)",
  margin: 0,
};

const listStyle: React.CSSProperties = {
  listStyle: "disc",
  paddingInlineStart: "var(--space-6)",
  margin: 0,
};

const listItemStyle: React.CSSProperties = {
  fontSize: "var(--font-size-small)",
  lineHeight: "var(--leading-relaxed)",
};

function HomeComponent() {
  return (
    <div
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        paddingInline: "var(--space-4)",
      }}
    >
      <div style={{ paddingBlock: "var(--space-16)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <h1
            style={{
              fontSize: "var(--font-size-display)",
              fontWeight: "var(--font-weight-bold)",
              letterSpacing: "var(--tracking-tight)",
              margin: 0,
              color: "var(--contentPrimary)",
            }}
          >
            Blenx UI
          </h1>
          <p
            style={{
              fontSize: "var(--font-size-medium)",
              margin: 0,
              color: "var(--contentSecondary)",
            }}
          >
            A design system of React components built with Stylex and Base UI. Distributed via the
            shadcn registry model.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <h4
            style={{
              fontSize: "var(--font-size-large)",
              fontWeight: "var(--font-weight-semibold)",
              margin: 0,
              color: "var(--contentPrimary)",
            }}
          >
            Getting Started
          </h4>
          <p
            style={{
              fontSize: "var(--font-size-small)",
              color: "var(--contentSecondary)",
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

      <div style={{ ...sectionStyle, marginTop: "var(--space-4)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <h4
            style={{
              fontSize: "var(--font-size-large)",
              fontWeight: "var(--font-weight-semibold)",
              margin: 0,
              color: "var(--contentPrimary)",
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
          margin: "var(--space-6) 0",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h3
          style={{
            fontSize: "var(--font-size-xxlarge)",
            fontWeight: "var(--font-weight-bold)",
            margin: 0,
            color: "var(--contentPrimary)",
          }}
        >
          Documentation
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-4)",
          }}
        >
          <Link
            to="/docs/installation"
            style={{
              display: "block",
              borderRadius: "var(--radius-medium)",
              border: "1px solid var(--border)",
              padding: "var(--space-4)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                fontSize: "var(--font-size-medium)",
                fontWeight: "var(--font-weight-semibold)",
                margin: "0 0 var(--space-1)",
                color: "var(--contentPrimary)",
              }}
            >
              Installation &rarr;
            </h5>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--contentSecondary)",
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
              borderRadius: "var(--radius-medium)",
              border: "1px solid var(--border)",
              padding: "var(--space-4)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                fontSize: "var(--font-size-medium)",
                fontWeight: "var(--font-weight-semibold)",
                margin: "0 0 var(--space-1)",
                color: "var(--contentPrimary)",
              }}
            >
              Styling &rarr;
            </h5>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--contentSecondary)",
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
              borderRadius: "var(--radius-medium)",
              border: "1px solid var(--border)",
              padding: "var(--space-4)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                fontSize: "var(--font-size-medium)",
                fontWeight: "var(--font-weight-semibold)",
                margin: "0 0 var(--space-1)",
                color: "var(--contentPrimary)",
              }}
            >
              Primitives &rarr;
            </h5>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--contentSecondary)",
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
              borderRadius: "var(--radius-medium)",
              border: "1px solid var(--border)",
              padding: "var(--space-4)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h5
              style={{
                fontSize: "var(--font-size-medium)",
                fontWeight: "var(--font-weight-semibold)",
                margin: "0 0 var(--space-1)",
                color: "var(--contentPrimary)",
              }}
            >
              Limitations &rarr;
            </h5>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--contentSecondary)",
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
