type SizeVars = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export type TokenVars = {
  font: Record<"sans" | "body" | "mono", string>;
  shadow: Record<"sm" | "md" | "lg" | "xl", string>;
  fontSize: Record<SizeVars | "display" | "displayLg" | "hero", string>;
  fontWeight: Record<"regular" | "medium" | "semibold" | "bold" | "extrabold", string>;
  lineHeight: Record<"tight" | "snug" | "normal" | "relaxed" | "loose", string>;
  letterSpacing: Record<"tight" | "snug" | "normal" | "wide" | "wider" | "widest", string>;
  spacing: Record<
    | SizeVars
    | "none"
    | "huge"
    | "massive"
    | "titanic"
    | "0"
    | "0.5"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "12"
    | "16"
    | "20"
    | "24"
    | "32"
    | "40"
    | "48",
    string
  >;
  borderRadius: Record<"default" | SizeVars | "full", string>;
  borderWidth: Record<"hairline" | "thin" | "medium" | "thick" | "heavy", string>;
  duration: Record<"instant" | "fast" | "normal" | "slow" | "slower" | "lazy", string>;
  easing: Record<"linear" | "standard" | "enter" | "exit" | "spring" | "bounce", string>;
};

export const tokenVarsDefaults: TokenVars = {
  font: {
    sans: "system-ui, -apple-system, sans-serif",
    body: "system-ui, sans-serif",
    mono: "ui-monospace, SFMono-Regular, monospace",
  },
  fontSize: {
    xxs: "10px",
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "30px",
    display: "36px",
    displayLg: "48px",
    hero: "60px",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  lineHeight: {
    tight: "1.2",
    snug: "1.35",
    normal: "1.5",
    relaxed: "1.625",
    loose: "1.8",
  },
  letterSpacing: {
    tight: "-0.04em",
    snug: "-0.02em",
    normal: "0",
    wide: "0.02em",
    wider: "0.05em",
    widest: "0.1em",
  },
  spacing: {
    none: "0px",
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "64px",
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
  },
  borderRadius: {
    default: "12px",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    xxl: "24px",
    xxs: "1px",
    xxxl: "32px",
    full: "999px",
  },
  borderWidth: {
    hairline: "0.5px",
    thin: "1px",
    medium: "1.5px",
    thick: "2px",
    heavy: "3px",
  },
  duration: {
    instant: "50ms",
    fast: "100ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
    lazy: "700ms",
  },
  easing: {
    linear: "linear",
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    enter: "cubic-bezier(0, 0, 0.2, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  },
  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
  },
};
// Source - https://stackoverflow.com/a/47914631
// Posted by CRice
// Retrieved 2026-06-30, License - CC BY-SA 3.0

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export function mergeWithDefaultTokens(props?: RecursivePartial<TokenVars>): TokenVars {
  if (!props) return tokenVarsDefaults;
  return {
    ...tokenVarsDefaults,
    ...props,
    font: { ...tokenVarsDefaults.font, ...props.font },
    fontSize: { ...tokenVarsDefaults.fontSize, ...props.fontSize },
    fontWeight: { ...tokenVarsDefaults.fontWeight, ...props.fontWeight },
    lineHeight: { ...tokenVarsDefaults.lineHeight, ...props.lineHeight },
    letterSpacing: { ...tokenVarsDefaults.letterSpacing, ...props.letterSpacing },
    spacing: { ...tokenVarsDefaults.spacing, ...props.spacing },
    borderRadius: { ...tokenVarsDefaults.borderRadius, ...props.borderRadius },
    borderWidth: { ...tokenVarsDefaults.borderWidth, ...props.borderWidth },
    duration: { ...tokenVarsDefaults.duration, ...props.duration },
    easing: { ...tokenVarsDefaults.easing, ...props.easing },
    shadow: { ...tokenVarsDefaults.shadow, ...props.shadow },
  };
}
