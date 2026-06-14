import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/limitations")({
  component: LimitationsDoc,
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

function LimitationsDoc() {
  return (
    <div
      style={{ maxWidth: "768px", margin: "0 auto", paddingInline: "16px", paddingBlock: "32px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}>
          Limitations
        </h1>
        <p style={{ fontSize: "14px", color: vars.contentSecondary, margin: 0, lineHeight: 1.625 }}>
          Blenx UI makes specific technology choices that come with important constraints. Review
          these before adopting the library.
        </p>

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Monorepo Not Supported for Consumers
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              The shadcn registry model copies source files directly into your project. The copied
              files use import aliases (<code style={s.code}>@/components</code>,{" "}
              <code style={s.code}>@/lib</code>, etc.) that assume a flat project structure.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              If you are using a monorepo (Turborepo, Nx, Rush, pnpm workspaces), the installed
              component files and their relative imports may not resolve correctly across package
              boundaries. Each consuming application must independently configure its own alias
              resolution and Stylex plugin.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              <strong>Recommendation:</strong> Install components into a single application package,
              not into a shared UI package within your monorepo.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Stylex Build Requirement
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Stylex is a build-time CSS-in-JS solution. Every consumer project must:
            </p>
            <ul style={s.list}>
              <li style={s.li}>
                Install and configure the Stylex bundler plugin (
                <code style={s.code}>@stylexjs/unplugin</code>)
              </li>
              <li style={s.li}>Use a supported bundler: Vite, Next.js, Webpack, or ESBuild</li>
              <li style={s.li}>
                NOT use CSS-in-JS solutions that conflict with atomic class extraction (e.g.,
                styled-components, Emotion)
              </li>
            </ul>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Without proper Stylex configuration, components will render without styles.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Base UI Version Lock
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Blenx UI depends on specific <code style={s.code}>@base-ui/react</code> APIs. The
              library is tested against <strong>Base UI React ^1.5.0</strong>. Upgrading Base UI may
              break component behavior. If you need a newer Base UI version, test all components
              thoroughly.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              No Tailwind CSS Support
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              This project deliberately chose Stylex over Tailwind CSS. The registry components ship
              with their own Stylex styles. If your project uses Tailwind, the two can coexist, but
              components will use Stylex classes, not Tailwind utilities. You cannot override
              component styles with <code style={s.code}>className</code> — use the{" "}
              <code style={s.code}>style</code> prop instead.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Phosphor Icons
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              The library uses <code style={s.code}>@phosphor-icons/react</code> for all
              iconography. If you prefer a different icon set, you will need to replace icon imports
              in the installed component source files manually.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Framework Compatibility
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Components are built with React 19+ and are not tested with:
            </p>
            <ul style={s.list}>
              <li style={s.li}>React Native</li>
              <li style={s.li}>Vue, Svelte, Solid, or other frameworks</li>
              <li style={s.li}>Older React versions (&lt;19)</li>
            </ul>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              CSS Custom Properties Theming
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Theme tokens are implemented as Stylex CSS variables. While this enables efficient
              light/dark mode switching, it means theme customization is limited to CSS variable
              overrides. You cannot use JavaScript-level theme switching without updating component
              source code.
            </p>
            <pre style={s.pre}>
              <code>{`/* Override theme tokens in your CSS */
:root {
  --primary: #your-color;
  --background: #your-bg;
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
