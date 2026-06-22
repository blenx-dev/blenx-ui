import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allBlocks, allBlockGroups } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Box, Separator, Text, VStack } from "@blenx-dev/ui/components";
import { mdxComponents } from "@/views/docs/MdxComponents";
import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/theme/contract.stylex";
import { borderRadius, fontSize, spacing } from "@blenx-dev/ui/theme/tokens.stylex";

export const Route = createFileRoute("/docs/blocks/$group/$variant")({
  beforeLoad: ({ params }) => {
    const doc = allBlocks.find(
      (b) => b.group === params.group && b._meta.path === `${params.group}/${params.variant}`,
    );
    if (!doc) throw notFound();
    return { toc: doc.toc };
  },
  component: BlockVariantPage,
  notFoundComponent: () => <Text variant="h2">Block not found</Text>,
});

const styles = stylex.create({
  nav: {
    display: "flex",
    gap: spacing.xsmall,
    flexWrap: "wrap",
    paddingBottom: spacing.medium,
  },
  navLink: {
    textDecoration: "none",
    color: theme.contentSecondary,
    fontSize: fontSize.small,
    padding: "4px 12px",
    borderRadius: borderRadius.small,
    border: `1px solid ${theme.border}`,
  },
  navLinkActive: {
    backgroundColor: theme.surface,
    color: theme.contentPrimary,
    borderColor: theme.border,
  },
});

function BlockVariantPage() {
  const { group, variant } = Route.useParams();

  const blockGroup = allBlockGroups.find((g) => g.slug === group);
  const doc = allBlocks.find((b) => b.group === group && b._meta.path === `${group}/${variant}`);

  const variants = allBlocks.filter((b) => b.group === group).sort((a, b) => a.order - b.order);

  if (!blockGroup || !doc) throw notFound();

  return (
    <Box marginBottom="large">
      <VStack gap="medium">
        {" "}
        <VStack gap="medium">
          <VStack gap="small">
            <Text variant="h1">{blockGroup.title}</Text>
            <Text variant="body2" color="secondary">
              {blockGroup.description}
            </Text>
          </VStack>

          <Separator tone="subtle" />

          <nav {...stylex.props(styles.nav)}>
            {variants.map((v) => {
              const isActive = v._meta.path === doc._meta.path;
              const vSlug = v._meta.path.replace(`${group}/`, "");
              return (
                <Link
                  key={v._meta.path}
                  to="/docs/blocks/$group/$variant"
                  params={{ group, variant: vSlug }}
                  {...stylex.props(styles.navLink, isActive && styles.navLinkActive)}
                >
                  {v.title}
                </Link>
              );
            })}
          </nav>

          <MDXContent code={doc.mdx} components={mdxComponents} />
        </VStack>
      </VStack>
    </Box>
  );
}
