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
      accent: primary.text.default,
      disabled: neutral.border.default,
      inverse: neutral.solidFg,
    },
    border: {
      default: neutral.border.default,
      subtle: neutral.bg.active,
      strong: neutral.border.hover,
    },
    interactive: {
      primary: {
        default: primary.solid.default,
        hover: primary.solid.hover,
        active: primary.solid.active,
      },
      primaryFg: primary.solidFg,
      primaryBg: {
        default: primary.bg.default,
        hover: primary.bg.hover,
        active: primary.bg.active,
      },
      secondary: {
        default: secondary.solid.default,
        hover: secondary.solid.hover,
        active: secondary.solid.active,
      },
      secondaryFg: secondary.solidFg,
      secondaryBg: {
        default: secondary.bg.default,
        hover: secondary.bg.hover,
        active: secondary.bg.active,
      },
      neutral: {
        default: neutral.solid.default,
        hover: neutral.solid.hover,
        active: neutral.solid.active,
      },
      neutralFg: neutral.solidFg,
    },
    status: {
      success: {
        default: success.solid.default,
        hover: success.solid.hover,
        active: success.solid.active,
      },
      successBg: success.bg.default,
      warning: {
        default: warning.solid.default,
        hover: warning.solid.hover,
        active: warning.solid.active,
      },
      warningBg: warning.bg.default,
      danger: {
        default: danger.solid.default,
        hover: danger.solid.hover,
        active: danger.solid.active,
      },
      dangerBg: danger.bg.default,
      info: {
        default: info.solid.default,
        hover: info.solid.hover,
        active: info.solid.active,
      },
      infoBg: info.bg.default,
    },
    focus: {
      ring: primary.focus,
    },
  };
}
