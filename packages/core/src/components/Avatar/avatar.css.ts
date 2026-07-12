import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { tokenVars } from "../../theme/contract.css";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    radius: "default",
    backgroundColor: "subtle",
    color: "secondary",
    overflow: "hidden",
    shrink: 0,
    borderWidth: "thin",
    outline: "none",
  }),
  style({
    border: "none",
  }),
]);

export const image = style([
  baseSprinkles({
    width: "full",
    height: "full",
    display: "block",
    borderWidth: "thin",
    outline: "none",
  }),
  style({
    objectFit: "cover",
    border: "none",
  }),
]);

export const fallback = style([
  baseSprinkles({
    width: "full",
    height: "full",
    display: "flex",
    align: "center",
    justify: "center",
    backgroundColor: "subtle",
    color: "secondary",
    borderWidth: "none",
    fontWeight: "semibold",
    outline: "none",
    fontSize: "sm",
    lineHeight: "normal",
  }),
  style({
    border: "none",
  }),
]);

export const avatarRecipes = recipe({
  variants: {
    size: {
      sm: { width: tokenVars.spacing.lg, height: tokenVars.spacing.lg },
      md: { width: tokenVars.spacing.xl, height: tokenVars.spacing.xl },
      lg: { width: tokenVars.spacing.xxl, height: tokenVars.spacing.xxl },
      xl: { width: tokenVars.spacing.xxxl, height: tokenVars.spacing.xxxl },
      hero: { width: tokenVars.spacing.titanic, height: tokenVars.spacing.titanic },
    },
  },
});
