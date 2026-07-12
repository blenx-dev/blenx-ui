import { style } from "@vanilla-extract/css";
import { semanticVars } from "../../theme/contract.css";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    position: "relative",
    display: "inline-flex",
    align: "center",
    justify: "center",
    shrink: 0,
    radius: "full",
    backgroundColor: "canvas",
    borderWidth: "thin",
    borderStyle: "solid",
    outline: "none",
    borderColor: "default",
  }),
  style({
    width: 18,
    height: 18,
    transitionProperty: "box-shadow, background-color, border-color",
    transitionDuration: "150ms",
    selectors: {
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
      },
      "&[data-checked]": {
        borderColor: semanticVars.color.primary.default,
      },
    },
  }),
]);

export const rootDisabled = baseSprinkles({ cursor: "not-allowed", opacity: "0.64" });

export const group = baseSprinkles({
  display: "flex",
  direction: "column",
  gap: "sm",
});

export const indicator = style([
  baseSprinkles({
    display: "none",
    position: "absolute",
    align: "center",
    justify: "center",
    radius: "full",
    top: "-1",
    left: "-1",
    right: "-1",
    bottom: "-1",
  }),
]);

export const indicatorChecked = baseSprinkles({
  display: "flex",
  backgroundColor: "primary",
});

export const dot = style([
  baseSprinkles({
    radius: "full",
    backgroundColor: "primary",
  }),
  style({
    width: 8,
    height: 8,
  }),
]);
