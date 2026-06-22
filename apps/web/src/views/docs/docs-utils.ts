import type { TocItem } from "@/utils/extractHeadings";

export interface SidebarLink {
  to: string;
  label: string;
}

export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export function formatLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

declare module "@tanstack/react-router" {
  interface RouteContext {
    sidebarSections?: SidebarSection[];
    toc?: TocItem[];
  }
}
