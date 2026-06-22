import type React from "react";
import { docsLink } from "@/lib/styles.css";

interface DocsLinkProps {
  href?: string;
  children?: React.ReactNode;
}

function DocsLink({ href, children, ...props }: DocsLinkProps) {
  const isExternal = href?.startsWith("http://") || href?.startsWith("https://");

  return (
    <a
      className={docsLink}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

export { DocsLink };
