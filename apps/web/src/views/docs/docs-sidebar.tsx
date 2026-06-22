import * as stylex from "@stylexjs/stylex";
import { Link, useLocation, useMatches } from "@tanstack/react-router";
import { Box, Surface, Text, VStack } from "@blenx-dev/ui/components";
import type { SidebarSection } from "@/views/docs/docs-utils";

const styles = stylex.create({
  link: {
    textDecoration: "none",
  },
});

const isLinkActive = (link: string, pathname: string) =>
  link === "/docs"
    ? pathname === "/docs" || pathname === "/docs/"
    : link === "/blocks"
      ? pathname === "/blocks" || pathname.startsWith("/blocks/")
      : pathname === link || pathname.startsWith(link + "/");

function DocsSidebar({ onClose }: { onClose?: () => void }) {
  const { pathname } = useLocation();
  const matches = useMatches();
  const sidebarSections: SidebarSection[] =
    [...matches].reverse().find((m) => m.context.sidebarSections)?.context.sidebarSections ?? [];

  return (
    <Surface variant="sunken" fullWidth>
      <VStack gap="medium" padding="medium">
        {sidebarSections.map((section) => (
          <Box key={section.title}>
            <Text variant="h3">{section.title}</Text>
            <VStack gap="xxsmall">
              {section.links.map((link) => {
                const isActive = isLinkActive(link.to, pathname);
                return (
                  <Surface
                    variant={isActive ? "default" : "sunken"}
                    borderRadius="xs"
                    paddingY="xs"
                    paddingX="sm"
                    key={link.to}
                    render={<Link {...stylex.props(styles.link)} to={link.to} onClick={onClose} />}
                  >
                    <Text variant="body2" color={isActive ? "primary" : "secondary"}>
                      {link.label}
                    </Text>
                  </Surface>
                );
              })}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Surface>
  );
}

export { DocsSidebar };
