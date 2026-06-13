import * as stylex from "@stylexjs/stylex";

export const theme = stylex.defineVars({
  primary: "",
  primarySubtle: "",
  secondary: "",

  background: "",
  backgroundSubtle: "",

  surface: "",
  surfaceSubtle: "",
  surfaceRaised: "",
  surfaceHover: "",
  surfaceOverlay: "",

  border: "",
  borderSubtle: "",
  borderStrong: "",
  borderRadius: "",

  fontSize: "",
  contentPrimary: "",
  contentSecondary: "",
  contentDisabled: "",
  contentAccent: "",
  contentOnPrimary: "",
  contentInverse: "",

  sentimentNegative: "",
  sentimentNegativeSubtle: "",
  sentimentPositive: "",
  sentimentPositiveSubtle: "",
  sentimentWarning: "",
  sentimentWarningSubtle: "",
  sentimentInfo: "",
  sentimentInfoSubtle: "",

  focusRing: "",

  shadowSm: "",
  shadowMd: "",
  shadowLg: "",
  shadowXl: "",
});

export const borderRadius = stylex.defineVars({
  xsmall: "2px",
  small: "4px",
  medium: "8px",
  large: "12px",
  xlarge: "16px",
  xxlarge: "24px",
  full: "999px",
});

export const spacing = stylex.defineVars({
  none: "0px",

  xxsmall: "4px",
  xsmall: "8px",
  small: "12px",
  medium: "16px",
  large: "24px",

  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "64px",
  huge: "80px",
  massive: "96px",
  titanic: "192px",

  "0": "0px",
  "0.5": "2px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "7": "28px",
  "8": "32px",
  "9": "36px",
  "10": "40px",
  "12": "48px",
  "16": "64px",
  "20": "80px",
  "24": "96px",
  "32": "128px",
  "40": "160px",
  "48": "192px",
});

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

const colors = {
  ink: "#243142",
  inkSoft: "#3A4A5D",
  saffron: "#C9822A",
  saffronSoft: "#E1A24E",
  paper: "#F7F4EE",
  stone: "#303846",
  stoneDark: "#232A34",
  borderLight: "#D6DDE5",
  borderDark: "#4A5563",
  textPrimaryLight: "#223042",
  textPrimaryDark: "#F2F5F8",
  textSecondaryLight: "#5A6878",
  textSecondaryDark: "#A9B4C0",
  error: "#D63031",
  errorLight: "#FF7675",
  success: "#27AE60",
  successLight: "#55EFC4",
  warning: "#F39C12",
  info: "#2980B9",
  white: "#FFFFFF",
  surfaceDark: "#2F3845",
} as const;
const darkMode = "@media (prefers-color-scheme: dark)";
export const mediaQueries = stylex.defineConsts({
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
  xxl: "@media (min-width: 1536px)",
  dark: darkMode,
});
export const accent = stylex.defineVars({
  ink: colors.ink,
  amber: colors.saffron,
  error: colors.error,
  success: colors.success,
  warning: colors.warning,
  info: colors.info,
});

// ─── Primitives ──────────────────────────────────────────────────────────────

export const primitives = stylex.create({
  trigger: {
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    font: "inherit",
    color: "inherit",
    textDecoration: "none",
    borderWidth: 0,
    WebkitTapHighlightColor: "transparent",
  },

  focusable: {
    outline: {
      default: "none",
      ":focus-visible": `2px solid ${theme.focusRing}`,
    },
  },
});

export const dataRuleQueries = stylex.defineConsts({
  dataChecked: "[data-checked]",
  dataDisabled: "[data-disabled]",
  dataFocus: "[data-focus]",
  dataPressed: "[data-pressed]",
  parentDataChecked: "[data-checked] &",
  parentDataDisabled: "[data-disabled] &",
  hasSvg: "& svg",
});

