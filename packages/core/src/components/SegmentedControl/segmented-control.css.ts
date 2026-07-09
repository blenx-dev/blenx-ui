import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const segmentedControl = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    gap: "xxs",
    padding: "xxs",
    radius: "xl",
    backgroundColor: "subtle",
    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: "subtle",
    width: "fit",
    maxWidth: "full",
  }),
  style({
    boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
    scrollSnapType: "x proximity",
    WebkitOverflowScrolling: "touch",
    overflowX: "auto",
  }),
]);

export const segment = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    gap: "xs",
    radius: "lg",
    px: "md",
    py: "xs",
    fontSize: "sm",
    fontWeight: "medium",
    color: "secondary",
    backgroundColor: "transparent",
    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: "transparent",
    cursor: "pointer",
    whiteSpace: "nowrap",
    userSelect: "none",
    outline: "none",
  }),
  style({
    minHeight: tokenVars.spacing.xl,
    lineHeight: 1,
    transitionProperty: "background-color, color, box-shadow, border-color, transform",
    transitionDuration: tokenVars.duration.normal,
    transitionTimingFunction: tokenVars.easing.standard,
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: semanticVars.background.subtle,
        color: semanticVars.text.primary,
      },
      "&:focus-visible": {
        boxShadow: `0 0 0 2px ${semanticVars.focus.ring}`,
        borderColor: semanticVars.focus.ring,
      },
      "&:active:not(:disabled)": {
        transform: "translateY(0)",
      },
      "&[aria-pressed='true']": {
        backgroundColor: semanticVars.surface.raised,
        color: semanticVars.text.primary,
        borderColor: semanticVars.border.default,
        outline: "none",
        boxShadow: "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px rgba(15, 23, 42, 0.08)",
      },
      "&[data-pressed='true']": {
        backgroundColor: semanticVars.surface.raised,
        color: semanticVars.text.primary,
        borderColor: semanticVars.border.default,
        outline: "none",
        boxShadow: "0 1px 2px rgba(15, 23, 42, 0.08), 0 8px 20px rgba(15, 23, 42, 0.08)",
      },
      "&[aria-pressed='true']:hover:not(:disabled)": {
        backgroundColor: semanticVars.surface.raised,
      },
    },
  }),
]);
