import { Link, useLocation } from "@tanstack/react-router";

interface SidebarSection {
  title: string;
  links: { to: string; label: string }[];
}

const sections: SidebarSection[] = [
  {
    title: "Getting Started",
    links: [
      { to: "/docs", label: "Overview" },
      { to: "/docs/installation", label: "Installation" },
    ],
  },
  {
    title: "Concepts",
    links: [
      { to: "/docs/styling", label: "Styling" },
      { to: "/docs/primitives", label: "Primitives" },
    ],
  },
  {
    title: "Customization",
    links: [{ to: "/docs/theming", label: "Theming" }],
  },
  {
    title: "Reference",
    links: [{ to: "/docs/limitations", label: "Limitations" }],
  },
];

const sidebarStyle: React.CSSProperties = {
  width: "220px",
  flexShrink: 0,
  paddingInline: "var(--space-4)",
  paddingBlock: "var(--space-8)",
  borderRight: "1px solid var(--border)",
  position: "sticky",
  top: 0,
  alignSelf: "start",
  height: "100vh",
  overflowY: "auto",
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: "var(--font-size-xsmall)",
  fontWeight: "var(--font-weight-semibold)",
  color: "var(--contentDisabled)",
  textTransform: "uppercase",
  letterSpacing: "var(--tracking-wide)",
  marginBottom: "var(--space-2)",
  marginTop: "var(--space-5)",
};

const linkStyle: React.CSSProperties = {
  display: "block",
  fontSize: "var(--font-size-small)",
  color: "var(--contentSecondary)",
  textDecoration: "none",
  paddingBlock: "var(--space-1)",
  paddingInline: "var(--space-2)",
  borderRadius: "var(--radius-small)",
  lineHeight: "var(--leading-normal)",
};

const activeLinkStyle: React.CSSProperties = {
  color: "var(--contentPrimary)",
  fontWeight: "var(--font-weight-medium)",
  backgroundColor: "var(--surfaceSubtle)",
};

export default function DocsSidebar() {
  const { pathname } = useLocation();

  return (
    <nav style={sidebarStyle}>
      {sections.map((section) => (
        <div key={section.title}>
          <p style={sectionTitleStyle}>{section.title}</p>
          {section.links.map((link) => {
            const isActive =
              link.to === "/docs"
                ? pathname === "/docs" || pathname === "/docs/"
                : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{ ...linkStyle, ...(isActive ? activeLinkStyle : {}) }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
