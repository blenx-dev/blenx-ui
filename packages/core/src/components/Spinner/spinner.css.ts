import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { baseSprinkles } from "../../utils/sprinkles";

export const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const spinner = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
  }),
  style({
    transformOrigin: "center",
    animationName: spin,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  }),
]);

export const spinnerVariants = recipe({
  variants: {
    size: {
      xs: style({ width: 14, height: 14 }),
      sm: style({ width: 18, height: 18 }),
      md: style({ width: 24, height: 24 }),
      lg: style({ width: 32, height: 32 }),
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
