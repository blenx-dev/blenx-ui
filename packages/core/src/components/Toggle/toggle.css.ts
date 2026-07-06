import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const base = style([
  baseSprinkles({
    position: "relative",
    display: "inline-flex",
    shrink: 0,
    align: "center",
    justify: "center",
    gap: "sm",
    radius: "default",
    backgroundColor: "transparent",
    fontSize: "sm",
    borderWidth: "thin",
  }),
  style({
    whiteSpace: "nowrap",
    borderStyle: "solid",
    fontWeight: tokenVars.fontWeight.medium,
    lineHeight: 1.4,
    cursor: "pointer",
    userSelect: "none",
    outline: "none",
    transition: "box-shadow 0.15s ease",
    selectors: {
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
        borderColor: "transparent",
        color: semanticVars.text.primary,
        backgroundColor: semanticVars.surface.default,
      },
      outline: {
        borderColor: semanticVars.border.default,
        color: semanticVars.text.primary,
        backgroundColor: semanticVars.background.subtle,
      },
    },
  },
});

export const pressed = {
  default: style({
    backgroundColor: semanticVars.surface.raised,
  }),
  outline: style({
    outlineWidth: tokenVars.borderWidth.thin,
    backgroundColor: semanticVars.surface.overlay,
    borderColor: semanticVars.border.strong,
  }),
};
