import { createFileRoute } from "@tanstack/react-router";
import DocsLayout from "../../components/docs-layout";

export const Route = createFileRoute("/docs/theming")({
  component: ThemingDoc,
});

const s = {
  section: { marginBottom: "var(--space-8)" } as React.CSSProperties,
  code: {
    backgroundColor: "var(--surfaceSubtle)",
    borderRadius: "var(--radius-small)",
    paddingInline: "var(--space-1)",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--font-size-small)",
  } as React.CSSProperties,
  pre: {
    backgroundColor: "var(--surfaceSubtle)",
    borderRadius: "var(--radius-medium)",
    padding: "var(--space-4)",
    overflowX: "auto",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--font-size-small)",
    lineHeight: "var(--leading-normal)",
    margin: 0,
  } as React.CSSProperties,
  paragraph: {
    fontSize: "var(--font-size-small)",
    color: "var(--contentSecondary)",
    margin: 0,
    lineHeight: "var(--leading-relaxed)",
    marginBottom: "var(--space-2)",
  } as React.CSSProperties,
  heading3: {
    fontSize: "var(--font-size-large)",
    fontWeight: "var(--font-weight-semibold)",
    margin: 0,
    color: "var(--contentPrimary)",
    marginTop: "var(--space-6)",
    marginBottom: "var(--space-2)",
  } as React.CSSProperties,
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "var(--font-size-small)",
    lineHeight: "var(--leading-relaxed)",
  } as React.CSSProperties,
  th: {
    textAlign: "left",
    padding: "var(--space-2) var(--space-3)",
    borderBottom: "1px solid var(--border)",
    fontWeight: "var(--font-weight-semibold)",
    color: "var(--contentPrimary)",
    whiteSpace: "nowrap",
  } as React.CSSProperties,
  td: {
    padding: "var(--space-2) var(--space-3)",
    borderBottom: "1px solid var(--borderSubtle)",
    color: "var(--contentSecondary)",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--font-size-xsmall)",
  } as React.CSSProperties,
};

const tokenTable = [
  ["--primary", "--background", "--surface"],
  ["--primarySubtle", "--backgroundSubtle", "--surfaceSubtle"],
  ["--secondary", "--border", "--surfaceRaised"],
  ["--borderSubtle", "--borderStrong", "--surfaceHover"],
  ["--contentPrimary", "--contentSecondary", "--surfaceOverlay"],
  ["--contentDisabled", "--contentAccent", "--contentOnPrimary"],
  ["--contentInverse", "--focusRing", "--borderRadius"],
  ["--sentimentNegative", "--sentimentNegativeSubtle", ""],
  ["--sentimentPositive", "--sentimentPositiveSubtle", ""],
  ["--sentimentWarning", "--sentimentWarningSubtle", ""],
  ["--sentimentInfo", "--sentimentInfoSubtle", ""],
  ["--shadowSm", "--shadowMd", "--shadowLg", "--shadowXl"],
];

