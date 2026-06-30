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
  bg: ColorState;
  border: ColorState;
  text: ColorState;
  solid: ColorState;
  solidFg: string; // foreground rarely needs its own state machine
  focus: string;
}
