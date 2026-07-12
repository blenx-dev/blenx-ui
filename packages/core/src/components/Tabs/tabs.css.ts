import { style } from "@vanilla-extract/css";
import { baseSprinkles } from "../../utils/sprinkles";
import { semanticVars, tokenVars } from "../../theme/contract.css";

export const rootVertical = style({});

export const listUnderline = baseSprinkles({
  display: "flex",
  align: "stretch",
  padding: "0",
});

export const listVertical = style([
  baseSprinkles({
    direction: "column",
    align: "stretch",
    borderRightWidth: "thin",
    borderRightStyle: "solid",
  }),
  style({
    minWidth: 220,
    borderRightColor: semanticVars.border.subtle,
  }),
]);

export const tabActiveVertical = style([
  baseSprinkles({
    color: "primary",
    backgroundColor: "subtle",
    fontWeight: "semibold",
  }),
  style({
    borderRightWidth: 2,
    borderRightStyle: "solid",
    borderRightColor: semanticVars.color.secondary.default,
  }),
]);

export const listGhost = baseSprinkles({
  display: "flex",
  gap: "sm",
});

export const tabGhost = style([
  baseSprinkles({
    radius: "md",
    color: "secondary",
    py: "sm",
    px: "md",
  }),
  style({
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
    },
  }),
]);

export const tabGhostActive = style([
  baseSprinkles({
    backgroundColor: "subtle",
    color: "primary",
    fontWeight: "semibold",
  }),
  style({
    boxShadow: `0 0 0 1px ${semanticVars.border.subtle}`,
  }),
]);

export const listSegmented = style([
  baseSprinkles({
    display: "flex",
    gap: "xxs",
    padding: "xxs",
    radius: "lg",
    backgroundColor: "subtle",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
  style({
    borderColor: semanticVars.border.subtle,
  }),
]);

export const tabSegmented = style([
  baseSprinkles({
    radius: "md",
    color: "secondary",
    py: "sm",
    px: "md",
  }),
  style({
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.surface.default,
      },
    },
  }),
]);

export const tabSegmentedActive = style([
  baseSprinkles({
    backgroundColor: "surface",
    fontWeight: "semibold",
  }),
  style({
    color: semanticVars.color.primary.fg,
    boxShadow: `0 1px 3px rgba(0, 0, 0, 0.08)`,
  }),
]);

export const tab = style([
  baseSprinkles({
    borderBottomStyle: "solid",
    cursor: "pointer",
    appearance: "none",
    outline: "none",
    textDecoration: "none",
    whiteSpace: "nowrap",
    userSelect: "none",
    fontFamily: "body",
  }),
  style({
    minHeight: 36,
    border: "none",
    borderBottomColor: semanticVars.border.default,
    font: "inherit",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.color.primary.text,
      },
      "&:active": {
        backgroundColor: semanticVars.surface.overlay,
        color: semanticVars.color.primary.text,
      },
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
      },
    },
    WebkitTapHighlightColor: "transparent",
    transition: `color ${tokenVars.duration.normal} ${tokenVars.easing.standard}, background-color ${tokenVars.duration.normal} ${tokenVars.easing.standard}, box-shadow ${tokenVars.duration.normal} ${tokenVars.easing.standard}`,
  }),
]);

export const tabDefault = style([
  baseSprinkles({
    color: "secondary",
    fontSize: "sm",
    position: "relative",
    py: "sm",
    backgroundColor: "transparent",
    px: "md",
    fontWeight: "medium",
  }),
  style({
    lineHeight: 1.2,
    minHeight: 40,
    selectors: {
      "&:hover": {
        color: semanticVars.text.primary,
        backgroundColor: semanticVars.background.subtle,
      },
      "&:focus-visible": {
        boxShadow: `inset 0 -2px 0 ${semanticVars.color.secondary}`,
      },
    },
  }),
]);

export const tabVertical = baseSprinkles({
  width: "full",
  justify: "start",
});

export const tabActive = baseSprinkles({
  color: "primary",
  fontWeight: "semibold",
});

export const tabDisabled = style([
  baseSprinkles({ cursor: "not-allowed" }),
  style({ opacity: 0.45 }),
]);

export const tabUnderline = style([
  baseSprinkles({
    fontSize: "sm",
    backgroundColor: "transparent",
    py: "sm",
    px: "0",
    borderBottomWidth: "thin",
    borderBottomRightRadius: "none",
    borderBottomLeftRadius: "none",
    fontWeight: "medium",
  }),
  style({
    selectors: {
      "&:hover": {
        color: semanticVars.text.primary,
      },
      "&[data-active]": {
        fontWeight: tokenVars.fontWeight.semibold,
        borderBottomStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: semanticVars.color.primary.default,
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.color.primary.default,
      },
    },
  }),
]);

export const indicator = baseSprinkles({
  position: "absolute",
  pointerEvents: "none",
});

export const indicatorDefault = style({
  display: "none",
});

export const indicatorUnderline = style([
  baseSprinkles({
    radius: "full",
  }),
  style({
    backgroundColor: semanticVars.color.secondary.default,
  }),
]);

export const panelVertical = baseSprinkles({
  grow: 1,
});
