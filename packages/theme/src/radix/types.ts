import type { PaletteScale } from "../palettes/types";
import type { DeepPartial, SemanticTokens } from "../semantic/types";

export interface RadixColorPair {
  base: PaletteScale;
  accent: PaletteScale;
}

export interface RadixThemeColors {
  primary: RadixColorPair;
  secondary: RadixColorPair;
  neutral: RadixColorPair;
  success: RadixColorPair;
  warning: RadixColorPair;
  danger: RadixColorPair;
  info: RadixColorPair;
}

export interface RadixThemeConfig {
  colors: RadixThemeColors;
  semantic?: DeepPartial<SemanticTokens>;
  darkSemantic?: DeepPartial<SemanticTokens>;
}
