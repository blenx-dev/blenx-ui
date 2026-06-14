import * as stylex from "@stylexjs/stylex";
import { mediaQueries, spacing, theme } from "#/lib/theme/contract.stylex";

export const breadcrumbsStyles = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xsmall,
    color: {
      default: theme.contentSecondary,
      [mediaQueries.dark]: theme.contentSecondary,
    },
    fontSize: 14,
  },
});
