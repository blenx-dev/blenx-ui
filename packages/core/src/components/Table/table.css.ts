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
  borderBottomWidth: "thin",
  borderBottomStyle: "solid",
  borderBottomColor: "subtle",
});

export const header = style([
  baseSprinkles({
    py: "md",
    px: "md",
    fontSize: "sm",
    color: "primary",
    borderBottomWidth: "thin",
    fontWeight: "medium",
    borderBottomStyle: "solid",
  }),
  style({
    borderBottomColor: semanticVars.border.default,
    textTransform: "none",
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
  py: "md",
  px: "md",
  fontSize: "sm",
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
