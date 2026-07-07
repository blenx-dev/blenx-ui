import { style } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "../../utils/sprinkles";

export const root = baseSprinkles({
  width: "full",
  color: "secondary",
  borderCollapse: "collapse",
});

export const head = baseSprinkles({
  backgroundColor: "subtle",
});

export const header = style([
  baseSprinkles({
    py: "sm",
    px: "md",
    fontSize: "md",
    color: "secondary",
    borderBottomWidth: "thin",
    fontWeight: "semibold",
    borderBottomStyle: "solid",
  }),
  style({
    letterSpacing: "0.05em",
    borderBottomColor: semanticVars.border.default,
  }),
]);

export const row = style({
  transition: "background-color 0.15s ease",
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
  },
});

export const cell = baseSprinkles({
  py: "sm",
  px: "md",
  fontSize: "md",
  borderBottomWidth: "thin",
  borderBottomStyle: "solid",
  borderBottomColor: "subtle",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const wrapper = baseSprinkles({
  radius: "default",
  maxWidth: "full",
  borderWidth: "thin",
  borderStyle: "solid",
  overflow: "auto",
  borderColor: "default",
});

export const alignLeft = baseSprinkles({ textAlign: "left" });
export const alignCenter = baseSprinkles({ textAlign: "center" });
export const alignRight = baseSprinkles({ textAlign: "right" });

export const colorSecondary = baseSprinkles({
  color: "secondary",
});
