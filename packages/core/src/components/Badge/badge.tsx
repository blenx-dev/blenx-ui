import clsx from "clsx";
import { badgeRecipe } from "./badge.css";
import { Box, type BoxProps } from "../Box/box";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { paletteMap } from "../../utils/pallete-styles.css";

export type BadgeProps = BoxProps & RecipeVariants<typeof badgeRecipe>;

export function Badge({
  variant = "solid",
  palette = "primary",
  className,
  style,
  ...props
}: BadgeProps) {
  return (
    <Box
      className={clsx(paletteMap[palette], badgeRecipe({ variant }), className)}
      style={style}
      {...props}
    />
  );
}
