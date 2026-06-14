import { Link } from "@tanstack/react-router";

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "var(--contentSecondary)",
  lineHeight: 1,
  paddingBlock: "var(--space-1)",
  fontSize: "var(--font-size-small)",
};

const logoStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "var(--contentPrimary)",
  fontWeight: "var(--font-weight-bold)",
  fontSize: "var(--font-size-large)",
  letterSpacing: "var(--tracking-tight)",
  lineHeight: 1,
};

export default function Header() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)",
        backgroundColor: "var(--background)",
        paddingInline: "var(--space-4)",
        paddingBlock: "var(--space-3)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={logoStyle}>
          Blenx UI
        </Link>
        <a
          href="https://github.com/blenx-dev/blenx-ui"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          GitHub &rarr;
        </a>
      </div>
      <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
    </div>
  );
}
