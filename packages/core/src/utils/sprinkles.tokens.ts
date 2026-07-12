import { semanticVars, tokenVars } from "../../theme/contract.css";
import { paletteVars } from "./pallete-styles.css";

export const spacing = {
  none: "0",
  xxs: tokenVars.spacing.xxs,
  xs: tokenVars.spacing.xs,
  sm: tokenVars.spacing.sm,
  md: tokenVars.spacing.md,
  lg: tokenVars.spacing.lg,
  xl: tokenVars.spacing.xl,
  huge: tokenVars.spacing.huge,
  xxl: tokenVars.spacing.xxl,
  xxxl: tokenVars.spacing.xxxl,
  massive: tokenVars.spacing.massive,
  "0": tokenVars.spacing["0"],
  "3": tokenVars.spacing["3"],
  "4": tokenVars.spacing["4"],
  "6": tokenVars.spacing["6"],
  "8": tokenVars.spacing["8"],
  "10": tokenVars.spacing["10"],
  "40": tokenVars.spacing["40"],
  "48": tokenVars.spacing["48"],
};
export const spacingValues = {
  ...spacing,
  auto: "auto",
};
export const positionValues = {
  ...spacing,
  "-1": -1,
};
export const containerWidths = {
  xxs: "240px",
  xs: "320px",
  sm: "480px",
  md: "640px",
  lg: "768px",
  xl: "1024px",
  xxl: "1280px",
  xxxl: "1440px",
  480: "480px",
  640: "640px",
  400: "400px",
  560: "560px",
  full: "100%",
  screen: "100%",
  viewport: "90svw",
  maxViewport: "98svw",
};

export const colors = {
  primary: semanticVars.text.primary,
  default: paletteVars.fg,
  transparent: "transparent",
  secondary: semanticVars.text.secondary,
  disabled: semanticVars.text.disabled,
  inverse: semanticVars.text.inverse,
  link: semanticVars.color.primary.default,
  danger: semanticVars.color.danger.default,
  success: semanticVars.color.success.default,
  warning: semanticVars.color.warning.default,
  info: semanticVars.color.info.default,
  inherit: "inherit",
} as const;
export const backgroundColors = {
  primary: semanticVars.color.primary.bg,
  secondary: semanticVars.color.secondary.bg,
  surface: semanticVars.surface.default,
  canvas: semanticVars.background.default,
  subtle: semanticVars.background.subtle,
  default: paletteVars.bg,
  inherit: "inherit",
  transparent: "transparent",
  danger: semanticVars.color.danger.bg,
  success: semanticVars.color.success.bg,
  warning: semanticVars.color.warning.bg,
  info: semanticVars.color.info.bg,
};
export const borderColors = {
  inherit: "inherit",
  default: paletteVars.border,
  subtle: semanticVars.border.subtle,
  strong: semanticVars.border.strong,
  transparent: "transparent",
  danger: semanticVars.color.danger.border,
  success: semanticVars.color.success.border,
  warning: semanticVars.color.warning.border,
  info: semanticVars.color.info.border,
  primary: semanticVars.color.primary.border,
  secondary: semanticVars.color.secondary.border,
  neutral: semanticVars.color.neutral.border,
};
export const responsiveConditions = {
  base: {},
  md: { "@media": "screen and (min-width: 768px)" },
  lg: { "@media": "screen and (min-width: 1280px)" },
} as const;
