import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";
import {
  dangerPalette,
  infoPalette,
  neutralPalette,
  paletteVars,
  primaryPalette,
  successPalette,
  warningPalette,
} from "../../utils/pallete-styles.css";

export const base = style([
  baseSprinkles({
    position: "relative",
    display: "inline-flex",
    shrink: 0,
    align: "center",
    justify: "center",
    gap: "sm",
    radius: "inherit",
    backgroundColor: "transparent",
    fontSize: "sm",
    borderWidth: "thin",
    borderStyle: "solid",
    lineHeight: "tight",
    fontWeight: "medium",
    cursor: "pointer",
    whiteSpace: "nowrap",
    userSelect: "none",
    outline: "none",
  }),
  style({
    transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: paletteVars.hoverBg,
      },
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
      },
      "&:disabled": {
        pointerEvents: "none",
        opacity: 0.64,
      },
    },
  }),
]);

export const toggleRecipes = recipe({
  variants: {
    size: {
      sm: {
        height: tokenVars.spacing.lg,
        minWidth: tokenVars.spacing.lg,
        paddingLeft: tokenVars.spacing.sm,
        paddingRight: tokenVars.spacing.sm,
      },
      default: {
        height: tokenVars.spacing.lg,
        minWidth: 36,
        paddingLeft: tokenVars.spacing.sm,
        paddingRight: tokenVars.spacing.sm,
      },
      lg: {
        height: tokenVars.spacing.xl,
        paddingLeft: tokenVars.spacing.md,
        paddingRight: tokenVars.spacing.md,
      },
    },
    variant: {
      default: {
        borderColor: semanticVars.border.subtle,
        color: paletteVars.fg,
        backgroundColor: "transparent",
      },
      outline: {
        borderColor: paletteVars.border,
        color: paletteVars.fg,
        backgroundColor: "transparent",
      },
    },
    palette: {
      primary: primaryPalette,
      secondary: neutralPalette,
      neutral: neutralPalette,
      success: successPalette,
      warning: warningPalette,
      danger: dangerPalette,
      info: infoPalette,
    },
  },
});

export const pressed = {
  default: style({
    backgroundColor: semanticVars.surface.raised,
    color: semanticVars.text.primary,
    borderColor: semanticVars.border.default,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
  }),
  outline: style({
    backgroundColor: semanticVars.surface.raised,
    color: semanticVars.text.primary,
    borderColor: semanticVars.border.default,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
  }),
};
