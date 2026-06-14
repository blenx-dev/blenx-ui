import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/docs", label: "Docs" },
  { to: "/docs/installation", label: "Install" },
  { to: "/docs/styling", label: "Styling" },
  { to: "/docs/primitives", label: "Primitives" },
  { to: "/docs/limitations", label: "Limitations" },
] as const;

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "var(--contentSecondary)",
  lineHeight: 1,
  paddingBlock: "4px",
};

const linkActiveStyle: React.CSSProperties = {
  color: "var(--contentPrimary)",
  fontWeight: 600,
};

export default function Header() {
  return (
    <div style={{ paddingInline: "16px", paddingBlock: "8px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <nav style={{ display: "flex", gap: "24px" }}>
          {links.map(({ to, label }) => {
            return (
              <Link key={to} to={to} style={linkStyle} activeProps={{ style: linkActiveStyle }}>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <hr style={{ border: "none", borderTop: "1px solid var(--border)" }} />
    </div>
  );
}
