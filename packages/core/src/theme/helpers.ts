import type { PaletteScale, SemanticTokens } from "./theme.types";
type PaletteKind = "colorful" | "neutral";

export function blendScale(
  base: PaletteScale,
  alpha: PaletteScale,
  kind: PaletteKind = "colorful",
): PaletteRoles {
  const borderStep = kind === "neutral" ? 6 : 7;
  return {
    // bg states pull from the alpha scale — alpha steps composite correctly
    // over arbitrary underlying surfaces (nested cards, dark mode auto-adapt).
    // The solid/default states use the opaque base scale since filled elements
    // don't need to blend with what's beneath them.
    default: base[9],
    hover: base[10],
    active: base[10],
    bg: alpha[3],
    bgHover: alpha[4],
    bgActive: alpha[5],
    fg: base[12],
    text: base[11],
    textActive: base[12],
    border: base[borderStep],
    focus: base[8],
  };
}

export function genPaletteFromRadix<T extends string>(
  prefix: T,
  colors: Record<`${T}${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`, string>,
): PaletteScale {
  return {
    1: colors[`${prefix}1`],
    2: colors[`${prefix}2`],
    3: colors[`${prefix}3`],
    4: colors[`${prefix}4`],
    5: colors[`${prefix}5`],
    6: colors[`${prefix}6`],
    7: colors[`${prefix}7`],
    8: colors[`${prefix}8`],
    9: colors[`${prefix}9`],
    10: colors[`${prefix}10`],
    11: colors[`${prefix}11`],
    12: colors[`${prefix}12`],
  };
}
import type { PaletteRoles } from "./theme.types";

type BlenxThemeColors = {
  primary: PaletteRoles;
  secondary: PaletteRoles;
  success: PaletteRoles;
  warning: PaletteRoles;
  info: PaletteRoles;
  danger: PaletteRoles;
  neutral: PaletteRoles;
};

function toColorRole({ focus: _focus, ...role }: PaletteRoles) {
  return role;
}

export function resolveToSemanticTokens({
  primary,
  secondary,
  neutral,
  info,
  success,
  warning,
  danger,
}: BlenxThemeColors): SemanticTokens {
  return {
    background: {
      default: neutral.bg,
      subtle: neutral.bgHover,
    },
    surface: {
      default: neutral.bg,
      raised: neutral.bgActive,
      overlay: "rgba(0, 0, 0, 0.5)",
      floating: neutral.border,
    },
    text: {
      primary: neutral.textActive,
      secondary: neutral.text,
      disabled: neutral.border,
      inverse: neutral.fg,
    },
    border: {
      default: neutral.border,
      subtle: neutral.bgActive,
      strong: neutral.textActive,
    },
    color: {
      primary: toColorRole(primary),
      secondary: toColorRole(secondary),
      neutral: toColorRole(neutral),
      success: toColorRole(success),
      warning: toColorRole(warning),
      danger: toColorRole(danger),
      info: toColorRole(info),
    },
    focus: {
      ring: primary.focus,
    },
  };
}
