import type { ColorRoleName } from "../contract.css";

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
