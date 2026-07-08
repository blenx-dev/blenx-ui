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
  fontSize: "sm",
  lineHeight: "normal",
  paddingTop: "xxs",
});

export const error = baseSprinkles({
  color: "error",
  fontSize: "sm",
  lineHeight: "normal",
  paddingTop: "xxs",
});
