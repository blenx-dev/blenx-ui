import { baseSprinkles } from "../../utils/sprinkles";

export const label = baseSprinkles({
  display: "inline-flex",
  align: "center",
  fontSize: "md",
  fontWeight: "regular",
  color: "inherit",
});

export const item = baseSprinkles({
  display: "flex",
  flex: 1,
});

export const description = baseSprinkles({
  color: "secondary",
  fontSize: "xs",
  lineHeight: "normal",
});

export const error = baseSprinkles({
  color: "error",
  fontSize: "xs",
  lineHeight: "normal",
});
