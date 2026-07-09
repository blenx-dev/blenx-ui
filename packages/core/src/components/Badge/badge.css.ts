import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles.css";
import { paletteVars } from "../../utils/pallete-styles.css";

export const badgeRecipe = recipe({
  base: baseSprinkles({
    display: "inline-block",
    padding: "xs",
    borderRadius: "default",
    fontSize: "sm",
    lineHeight: "normal",
    borderWidth: "thin",
    borderColor: "transparent",
  }),
  variants: {
    variant: {
      solid: {
        backgroundColor: paletteVars.bg,
        color: paletteVars.fg,
      },
      soft: {},
      outline: {
        backgroundColor: "transparent",
        border: "1px solid " + paletteVars.border,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: "solid",
      },
      style: {
        backgroundColor: paletteVars.bg,
        color: paletteVars.fg,
        borderColor: paletteVars.border,
      },
    },

    {
      variants: {
        variant: "outline",
      },
      style: {
        backgroundColor: "transparent",
        color: paletteVars.border,
        borderColor: paletteVars.border,
      },
    },

    {
      variants: {
        variant: "soft",
      },
      style: {
        backgroundColor: `color-mix(in srgb, ${paletteVars.border} 25%, transparent)`,
        color: paletteVars.fg,
      },
    },
  ],

  defaultVariants: {
    variant: "solid",
  },
});
