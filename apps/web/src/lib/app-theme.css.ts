import { createTheme, globalStyle } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { createBlenxThemeFromRadix, tokenVarsDefaults } from "@blenx-dev/theme";
import {
  blue,
  blueA,
  blueDark,
  blueDarkA,
  amber,
  amberA,
  amberDark,
  amberDarkA,
  gray,
  grayDark,
  green,
  greenA,
  greenDark,
  greenDarkA,
  red,
  redA,
  redDark,
  redDarkA,
} from "@radix-ui/colors";
import { definePalette } from "@blenx-dev/theme/radix/from-radix";

export const tokenThemeClass = createTheme(tokenVars, tokenVarsDefaults);

export const { themeClass: lightClass } = createBlenxThemeFromRadix({
  colors: {
    primary: {
      base: definePalette("blue", blue),
      accent: definePalette("blueA", blueA),
    },
    neutral: {
      base: definePalette("gray", gray),
      accent: definePalette("gray", gray),
    },
    secondary: {
      base: definePalette("gray", gray),
      accent: definePalette("gray", gray),
    },
    success: {
      base: definePalette("green", green),
      accent: definePalette("greenA", greenA),
    },
    warning: {
      base: definePalette("amber", amber),
      accent: definePalette("amberA", amberA),
    },
    danger: {
      base: definePalette("red", red),
      accent: definePalette("redA", redA),
    },
    info: {
      base: definePalette("blue", blue),
      accent: definePalette("blueA", blueA),
    },
  },
});

export const { themeClass: darkClass } = createBlenxThemeFromRadix({
  colors: {
    primary: {
      base: definePalette("blue", blueDark),
      accent: definePalette("blueA", blueDarkA),
    },
    neutral: {
      base: definePalette("gray", grayDark),
      accent: definePalette("gray", grayDark),
    },
    secondary: {
      base: definePalette("gray", grayDark),
      accent: definePalette("gray", grayDark),
    },
    success: {
      base: definePalette("green", greenDark),
      accent: definePalette("greenA", greenDarkA),
    },
    warning: {
      base: definePalette("amber", amberDark),
      accent: definePalette("amberA", amberDarkA),
    },
    danger: {
      base: definePalette("red", redDark),
      accent: definePalette("redA", redDarkA),
    },
    info: {
      base: definePalette("blue", blueDark),
      accent: definePalette("blueA", blueDarkA),
    },
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
