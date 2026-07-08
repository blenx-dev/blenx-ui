import { createTheme } from "@vanilla-extract/css";
import { semanticVars } from "./contract.css";
import { blendScale, resolveToSemanticTokens } from "./helpers";
import type { ThemeConfig } from "./theme.types";

import { style } from "@vanilla-extract/css";
export { tokenVarsDefaults } from "./tokens-defaults";

export const mediaQueries = {
  sm: "screen and (min-width: 640px)",
  md: "screen and (min-width: 768px)",
  lg: "screen and (min-width: 1024px)",
  xl: "screen and (min-width: 1280px)",
  xxl: "screen and (min-width: 1536px)",
  dark: "(prefers-color-scheme: dark)",
} as const;

export const primitives = {
  trigger: style({
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    font: "inherit",
    color: "inherit",
    textDecoration: "none",
    borderWidth: 0,
    WebkitTapHighlightColor: "transparent",
  }),
  focusable: style({
    outline: "none",
    selectors: {
      "&:focus-visible": {
        outline: `2px solid ${semanticVars.focus.ring}`,
      },
    },
  }),
};

export const zIndex = {
  base: 0,
  raised: 100,
  floating: 1000,
  sticky: 1100,
  overlay: 1200,
  popover: 1300,
  modal: 1400,
  toast: 1500,
  tooltip: 1600,
} as const;

export function createBlenxTheme(config: ThemeConfig) {
  const resolvedTheme = resolveToSemanticTokens({
    primary: blendScale(config.colors.primary.base, config.colors.primary.accent),
    secondary: blendScale(config.colors.secondary.base, config.colors.secondary.accent),
    info: blendScale(config.colors.info.base, config.colors.info.accent),
    success: blendScale(config.colors.success.base, config.colors.success.accent),
    danger: blendScale(config.colors.danger.base, config.colors.danger.accent),
    neutral: blendScale(config.colors.neutral.base, config.colors.neutral.accent, "neutral"),
    warning: blendScale(config.colors.warning.base, config.colors.warning.accent),
  });

  const themeClass = createTheme(semanticVars, resolvedTheme);

  return {
    themeClass,
  };
}
