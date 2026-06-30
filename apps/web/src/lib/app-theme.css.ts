import { globalStyle } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { createBlenxThemeFromRadix } from "@blenx-dev/theme";
import {
  amber,
  amberA,
  amberDark,
  sage,
  sageA,
  amberDarkA,
  sageDark,
  sageDarkA,
} from "@radix-ui/colors";
import { definePalette } from "@blenx-dev/theme/radix/from-radix";

export const { themeClass: lightClass, tokenThemeClass } = createBlenxThemeFromRadix({
  colors: {
    primary: { base: definePalette("amber", amber), accent: definePalette("amberA", amberA) },
    neutral: { base: definePalette("sage", sage), accent: definePalette("sageA", sageA) },
    secondary: { base: definePalette("amber", amber), accent: definePalette("amberA", amberA) },
    success: { base: definePalette("amber", amber), accent: definePalette("amberA", amberA) },
    warning: { base: definePalette("amber", amber), accent: definePalette("amberA", amberA) },
    danger: { base: definePalette("amber", amber), accent: definePalette("amberA", amberA) },
    info: { base: definePalette("amber", amber), accent: definePalette("amberA", amberA) },
  },
});
export const { themeClass: darkClass } = createBlenxThemeFromRadix({
  colors: {
    primary: {
      base: definePalette("amber", amberDark),
      accent: definePalette("amberA", amberDarkA),
    },
    neutral: { base: definePalette("sage", sageDark), accent: definePalette("sageA", sageDarkA) },
    secondary: {
      base: definePalette("amber", amberDark),
      accent: definePalette("amberA", amberDarkA),
    },
    success: {
      base: definePalette("amber", amberDark),
      accent: definePalette("amberA", amberDarkA),
    },
    warning: {
      base: definePalette("amber", amberDark),
      accent: definePalette("amberA", amberDarkA),
    },
    danger: {
      base: definePalette("amber", amberDark),
      accent: definePalette("amberA", amberDarkA),
    },
    info: { base: definePalette("amber", amberDark), accent: definePalette("amberA", amberDarkA) },
  },
});

globalStyle("body", {
  backgroundColor: semanticVars.background.default,
  color: semanticVars.text.primary,
  margin: 0,
  fontFamily: tokenVars.font.body,
  fontSize: "14px",
  lineHeight: 1.5,
  maxWidth: "100vw",
});

globalStyle("h1,h2,h3,h4,h5,h6", {
  fontFamily: tokenVars.font.body,
});
