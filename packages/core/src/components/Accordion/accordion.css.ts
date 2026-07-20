import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "../../theme/contract.css";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = baseSprinkles({
  display: "flex",
  direction: "column",
  width: "full",
});

export const rootVertical = style([
  baseSprinkles({
    direction: "column",
  }),
  {
    selectors: {
      "&:first-child": {
        borderTopWidth: "thin",
        borderTopStyle: "solid",
        borderTopColor: semanticVars.border.default,
      },
    },
  },
]);

export const item = baseSprinkles({
  borderBottomWidth: "thin",
  borderBottomStyle: "solid",
  borderBottomColor: "default",
});

export const itemDisabled = baseSprinkles({
  opacity: "0.5",
});

export const trigger = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    width: "full",
    padding: "sm",
    fontSize: "sm",
    color: "primary",
    borderRadius: "none",
    lineHeight: "normal",
    fontWeight: "medium",
    borderWidth: "thin",
    backgroundColor: "transparent",
    cursor: "pointer",
    appearance: "none",
    fontFamily: "inherit",
    textAlign: "left",
    outline: "none",
  }),
  style({
    paddingInlineEnd: tokenVars.spacing.sm,
    border: "none",
    WebkitTapHighlightColor: "transparent",
    outlineOffset: "2px",
    transitionProperty: "background-color",
    transitionDuration: tokenVars.duration.fast,
    transitionTimingFunction: tokenVars.easing.standard,
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
      "&[data-panel-open]": {
        backgroundColor: semanticVars.background.subtle,
      },
      "&:focus-visible": {
        outline: `2px solid ${semanticVars.focus.ring}`,
        outlineOffset: "2px",
      },
      // // First accordion item
      // [`${item}:first-child &`]: {
      //   borderTopLeftRadius: tokenVars.borderRadius.md,
      //   borderTopRightRadius: tokenVars.borderRadius.md,
      // },

      // // Last accordion item
      // [`${item}:last-child &`]: {
      //   borderBottomLeftRadius: tokenVars.borderRadius.md,
      //   borderBottomRightRadius: tokenVars.borderRadius.md,
      // },
    },
  }),
]);

export const triggerIcon = style([
  baseSprinkles({
    color: "secondary",
    shrink: 0,
  }),
  style({
    transform: "rotate(0deg)",
    transitionProperty: "transform",
    transitionDuration: tokenVars.duration.normal,
    transitionTimingFunction: tokenVars.easing.standard,
    selectors: {
      "[data-panel-open] &": {
        transform: "rotate(180deg)",
      },
    },
  }),
]);

export const panel = style([
  baseSprinkles({
    overflow: "hidden",
    padding: "sm",
  }),
  style({
    transitionProperty: "grid-template-rows, opacity",
    transitionDuration: tokenVars.duration.normal,
    transitionTimingFunction: tokenVars.easing.standard,
  }),
]);
