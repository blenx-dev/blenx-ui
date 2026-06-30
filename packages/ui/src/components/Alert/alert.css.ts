import { semanticVars } from "@blenx-dev/theme/contract";
import { recipe } from "@vanilla-extract/recipes";

export const alertVariants = recipe({
  variants: {
    variant: {
      info: {
        backgroundColor: semanticVars.status.infoBg,
        color: semanticVars.status.info.default,
        borderColor: semanticVars.status.info.default,
      },
      success: {
        backgroundColor: semanticVars.status.successBg,
        color: semanticVars.status.success.default,
        borderColor: semanticVars.status.success.default,
      },
      warning: {
        backgroundColor: semanticVars.status.warningBg,
        color: semanticVars.status.warning.default,
        borderColor: semanticVars.status.warning.default,
      },
      error: {
        backgroundColor: semanticVars.status.dangerBg,
        color: semanticVars.status.danger.default,
        borderColor: semanticVars.status.danger.default,
      },
    },
  },
});
