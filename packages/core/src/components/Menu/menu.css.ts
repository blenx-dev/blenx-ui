import { style } from "@vanilla-extract/css";
import { semanticVars } from "../../theme/contract.css";
import { baseSprinkles } from "../../utils/sprinkles";

export const trigger = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    radius: "md",
    padding: "0",
    borderWidth: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    appearance: "none",
    outline: "none",
    fontFamily: "inherit",
    fontSize: "inherit",
    color: "inherit",
  }),
  style({
    border: "none",
    transition: "background-color 0.15s ease, box-shadow 0.15s ease",
    selectors: {
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
      },
    },
  }),
]);

export const popup = style([
  baseSprinkles({
    backgroundColor: "surface",
    radius: "lg",
    zIndex: "floating",
    padding: "xs",
    display: "flex",
    gap: "xs",
    direction: "column",
    overflow: "hidden",
    borderWidth: "thin",
    borderStyle: "solid",
    boxShadow: "xl",
    outline: "none",
  }),
  style({
    borderColor: semanticVars.border.subtle,
    zIndex: 1000,
    minWidth: 224,
  }),
]);

export const item = style([
  baseSprinkles({
    display: "flex",
    align: "center",
    gap: "sm",
    radius: "default",
    color: "primary",
    fontSize: "sm",
    fontWeight: "medium",
    backgroundColor: "transparent",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "left",
    appearance: "none",
    outline: "none",
    paddingY: "xs",
    paddingX: "sm",
  }),
  style({
    minHeight: 32,
    lineHeight: 1.4,
    border: "none",
    transition: "background-color 0.15s ease, color 0.15s ease",
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.text.primary,
      },
      "&:focus-visible": {
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.text.primary,
        boxShadow: `0 0 0 2px ${semanticVars.border.strong} inset`,
      },
      "&:active": {
        backgroundColor: semanticVars.border.subtle,
      },
    },
  }),
]);

export const itemDestructive = style([
  baseSprinkles({
    color: "danger",
    fontWeight: "medium",
  }),
  style({
    selectors: {
      "&:hover": {
        backgroundColor: semanticVars.color.danger.bg,
        color: semanticVars.color.danger.default,
      },
      "&:focus-visible": {
        backgroundColor: semanticVars.color.danger.bg,
        color: semanticVars.color.danger.default,
        boxShadow: `0 0 0 2px ${semanticVars.color.danger.default} inset`,
      },
      "&:active": {
        backgroundColor: semanticVars.color.danger.bgActive,
        color: semanticVars.color.danger.default,
      },
    },
  }),
]);

export const separator = style({
  height: 1,
  backgroundColor: semanticVars.border.subtle,
  border: "none",
});

export const groupLabel = style([
  baseSprinkles({
    fontSize: "xs",
    color: "secondary",
    fontWeight: "semibold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    paddingTop: "sm",
    paddingBottom: "md",
    paddingLeft: "md",
    paddingRight: "md",
  }),
]);

export const inset = baseSprinkles({
  paddingLeft: "40",
});

export const shortcut = style([
  baseSprinkles({
    color: "disabled",
    fontSize: "xs",
    fontWeight: "medium",
  }),
  style({
    marginLeft: "auto",
  }),
]);
