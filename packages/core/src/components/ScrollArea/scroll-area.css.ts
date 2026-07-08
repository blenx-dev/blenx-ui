import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = baseSprinkles({
  height: "full",
  width: "full",
  minHeight: "0",
});

export const viewport = style([
  baseSprinkles({
    height: "full",
    radius: "default",
    minWidth: "0",
    outline: "none",
  }),
  style({
    overscrollBehaviorY: "contain",
    overscrollBehaviorX: "contain",
    selectors: {
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
      },
    },
  }),
]);

export const viewportFade = style({
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)",
  maskImage:
    "linear-gradient(to bottom, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)",
});

export const viewportGutter = baseSprinkles({
  paddingRight: "sm",
  paddingBottom: "sm",
});

export const contentFill = baseSprinkles({
  height: "full",
  width: "full",
});

export const scrollbar = style([
  baseSprinkles({
    display: "flex",
    margin: "xs",
    opacity: "0",
  }),
  style({
    transitionProperty: "opacity",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease",
    selectors: {
      "&[data-hovering] &[data-scrolling]": {
        opacity: 1,
        transitionDelay: "0ms",
        transitionDuration: "100ms",
      },
    },
  }),
]);

export const scrollbarHorizontal = style([
  baseSprinkles({
    direction: "row",
  }),
  style({
    height: "6px",
  }),
]);

export const scrollbarVertical = style({
  width: "6px",
});

export const thumb = style([
  baseSprinkles({
    position: "relative",
    grow: 1,
    radius: "full",
    backgroundColor: "subtle",
  }),
  style({
    transitionProperty: "background-color, opacity",
    transitionDuration: "200ms",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.border.default,
      },
    },
  }),
]);
