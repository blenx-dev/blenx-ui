import { style } from "@vanilla-extract/css";
import { baseSprinkles } from "../../utils/sprinkles";

export const backdrop = style([
  baseSprinkles({
    position: "fixed",
    zIndex: "modal",
  }),
  style({
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
  }),
]);

export const positioner = baseSprinkles({
  zIndex: "popover",
  outline: "none",
});

export const popup = style([
  baseSprinkles({
    padding: "sm",
    backgroundColor: "surface",
    radius: "lg",
    borderWidth: "thin",
    borderStyle: "solid",
    boxShadow: "lg",
    outline: "none",
    borderColor: "default",
  }),
  style({
    minWidth: 160,
    width: "max(var(--anchor-width), 240px)",
    maxWidth: "calc(100vw - 16px)",
    transformOrigin: "var(--transform-origin)",
    transitionProperty: "opacity, scale",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease",
    selectors: {
      "&[data-starting-style]": {
        opacity: 0,
        scale: 0.95,
      },
      "&[data-ending-style]": {
        opacity: 0,
        scale: 0.95,
      },
    },
    "@media": {
      "(prefers-reduced-motion: reduce)": {
        transitionProperty: "none",
        transitionDuration: "0ms",
      },
    },
  }),
]);

export const arrow = style([
  baseSprinkles({ position: "absolute" }),
  style({ width: 10, height: 10 }),
]);

export const arrowFill = style([
  baseSprinkles({
    backgroundColor: "surface",
    width: "full",
    height: "full",
    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: "default",
    borderRadius: "xxs",
  }),
  style({
    transform: "rotate(45deg)",
  }),
]);

export const title = style([
  baseSprinkles({
    fontSize: "md",
    color: "primary",
    fontWeight: "semibold",
    paddingBottom: "xs",
  }),
  style({
    margin: 0,
  }),
]);

export const description = style([
  baseSprinkles({
    fontSize: "sm",
    color: "secondary",
    paddingBottom: "xs",
  }),
  style({
    margin: 0,
  }),
]);
