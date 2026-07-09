import { createVar, style } from "@vanilla-extract/css";
import { baseSprinkles } from "../../utils/sprinkles";
import { paletteVars } from "../../utils/pallete-styles.css";

export const trayRadiusVar = createVar();
export const trayPaddingVar = createVar();
export const itemGapVar = createVar();

export const groupBase = style([
  baseSprinkles({
    display: "inline-flex",
    position: "relative",
  }),
  style({
    gap: itemGapVar,
  }),
]);

export const groupDefault = style([
  baseSprinkles({
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  style({
    padding: trayPaddingVar,
    borderRadius: trayRadiusVar,
    backgroundColor: paletteVars.activeBg,
    borderColor: paletteVars.border,
  }),
]);

export const trayItem = baseSprinkles({
  backgroundColor: "transparent",
  borderColor: "transparent",
});

export const outlineGroupItem = baseSprinkles({
  backgroundColor: "subtle",
});

export const groupHorizontal = baseSprinkles({
  direction: "row",
  align: "center",
});

export const groupVertical = baseSprinkles({
  direction: "column",
  align: "stretch",
});

export const outlineItemHorizontal = style({
  selectors: {
    "&:first-child": {
      borderStartStartRadius: trayRadiusVar,
      borderEndStartRadius: trayRadiusVar,
    },
    "&:last-child": {
      borderStartEndRadius: trayRadiusVar,
      borderEndEndRadius: trayRadiusVar,
    },
    "&:not(:first-child)": {
      borderInlineStartWidth: 0,
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
    },
    "&:not(:last-child)": {
      borderInlineEndWidth: 0,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
    },
    "&:focus-visible": {
      zIndex: 10,
    },
  },
});

export const outlineItemVertical = style({
  selectors: {
    "&:first-child": {
      borderStartStartRadius: trayRadiusVar,
      borderStartEndRadius: trayRadiusVar,
    },
    "&:last-child": {
      borderEndStartRadius: trayRadiusVar,
      borderEndEndRadius: trayRadiusVar,
    },
    "&:not(:first-child)": {
      borderBlockStartWidth: 0,
      borderStartStartRadius: 0,
      borderStartEndRadius: 0,
    },
    "&:not(:last-child)": {
      borderBlockEndWidth: 0,
      borderEndStartRadius: 0,
      borderEndEndRadius: 0,
    },
    "&:focus-visible": {
      zIndex: 10,
    },
  },
});
