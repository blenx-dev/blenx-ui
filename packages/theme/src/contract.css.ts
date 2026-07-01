import { createThemeContract } from "@vanilla-extract/css";
// Shared shape — mirrors PaletteRoles' ColorState from Layer 3
// so state data isn't lost as it flows up through the layers.
export interface ColorStateVars {
  default: string | null;
  hover: string | null;
  active: string | null;
}

export const semanticVars = createThemeContract({
  background: {
    default: null,
    subtle: null,
  },
  surface: {
    default: null,
    raised: null,
    overlay: null,
    floating: null,
  },
  text: {
    primary: null,
    secondary: null,
    accent: null,
    disabled: null,
    inverse: null,
  },
  border: {
    default: null,
    subtle: null,
    strong: null,
  },
  interactive: {
    primary: {
      default: null,
      hover: null,
      active: null,
    },
    primaryFg: null, // foreground rarely needs state variants
    primaryBg: {
      // soft/tinted variant background (e.g. soft button)
      default: null,
      hover: null,
      active: null,
    },
    secondary: {
      default: null,
      hover: null,
      active: null,
    },
    secondaryFg: null,
    secondaryBg: {
      default: null,
      hover: null,
      active: null,
    },
    neutral: {
      default: null,
      hover: null,
      active: null,
    },
    neutralFg: null,
  },
  status: {
    success: {
      default: null,
      hover: null,
      active: null,
    },
    successBg: null,
    warning: {
      default: null,
      hover: null,
      active: null,
    },
    warningBg: null,
    danger: {
      default: null,
      hover: null,
      active: null,
    },
    dangerBg: null,
    info: {
      default: null,
      hover: null,
      active: null,
    },
    infoBg: null,
  },
  focus: {
    ring: null,
  },
});

export const tokenVars = createThemeContract({
  font: {
    sans: null,
    body: null,
    mono: null,
  },
  shadow: { sm: null, md: null, lg: null, xl: null },
  fontSize: {
    xxs: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    xxxl: null,
    display: null,
    displayLg: null,
    hero: null,
  },
  fontWeight: {
    regular: null,
    medium: null,
    semibold: null,
    bold: null,
    extrabold: null,
  },
  lineHeight: {
    tight: null,
    snug: null,
    normal: null,
    relaxed: null,
    loose: null,
  },
  letterSpacing: {
    tight: null,
    snug: null,
    normal: null,
    wide: null,
    wider: null,
    widest: null,
  },
  spacing: {
    none: null,
    xxs: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    xxxl: null,
    huge: null,
    massive: null,
    titanic: null,
    "0": null,
    "0.5": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    "10": null,
    "12": null,
    "16": null,
    "20": null,
    "24": null,
    "32": null,
    "40": null,
    "48": null,
  },
  borderRadius: {
    xxs: null,
    xxxl: null,
    default: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    full: null,
  },
  borderWidth: {
    hairline: null,
    thin: null,
    medium: null,
    thick: null,
    heavy: null,
  },
  duration: {
    instant: null,
    fast: null,
    normal: null,
    slow: null,
    slower: null,
    lazy: null,
  },
  easing: {
    linear: null,
    standard: null,
    enter: null,
    exit: null,
    spring: null,
    bounce: null,
  },
});
