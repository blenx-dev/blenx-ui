import { themeContract } from "#theme/contract.css.js";
import { style } from "@vanilla-extract/css";

export const baseBox = style({
  borderRadius: themeContract.borderRadius,
  minWidth: 0,
});
