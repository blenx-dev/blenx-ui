import type { ReactNode } from "react";
import DocsSidebar from "./docs-sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "1080px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <DocsSidebar />
      <div
        style={{
          flex: 1,
          minWidth: 0,
          paddingInline: "var(--space-8)",
          paddingBlock: "var(--space-8)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
