import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "../../theme/contract.css";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "sm",
});

export const input = recipe({
  base: [
    baseSprinkles({
      align: "center",
      justify: "center",
      textAlign: "center",
      outline: "none",
      display: "flex",
      borderRadius: "default",
      borderWidth: "hairline",
      borderStyle: "solid",
      borderColor: "default",
      backgroundColor: "default",
      color: "primary",
      padding: "0",
      margin: "0",
    }),
    style({
      caretColor: semanticVars.color.primary.default,
      transition: "box-shadow 0.15s ease, border-color 0.15s ease",
      selectors: {
        "&:focus-visible": {
          borderColor: semanticVars.color.primary.default,
          boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
        },
        "&[data-complete]": {
          borderColor: semanticVars.color.success.default,
          boxShadow: `0 0 0 2px ${semanticVars.color.success.default}`,
        },
      },
    }),
  ],
  variants: {
    size: {
      default: {
        width: tokenVars.spacing["9"],
        height: tokenVars.spacing["9"],
        fontSize: tokenVars.fontSize.md,
      },
      lg: {
        width: tokenVars.spacing["10"],
        height: tokenVars.spacing["10"],
        fontSize: tokenVars.fontSize.lg,
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const separator = style([
  baseSprinkles({
    shrink: 0,
    backgroundColor: "default",
    borderRadius: "full",
  }),
  style({
    width: tokenVars.spacing["3"],
    height: tokenVars.spacing["0.5"],
  }),
]);
