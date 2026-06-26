import { themeContract } from "@blenx-dev/theme/contract.css";
import { style } from "@vanilla-extract/css";

export const baseBox = style({
  borderRadius: themeContract.borderRadius,
  minWidth: 0,
});
