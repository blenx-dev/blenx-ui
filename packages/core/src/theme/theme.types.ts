import type { ColorRoleName } from "./contract.css";

export interface PaletteScale {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
}
export interface ColorState {
  default: string;
  hover: string;
  active: string;
  disabled?: string;
}

export interface PaletteRoles {
  default: string;
  hover: string;
  active: string;
  bg: string;
  bgHover: string;
  bgActive: string;
  fg: string;
  text: string;
  textActive: string;
  border: string;
  focus: string;
}

export interface ColorPair {
  base: PaletteScale;
  accent: PaletteScale;
}

export interface ThemeColors {
  primary: ColorPair;
  secondary: ColorPair;
  neutral: ColorPair;
  success: ColorPair;
  warning: ColorPair;
  danger: ColorPair;
  info: ColorPair;
  mono?: ColorPair;
}

export interface ThemeConfig {
  colors: ThemeColors;
  semantic?: DeepPartial<SemanticTokens>;
  darkSemantic?: DeepPartial<SemanticTokens>;
}
type ColorRoleTokens = {
  default: string;
  hover: string;
  active: string;
  bg: string;
  bgHover: string;
  bgActive: string;
  fg: string;
  text: string;
  textActive: string;
  border: string;
};

export interface SemanticTokens {
  background: {
    default: string;
    subtle: string;
  };
  surface: {
    default: string;
    raised: string;
    overlay: string;
    floating: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
  };
  border: {
    default: string;
    subtle: string;
    strong: string;
  };

  focus: {
    ring: string;
  };
  color: Record<ColorRoleName, ColorRoleTokens>;
}

export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
