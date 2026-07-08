import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = style([
  baseSprinkles({
    display: "flex",
    direction: "column",
    width: "full",
    overflow: "hidden",
    radius: "lg",
    backgroundColor: "surface",
    maxHeight: "full",
    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: "default",
    boxShadow: "lg",
    outline: "none",
  }),
  style({}),
]);

export const inputWrapper = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    px: "sm",
  }),
  style({
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: semanticVars.border.subtle,
  }),
]);

export const inputIcon = baseSprinkles({
  display: "flex",
  align: "center",
  shrink: 0,
  color: "disabled",
});

export const input = style([
  baseSprinkles({
    width: "full",
    fontSize: "sm",
    color: "primary",
    backgroundColor: "transparent",
    outline: "none",
    fontFamily: "inherit",
  }),
  style({
    height: 44,
    border: "none",
    selectors: {
      "&::placeholder": {
        color: semanticVars.text.disabled,
      },
    },
  }),
]);

export const list = style([
  baseSprinkles({
    overflow: "auto",
    padding: "xs",
  }),
  style({
    maxHeight: 300,
  }),
]);

export const group = baseSprinkles({
  display: "flex",
  direction: "column",
});

export const groupHeading = baseSprinkles({
  px: "sm",
  fontSize: "xs",
  color: "secondary",
  paddingTop: "sm",
  paddingBottom: "xs",
  fontWeight: "semibold",
});

export const item = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    py: "xs",
    px: "sm",
    radius: "sm",
    fontSize: "sm",
    color: "primary",
    cursor: "pointer",
    userSelect: "none",
    outline: "none",
  }),
  style({
    minHeight: 36,
    lineHeight: "1.5",

    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
      },
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
      },
      "&[data-selected]": {
        backgroundColor: semanticVars.color.primary.bg,
        color: semanticVars.color.primary.default,
      },
    },
  }),
]);

export const itemActive = baseSprinkles({
  backgroundColor: "subtle",
});

export const itemDisabled = style([
  baseSprinkles({
    color: "disabled",
    cursor: "default",
  }),
  style({
    selectors: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  }),
]);

export const separator = style([
  baseSprinkles({
    marginY: "xs",
  }),
  style({
    height: 1,
    backgroundColor: semanticVars.border.subtle,
  }),
]);

export const empty = style([
  baseSprinkles({
    py: "lg",
    fontSize: "sm",
    color: "secondary",
    textAlign: "center",
  }),
  style({}),
]);
