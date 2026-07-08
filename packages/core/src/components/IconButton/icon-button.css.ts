import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";

export const base = style({
  width: "44px",
  height: "44px",
  maxWidth: "44px",
  minWidth: "44px",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
    },
  },
});
