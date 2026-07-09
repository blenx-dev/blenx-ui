import { semanticVars } from "@blenx-dev/theme/contract";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const alertBg = createVar();
const alertFg = createVar();

export const alertBase = style({
  backgroundColor: alertBg,
  color: alertFg,
});

export const alertVariants = recipe({
  variants: {
    palette: {
      info: {
        vars: {
          [alertBg]: semanticVars.color.info.bg,
          [alertFg]: semanticVars.color.info.active,
        },
      },
      success: {
        vars: {
          [alertBg]: semanticVars.color.success.bg,
          [alertFg]: semanticVars.color.success.active,
        },
      },
      warning: {
        vars: {
          [alertBg]: semanticVars.color.warning.bg,
          [alertFg]: semanticVars.color.warning.active,
        },
      },
      error: {
        vars: {
          [alertBg]: semanticVars.color.danger.bg,
          [alertFg]: semanticVars.color.danger.default,
        },
      },
    },
  },
});
