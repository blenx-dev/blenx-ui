import * as stylex from "@stylexjs/stylex";

export const fonts = stylex.defineVars({
  sans: '"DM Sans", system-ui, -apple-system, sans-serif',
  display: '"DM Sans", system-ui, sans-serif',
  heading: '"DM Sans", system-ui, sans-serif',
  body: '"DM Sans", system-ui, sans-serif',
  label: '"DM Sans", system-ui, sans-serif',
  mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
});

export const fontSize = stylex.defineVars({
  xxsmall: "10px",
  xsmall: "12px",
  small: "14px",
  medium: "16px",
  large: "18px",
  xlarge: "20px",
  xxlarge: "24px",
  xxxlarge: "30px",
  display: "36px",
  displayLg: "48px",
  hero: "60px",
});

export const fontWeight = stylex.defineVars({
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
});

export const lineHeight = stylex.defineVars({
  tight: "1.2",
  snug: "1.35",
  normal: "1.5",
  relaxed: "1.625",
  loose: "1.8",
});

export const letterSpacing = stylex.defineVars({
  tight: "-0.04em",
  snug: "-0.02em",
  normal: "0",
  wide: "0.02em",
  wider: "0.05em",
  widest: "0.1em",
});
