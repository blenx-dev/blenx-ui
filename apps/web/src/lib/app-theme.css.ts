import { createTheme, globalStyle } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { createBlenxTheme, mergeWithDefaultTokens, genPaletteFromRadix } from "@blenx-dev/theme";
import {
  tomato,
  tomatoA,
  tomatoDark,
  tomatoDarkA,
  orange,
  orangeA,
  orangeDark,
  orangeDarkA,
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

const tokens = mergeWithDefaultTokens({
  font: {
    sans: '"DM Sans", system-ui, -apple-system, sans-serif',
    body: '"DM Sans", system-ui, sans-serif',
    mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
  },
});
export const tokenThemeClass = createTheme(tokenVars, tokens);

export const { themeClass: lightClass } = createBlenxTheme({
  colors: {
    primary: {
      base: genPaletteFromRadix("tomato", tomato),
      accent: genPaletteFromRadix("tomatoA", tomatoA),
    },
    neutral: {
      base: genPaletteFromRadix("gray", gray),
      accent: genPaletteFromRadix("gray", gray),
    },
    secondary: {
      base: genPaletteFromRadix("gray", gray),
      accent: genPaletteFromRadix("gray", gray),
    },
    success: {
      base: genPaletteFromRadix("green", green),
      accent: genPaletteFromRadix("greenA", greenA),
    },
    warning: {
      base: genPaletteFromRadix("orange", orange),
      accent: genPaletteFromRadix("orangeA", orangeA),
    },
    danger: {
      base: genPaletteFromRadix("red", red),
      accent: genPaletteFromRadix("redA", redA),
    },
    info: {
      base: genPaletteFromRadix("tomato", tomato),
      accent: genPaletteFromRadix("tomatoA", tomatoA),
    },
  },
});

export const { themeClass: darkClass } = createBlenxTheme({
  colors: {
    primary: {
      base: genPaletteFromRadix("tomato", tomatoDark),
      accent: genPaletteFromRadix("tomatoA", tomatoDarkA),
    },
    neutral: {
      base: genPaletteFromRadix("gray", grayDark),
      accent: genPaletteFromRadix("gray", grayDark),
    },
    secondary: {
      base: genPaletteFromRadix("gray", grayDark),
      accent: genPaletteFromRadix("gray", grayDark),
    },
    success: {
      base: genPaletteFromRadix("green", greenDark),
      accent: genPaletteFromRadix("greenA", greenDarkA),
    },
    warning: {
      base: genPaletteFromRadix("orange", orangeDark),
      accent: genPaletteFromRadix("orangeA", orangeDarkA),
    },
    danger: {
      base: genPaletteFromRadix("red", redDark),
      accent: genPaletteFromRadix("redA", redDarkA),
    },
    info: {
      base: genPaletteFromRadix("tomato", tomatoDark),
      accent: genPaletteFromRadix("tomatoA", tomatoDarkA),
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
