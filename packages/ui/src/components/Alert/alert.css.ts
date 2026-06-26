import { themeContract } from "@blenx-dev/theme/contract.css";
import { recipe } from "@vanilla-extract/recipes";

export const alertVariants = recipe({
  variants: {
    variant: {
      info: {
        backgroundColor: themeContract.sentimentInfoSubtle,
        color: themeContract.sentimentInfo,
        borderColor: themeContract.sentimentInfo,
      },
      success: {
        backgroundColor: themeContract.sentimentPositiveSubtle,
        color: themeContract.sentimentPositive,
        borderColor: themeContract.sentimentPositive,
      },
      warning: {
        backgroundColor: themeContract.sentimentWarningSubtle,
        color: themeContract.sentimentWarning,
        borderColor: themeContract.sentimentWarning,
      },
      error: {
        backgroundColor: themeContract.sentimentNegativeSubtle,
        color: themeContract.sentimentNegative,
        borderColor: themeContract.sentimentNegative,
      },
    },
  },
});
