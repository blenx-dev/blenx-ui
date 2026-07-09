import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";
import { focusRing, disabled } from "../../utils/interaction-styles.css";
import {
  dangerPalette,
  infoPalette,
  monoPalette,
  neutralPalette,
  paletteVars,
  primaryPalette,
  successPalette,
  warningPalette,
} from "../../utils/pallete-styles.css";

export const variant = recipe({
  base: [
    focusRing,
    baseSprinkles({
      display: "inline-flex",
      align: "center",
      justify: "center",
      gap: "sm",
      radius: "default",
      width: "fit",
      height: "fit",
      position: "relative",
      fontSize: "md",
      borderStyle: "solid",
      fontWeight: "medium",
      borderWidth: "thin",
      cursor: "pointer",
      textDecoration: "none",
    }),
    style({
      transitionProperty: "background-color, color, box-shadow",
      transitionDuration: tokenVars.duration.fast,
      transitionTimingFunction: tokenVars.easing.standard,
    }),
    disabled,
  ],
  variants: {
    intent: {
      primary: primaryPalette,
      neutral: neutralPalette,
      success: successPalette,
      warning: warningPalette,
      danger: dangerPalette,
      info: infoPalette,
      mono: monoPalette,
    },
    size: {
      xs: baseSprinkles({ fontSize: "sm", py: "xxs", px: "xs" }),
      sm: baseSprinkles({ fontSize: "sm", py: "xs", px: "sm" }),
      icon: baseSprinkles({ py: "xxs", px: "xxs" }),
      md: baseSprinkles({ fontSize: "md", py: "sm", px: "md" }),
      lg: baseSprinkles({ fontSize: "lg", py: "md", px: "lg" }),
    },
    variant: {
      solid: [
        {
          backgroundColor: paletteVars.bg,
          borderColor: paletteVars.border,
          color: paletteVars.fg,
          selectors: {
            "&:hover:not(:disabled)": {
              backgroundColor: paletteVars.hoverBg,
            },
            "&:active:not(:disabled)": {
              backgroundColor: paletteVars.activeBg,
              color: paletteVars.activeFg,
            },
          },
        },
      ],
      soft: {
        backgroundColor: `color-mix(in srgb, ${paletteVars.hoverBg} 20%, transparent)`,
        color: paletteVars.fg,
        borderColor: "transparent",
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 40%, transparent)`,
          },
          "&:active:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 60%, transparent)`,
          },
        },
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: paletteVars.border,
        color: paletteVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 20%, transparent)`,
            borderColor: paletteVars.border,
          },
          "&:active:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 40%, transparent)`,
          },
        },
      },
      ghost: [
        baseSprinkles({
          backgroundColor: "transparent",
          borderColor: "transparent",
        }),
        {
          color: paletteVars.fg,
          selectors: {
            "&:hover:not(:disabled)": {
              backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 20%, transparent)`,
            },
            "&:active:not(:disabled)": {
              backgroundColor: `color-mix(in srgb, ${paletteVars.bg} 40%, transparent)`,
            },
          },
        },
      ],
      link: [
        baseSprinkles({
          backgroundColor: "transparent",
          borderColor: "transparent",
        }),
        {
          color: paletteVars.fg,
          selectors: {
            "&:hover:not(:disabled)": {
              textDecoration: "underline",
            },
            "&:active:not(:disabled)": {
              textDecoration: "underline",
              opacity: 0.8,
            },
          },
        },
      ],
    },
  },
});
