import { style } from "@vanilla-extract/css";
import { tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const groupBase = baseSprinkles({
  display: "inline-flex",
  position: "relative",
  gap: "0",
});

export const groupDefault = style([
  baseSprinkles({
    backgroundColor: "subtle",
    borderColor: "subtle",
    borderWidth: "thin",
    borderStyle: "solid",
    padding: "xxs",
    radius: "md",
  }),
  style({
    gap: tokenVars.spacing.xxs,
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
      borderStartStartRadius: tokenVars.borderRadius.md,
      borderEndStartRadius: tokenVars.borderRadius.md,
    },
    "&:last-child": {
      borderStartEndRadius: tokenVars.borderRadius.md,
      borderEndEndRadius: tokenVars.borderRadius.md,
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
      borderStartStartRadius: tokenVars.borderRadius.md,
      borderStartEndRadius: tokenVars.borderRadius.md,
    },
    "&:last-child": {
      borderEndStartRadius: tokenVars.borderRadius.md,
      borderEndEndRadius: tokenVars.borderRadius.md,
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
