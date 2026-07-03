import type { PaletteRoles } from "../palettes/types";
import type { SemanticTokens } from "./types";

type BlenxThemeColors = {
  primary: PaletteRoles;
  secondary: PaletteRoles;
  success: PaletteRoles;
  warning: PaletteRoles;
  info: PaletteRoles;
  danger: PaletteRoles;
  neutral: PaletteRoles;
};

function buildColorRole(role: PaletteRoles) {
  return {
    default: role.solid.default,
    hover: role.solid.hover,
    active: role.solid.active,
    bg: role.bg.default,
    bgHover: role.bg.hover,
    bgActive: role.bg.active,
    fg: role.solidFg,
    text: role.text.default,
    textActive: role.text.hover,
    border: role.border.default,
  };
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
      default: neutral.bg.default,
      subtle: neutral.bg.hover, // one step up from default, reusing the bg state ramp
    },
    surface: {
      default: neutral.bg.default,
      raised: neutral.bg.active, // next step up in the bg ramp
      overlay: "rgba(0, 0, 0, 0.5)",
      floating: neutral.border.default, // distinct from raised; adjust if a dedicated step is added later
    },
    text: {
      primary: neutral.text.hover,
      secondary: neutral.text.default, // one step lighter than primary text
      disabled: neutral.border.default,
      inverse: neutral.solidFg,
    },
    border: {
      default: neutral.border.default,
      subtle: neutral.bg.active,
      strong: neutral.border.hover,
    },
    color: {
      primary: buildColorRole(primary),
      secondary: buildColorRole(secondary),
      neutral: buildColorRole(neutral),
      success: buildColorRole(success),
      warning: buildColorRole(warning),
      danger: buildColorRole(danger),
      info: buildColorRole(info),
    },
    focus: {
      ring: primary.focus,
    },
  };
}
