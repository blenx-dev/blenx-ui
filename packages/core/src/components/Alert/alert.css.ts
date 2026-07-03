import { semanticVars } from "@blenx-dev/theme/contract";
import { recipe } from "@vanilla-extract/recipes";

export const alertVariants = recipe({
  variants: {
    variant: {
      info: {
        backgroundColor: semanticVars.color.info.bg,
        color: semanticVars.color.info.active,
        borderColor: semanticVars.color.info.default,
      },
      success: {
        backgroundColor: semanticVars.color.success.bg,
        color: semanticVars.color.success.active,
        borderColor: semanticVars.color.success.default,
      },
      warning: {
        backgroundColor: semanticVars.color.warning.bg,
        color: semanticVars.color.warning.active,
        borderColor: semanticVars.color.warning.default,
      },
      error: {
        backgroundColor: semanticVars.color.danger.bg,
        color: semanticVars.color.danger.default,
        borderColor: semanticVars.color.danger.default,
      },
    },
  },
});
