import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/primitives")({
  component: PrimitivesDoc,
});

const vars = {
  border: "var(--border)",
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
  card: {
    borderRadius: "8px",
    border: `1px solid ${vars.border}`,
    padding: "16px",
  } as React.CSSProperties,
};

function PrimitivesDoc() {
  return (
    <div
      style={{ maxWidth: "768px", margin: "0 auto", paddingInline: "16px", paddingBlock: "32px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}>
          Primitives with Base UI
        </h1>

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Why Base UI?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Blenx UI is built on <strong>Base UI React</strong> (
              <code style={s.code}>@base-ui/react</code>), a headless component library from the
              creators of Material UI. Base UI provides unstyled, accessible primitives that handle
              behavior, keyboard navigation, focus management, and ARIA attributes.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Each Blenx UI component wraps a Base UI primitive with Stylex styling. This separation
              keeps the behavioral logic framework-agnostic while allowing full control over visual
              presentation.
            </p>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Component Architecture
            </h3>
            <pre style={s.pre}>
              <code>{`// Base UI handles behavior and accessibility
import { useRender } from "@base-ui/react/use-render";

// Stylex handles visual styling
import * as stylex from "@stylexjs/stylex";

export function Button({ render, ...props }) {
  return useRender({
    defaultTagName: "button",
    props: stylex.props(buttonStyles.base, props),
    render,
  });
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
              Key Primitives Used
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={s.card}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: 0,
                    color: vars.contentPrimary,
                  }}
                >
                  Dialog
                </p>
                <p style={{ fontSize: "12px", color: vars.contentSecondary, margin: 0 }}>
                  @base-ui/react/dialog
                </p>
              </div>
              <div style={s.card}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: 0,
                    color: vars.contentPrimary,
                  }}
                >
                  Popover
                </p>
                <p style={{ fontSize: "12px", color: vars.contentSecondary, margin: 0 }}>
                  @base-ui/react/popover
                </p>
              </div>
              <div style={s.card}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: 0,
                    color: vars.contentPrimary,
                  }}
                >
                  Select, Menu, Combobox, Autocomplete
                </p>
                <p style={{ fontSize: "12px", color: vars.contentSecondary, margin: 0 }}>
                  various Base UI modules
                </p>
              </div>
              <div style={s.card}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: 0,
                    color: vars.contentPrimary,
                  }}
                >
                  Field, Input, Switch, Toggle
                </p>
                <p style={{ fontSize: "12px", color: vars.contentSecondary, margin: 0 }}>
                  form primitives
                </p>
              </div>
              <div style={s.card}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: 0,
                    color: vars.contentPrimary,
                  }}
                >
                  ScrollArea, Tabs, Separator, Avatar
                </p>
                <p style={{ fontSize: "12px", color: vars.contentSecondary, margin: 0 }}>
                  layout and media
                </p>
              </div>
              <div style={s.card}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: 0,
                    color: vars.contentPrimary,
                  }}
                >
                  useRender, mergeProps
                </p>
                <p style={{ fontSize: "12px", color: vars.contentSecondary, margin: 0 }}>
                  composition utilities
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid var(--borderSubtle)" }} />

        <section style={s.section}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3
              style={{ fontSize: "24px", fontWeight: 700, margin: 0, color: vars.contentPrimary }}
            >
              Extending with <code style={s.code}>render</code>
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: vars.contentSecondary,
                margin: 0,
                lineHeight: 1.625,
              }}
            >
              Every component supports a <code style={s.code}>render</code> prop that lets you
              override the rendered HTML element. This makes the library highly composable:
            </p>
            <pre style={s.pre}>
              <code>{`// Render Button as a link
<Button render={<a href="/page" />}>Go</Button>

// Compose Dialog close as a Button
<DialogPrimitive.Close render={<Button size="small" />}>
  <XIcon />
</DialogPrimitive.Close>`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
