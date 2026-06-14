import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/styling")({
  component: StylingDoc,
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

function StylingDoc() {
  return (
    <div
      style={{ maxWidth: "768px", margin: "0 auto", paddingInline: "16px", paddingBlock: "32px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}>
          Styling with Stylex
        </h1>

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Why Stylex?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Blenx UI uses <strong>Stylex</strong> as its styling engine. Stylex is a CSS-in-JS
              library developed by Meta that compiles to atomic CSS at build time. Unlike runtime
              CSS-in-JS solutions, Stylex produces tiny, deterministic stylesheets with zero runtime
              overhead.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              This means all styling is resolved at build time, resulting in minimal bundle size and
              excellent runtime performance. The tradeoff is that Stylex requires bundler plugin
              configuration and does not support CSS Cascade layers or traditional stylesheet
              features.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Design Tokens
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              The design system is driven by CSS variables defined via{" "}
              <code style={s.code}>stylex.defineVars</code>:
            </p>
            <pre style={s.pre}>
              <code>{`export const theme = stylex.defineVars({
  primary: "",
  background: "",
  surface: "",
  border: "",
  contentPrimary: "",
  sentimentNegative: "",
  focusRing: "",
  shadowSm: "",
  // ...
});`}</code>
            </pre>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Theme tokens support automatic light/dark mode via media queries.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Style Composition
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Components compose styles using <code style={s.code}>stylex.props()</code>, which
              merges multiple style definitions and applies them as atomic classes:
            </p>
            <pre style={s.pre}>
              <code>{`const resolved = stylex.props(
  buttonStyles.base,
  variantStyles[variant],
  sizeStyles[size],
  style,          // overrides via prop
);`}</code>
            </pre>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Key Constraints
            </h3>
            <ul style={s.list}>
              <li style={s.li}>
                Stylex does not support <code style={s.code}>@media</code> queries in{" "}
                <code style={s.code}>stylex.create</code> — use{" "}
                <code style={s.code}>stylex.defineVars</code> with media query overrides.
              </li>
              <li style={s.li}>
                Dynamic styles must be defined statically and toggled via conditionals — not created
                inline.
              </li>
              <li style={s.li}>CSS custom properties are the primary theming mechanism.</li>
              <li style={s.li}>
                Bundler plugin (<code style={s.code}>@stylexjs/unplugin</code>) is required at build
                time.
              </li>
              <li style={s.li}>
                No runtime style injection — all styles are extracted during build.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
