import { style } from "@vanilla-extract/css";
import { semanticVars } from "../../theme/contract.css";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = baseSprinkles({
  display: "flex",
  align: "center",
  color: "secondary",
  gap: "xs",
  fontSize: "sm",
});

export const list = style([
  baseSprinkles({
    display: "flex",
    flexWrap: "wrap",
    align: "center",
    gap: "6",
    fontSize: "md",
    color: "secondary",
  }),
  style({
    "@media": {
      "screen and (min-width: 768px)": {
        gap: 10,
      },
    },
  }),
]);

export const item = baseSprinkles({
  display: "inline-flex",
  align: "center",
  gap: "6",
});

export const link = style([
  baseSprinkles({
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  }),
  style({
    transitionProperty: "color",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease",
    selectors: {
      "&:hover": {
        color: semanticVars.text.primary,
      },
    },
  }),
]);

export const page = style([
  baseSprinkles({
    color: "primary",
    fontWeight: "semibold",
  }),
  style({
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  }),
]);

export const separator = baseSprinkles({
  display: "inline-flex",
  align: "center",
});

export const ellipsis = baseSprinkles({
  display: "inline-flex",
  align: "center",
});

export const srOnly = style([
  baseSprinkles({
    borderWidth: "none",
    whiteSpace: "nowrap",
    position: "absolute",
    padding: "0",
    overflow: "hidden",
  }),
  style({
    width: 1,
    height: 1,
    margin: -1,
    clip: "rect(0, 0, 0, 0)",
  }),
]);
