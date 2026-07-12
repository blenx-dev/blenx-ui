import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "../../theme/contract.css";
import { baseSprinkles } from "../../utils/sprinkles";
import { paletteVars } from "../../utils/pallete-styles.css";

export const base = style([
  baseSprinkles({
    position: "relative",
    shrink: 0,
    backgroundColor: "transparent",
    fontSize: "sm",
    lineHeight: "tight",
    cursor: "pointer",
    whiteSpace: "nowrap",
    userSelect: "none",
    outline: "none",
  }),
  style({
    transition: "background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: paletteVars.border,
        color: paletteVars.fg,
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
      sm: baseSprinkles({
        px: "sm",
      }),
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
        color: paletteVars.fg,
      },
      outline: {
        color: paletteVars.fg,
        backgroundColor: "transparent",
      },
    },
  },
});

export const pressed = {
  default: baseSprinkles({
    backgroundColor: "default",
    color: "default",
  }),
  outline: baseSprinkles({
    borderWidth: "thick",
    borderStyle: "solid",
  }),
};