function ThemingDoc() {
  return (
    <DocsLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <h1
          style={{
            fontSize: "var(--font-size-display)",
            fontWeight: "var(--font-weight-bold)",
            margin: 0,
            color: "var(--contentPrimary)",
          }}
        >
          Theming
        </h1>
        <p style={s.paragraph}>
          Blenx UI provides two approaches for customizing the look and feel of your components.
          Choose the one that best fits your project's setup.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <h2
              style={{
                fontSize: "var(--font-size-xxlarge)",
                fontWeight: "var(--font-weight-bold)",
                margin: 0,
                color: "var(--contentPrimary)",
              }}
            >
              Approach 1: CSS Variable Override
            </h2>
            <p style={s.paragraph}>
              The simplest approach. Create a CSS file that redeclares any of the theme's CSS custom
              properties. Your values will take precedence over the defaults through the cascade.
            </p>
            <p style={s.paragraph}>
              This works without any build configuration and can be done entirely in CSS. It is ideal
              for quick overrides, small tweaks, or projects that do not use Stylex directly.
            </p>

            <h3 style={s.heading3}>Example</h3>
            <pre style={s.pre}>
              <code>{`/* my-theme.css — import or link after the component styles */
:root {
  --primary: #1a1a2e;
  --secondary: #e94560;
  --background: #f8f9fa;
  --surface: #ffffff;
  --contentPrimary: #1a1a2e;
  --focusRing: #e94560;
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary: #eaeaea;
    --background: #16213e;
    --surface: #1a1a2e;
    --contentPrimary: #eaeaea;
    --focusRing: #e94560;
  }
}`}</code>
            </pre>

            <h3 style={s.heading3}>Available Theme Tokens</h3>
            <p style={s.paragraph}>
              All semantic color tokens from the theme contract. Override any subset — the rest fall
              back to defaults.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={s.th}>Token</th>
                    <th style={s.th}>Token</th>
                    <th style={s.th}>Token</th>
                    <th style={s.th}>Token</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenTable.map((row) => (
                    <tr key={row.join("")}>
                      {row.map((cell) => (
                        <td key={cell} style={s.td}>
                          {cell}
                        </td>
                      ))}
                      {row.length < 4
                        ? Array.from({ length: 4 - row.length }).map((_, i) => (
                          <td key={`empty-${i}`} style={s.td} />
                        ))
                        : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={s.heading3}>Primitive Tokens</h3>
            <p style={s.paragraph}>
              Spacing, typography, radius, and motion tokens are also available for override:
            </p>
            <pre style={s.pre}>
              <code>{`:root {
  --radius-medium: 6px;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --space-4: 12px;
  --duration-normal: 150ms;
}`}</code>
            </pre>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <h2
              style={{
                fontSize: "var(--font-size-xxlarge)",
                fontWeight: "var(--font-weight-bold)",
                margin: 0,
                color: "var(--contentPrimary)",
              }}
            >
              Approach 2: Stylex Contract Theme
            </h2>
            <p style={s.paragraph}>
              For projects using Stylex, create a typed theme using{" "}
              <code style={s.code}>stylex.createTheme</code> from the exported theme contract. This
              gives you full type safety and integrates directly with Stylex's theming system.
            </p>
            <p style={s.paragraph}>
              The generated theme is applied via a <code style={s.code}>className</code> on the root
              element. All child components using the contract tokens will automatically pick up your
              custom values.
            </p>

            <h3 style={s.heading3}>1. Create a theme file</h3>
            <pre style={s.pre}>
              <code>{`// styles/my-theme.stylex.ts
import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-ui/ui/theme/contract.stylex";

export const myTheme = stylex.createTheme(theme, {
  primary: "#6C63FF",
  primarySubtle: "#8B83FF",
  secondary: "#FF6584",

  background: "#FAFAFA",
  backgroundSubtle: "#F0F0F5",

  surface: "#FFFFFF",
  surfaceSubtle: "#F0F0F5",
  surfaceHover: "#E8E8EE",

  border: "#D1D1E0",
  borderSubtle: "#E5E5F0",

  contentPrimary: "#2D2D44",
  contentSecondary: "#6B6B80",

  focusRing: "#6C63FF",

  // Override as many or as few tokens as you need
});`}</code>
            </pre>

            <h3 style={s.heading3}>2. Apply to root element</h3>
            <p style={s.paragraph}>
              Add the theme's <code style={s.code}>className</code> to your app's root element. The
              exact approach depends on your framework:
            </p>
            <pre style={s.pre}>
              <code>{`// React — wrap your app root
import * as stylex from "@stylexjs/stylex";
import { myTheme } from "./styles/my-theme.stylex";

function App() {
  return (
    <div {...stylex.props(myTheme)}>
      <YourApp />
    </div>
  );
}`}</code>
            </pre>
            <pre style={s.pre}>
              <code>{`// Next.js — apply to the body or a layout wrapper
// app/layout.tsx
import { myTheme } from "@/styles/my-theme.stylex";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myTheme}>
        {children}
      </body>
    </html>
  );
}`}</code>
            </pre>

            <h3 style={s.heading3}>Available Imports</h3>
            <p style={s.paragraph}>
              The theme contract is exported from the registry package:
            </p>
            <pre style={s.pre}>
              <code>{`// Import the contract for createTheme
import { theme } from "@blenx-ui/ui/theme/contract.stylex";

// Or use the convenience re-exports
import { theme, borderRadius, spacing, fontSize } from "@blenx-ui/ui/theme/tokens.stylex";`}</code>
            </pre>

            <h3 style={s.heading3}>Comparing the Two Approaches</h3>
            <div style={{ overflowX: "auto" }}>
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={s.th} />
                    <th style={s.th}>CSS Override</th>
                    <th style={s.th}>Stylex Contract</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ ...s.td, fontWeight: "var(--font-weight-medium)" }}>
                      Configuration
                    </td>
                    <td style={s.td}>None — just add a CSS file</td>
                    <td style={s.td}>Requires Stylex bundler plugin</td>
                  </tr>
                  <tr>
                    <td style={{ ...s.td, fontWeight: "var(--font-weight-medium)" }}>Type Safety</td>
                    <td style={s.td}>None</td>
                    <td style={s.td}>Full type checking on token names</td>
                  </tr>
                  <tr>
                    <td style={{ ...s.td, fontWeight: "var(--font-weight-medium)" }}>
                      Light/Dark Mode
                    </td>
                    <td style={s.td}>Manual via media query in CSS</td>
                    <td style={s.td}>Automatic via Stylex theme values</td>
                  </tr>
                  <tr>
                    <td style={{ ...s.td, fontWeight: "var(--font-weight-medium)" }}>
                      Setup Effort
                    </td>
                    <td style={s.td}>Minimal</td>
                    <td style={s.td}>Requires Stylex setup + TypeScript file</td>
                  </tr>
                  <tr>
                    <td style={{ ...s.td, fontWeight: "var(--font-weight-medium)" }}>
                      Best For
                    </td>
                    <td style={s.td}>Quick overrides, non-Stylex projects</td>
                    <td style={s.td}>Full design system customization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