// ─── Border width ────────────────────────────────────────────────────────────
export const borderWidth = stylex.defineVars({
  hairline: "0.5px",
  thin: "1px",
  medium: "1.5px",
  thick: "2px",
  heavy: "3px",
});

// ─── Motion ──────────────────────────────────────────────────────────────────
export const duration = stylex.defineVars({
  instant: "50ms",
  fast: "100ms",
  normal: "200ms",
  slow: "300ms",
  slower: "500ms",
  lazy: "700ms",
});

export const easing = stylex.defineVars({
  linear: "linear",
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",
  enter: "cubic-bezier(0, 0, 0.2, 1)",
  exit: "cubic-bezier(0.4, 0, 1, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
});

// ─── Z-index ─────────────────────────────────────────────────────────────────
export const zIndex = stylex.defineVars({
  base: "0",
  raised: "10",
  dropdown: "100",
  sticky: "200",
  overlay: "300",
  modal: "400",
  popover: "500",
  toast: "600",
  tooltip: "700",
});

// ─── Static accent colors (don't change with theme) ──────────────────────────
export const gradient = stylex.defineVars({
  start: "#6EA6AD",
  end: "#C66555",
});

export const glassBg = stylex.defineVars({
  light: "rgba(255,255,255,0.6)",
  dark: "rgba(0,0,0,0.4)",
});

const lightValues = {
  primary: colors.ink,
  primarySubtle: colors.inkSoft,
  secondary: colors.saffron,

  background: colors.paper,
  backgroundSubtle: "#ECE8E0",

  surface: colors.white,
  surfaceSubtle: "#ECE8E0",
  surfaceRaised: "#FEFCFA",
  surfaceHover: "#E8E6DE",
  surfaceOverlay: "rgba(0,0,0,0.4)",

  border: colors.borderLight,
  borderSubtle: "#E7EBF0",
  borderStrong: "#B8C2CF",
  borderRadius: borderRadius.large,

  contentPrimary: colors.textPrimaryLight,
  contentSecondary: colors.textSecondaryLight,
  contentDisabled: "#A9B2BD",
  contentAccent: colors.ink,
  contentOnPrimary: colors.white,
  contentInverse: colors.paper,

  focusRing: "#4A90D9",

  sentimentNegative: colors.error,
  sentimentNegativeSubtle: "#FFEAEA",
  sentimentPositive: colors.success,
  sentimentPositiveSubtle: "#EAFAF1",
  sentimentWarning: colors.warning,
  sentimentWarningSubtle: "#FEF9E7",
  sentimentInfo: colors.info,
  sentimentInfoSubtle: "#EBF5FB",

  shadowSm: "0 1px 3px rgba(36,49,66,0.08), 0 1px 2px rgba(36,49,66,0.04)",
  shadowMd: "0 4px 12px rgba(36,49,66,0.10), 0 2px 4px rgba(36,49,66,0.06)",
  shadowLg: "0 8px 24px rgba(36,49,66,0.12), 0 4px 8px rgba(36,49,66,0.06)",
  shadowXl: "0 20px 48px rgba(36,49,66,0.15), 0 8px 16px rgba(36,49,66,0.08)",
};

const darkValues = {
  primary: colors.paper,
  primarySubtle: "#5A6678",
  secondary: colors.saffronSoft,

  background: colors.stone,
  backgroundSubtle: colors.stoneDark,

  surface: colors.surfaceDark,
  surfaceSubtle: colors.stoneDark,
  surfaceRaised: "#384250",
  surfaceHover: "#3D4856",
  surfaceOverlay: "rgba(0,0,0,0.6)",

  border: colors.borderDark,
  borderSubtle: "#3B4451",
  borderStrong: "#647184",
  borderRadius: borderRadius.large,

  contentPrimary: colors.textPrimaryDark,
  contentSecondary: colors.textSecondaryDark,
  contentDisabled: "#697584",
  contentAccent: colors.saffron,
  contentOnPrimary: colors.stone,
  contentInverse: colors.ink,

  focusRing: "#6DB3F2",

  sentimentNegative: colors.errorLight,
  sentimentNegativeSubtle: "#3D1A1A",
  sentimentPositive: colors.successLight,
  sentimentPositiveSubtle: "#1A3D2B",
  sentimentWarning: "#FDCB6E",
  sentimentWarningSubtle: "#3D3010",
  sentimentInfo: "#74B9FF",
  sentimentInfoSubtle: "#0D2A3D",

  shadowSm: "0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
  shadowMd: "0 4px 12px rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.2)",
  shadowLg: "0 8px 24px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.25)",
  shadowXl: "0 20px 48px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)",
};
const themed = <T>(light: T, dark: T) => ({
  default: light,
  [darkMode]: dark,
});
export const appTheme = stylex.createTheme(theme, {
  primary: themed(lightValues.primary, darkValues.primary),
  primarySubtle: themed(lightValues.primarySubtle, darkValues.primarySubtle),
  secondary: themed(lightValues.secondary, darkValues.secondary),

  background: themed(lightValues.background, darkValues.background),
  backgroundSubtle: themed(lightValues.backgroundSubtle, darkValues.backgroundSubtle),

  surface: themed(lightValues.surface, darkValues.surface),
  surfaceSubtle: themed(lightValues.surfaceSubtle, darkValues.surfaceSubtle),
  surfaceRaised: themed(lightValues.surfaceRaised, darkValues.surfaceRaised),
  surfaceHover: themed(lightValues.surfaceHover, darkValues.surfaceHover),
  surfaceOverlay: themed(lightValues.surfaceOverlay, darkValues.surfaceOverlay),

  border: themed(lightValues.border, darkValues.border),
  borderSubtle: themed(lightValues.borderSubtle, darkValues.borderSubtle),
  borderStrong: themed(lightValues.borderStrong, darkValues.borderStrong),
  borderRadius: themed(lightValues.borderRadius, darkValues.borderRadius),

  contentPrimary: themed(lightValues.contentPrimary, darkValues.contentPrimary),
  contentSecondary: themed(lightValues.contentSecondary, darkValues.contentSecondary),
  contentDisabled: themed(lightValues.contentDisabled, darkValues.contentDisabled),
  contentAccent: themed(lightValues.contentAccent, darkValues.contentAccent),
  contentOnPrimary: themed(lightValues.contentOnPrimary, darkValues.contentOnPrimary),
  contentInverse: themed(lightValues.contentInverse, darkValues.contentInverse),

  focusRing: themed(lightValues.focusRing, darkValues.focusRing),

  sentimentNegative: themed(lightValues.sentimentNegative, darkValues.sentimentNegative),
  sentimentNegativeSubtle: themed(
    lightValues.sentimentNegativeSubtle,
    darkValues.sentimentNegativeSubtle,
  ),
  sentimentPositive: themed(lightValues.sentimentPositive, darkValues.sentimentPositive),
  sentimentPositiveSubtle: themed(
    lightValues.sentimentPositiveSubtle,
    darkValues.sentimentPositiveSubtle,
  ),
  sentimentWarning: themed(lightValues.sentimentWarning, darkValues.sentimentWarning),
  sentimentWarningSubtle: themed(
    lightValues.sentimentWarningSubtle,
    darkValues.sentimentWarningSubtle,
  ),
  sentimentInfo: themed(lightValues.sentimentInfo, darkValues.sentimentInfo),
  sentimentInfoSubtle: themed(lightValues.sentimentInfoSubtle, darkValues.sentimentInfoSubtle),

  shadowSm: themed(lightValues.shadowSm, darkValues.shadowSm),
  shadowMd: themed(lightValues.shadowMd, darkValues.shadowMd),
  shadowLg: themed(lightValues.shadowLg, darkValues.shadowLg),
  shadowXl: themed(lightValues.shadowXl, darkValues.shadowXl),
});
