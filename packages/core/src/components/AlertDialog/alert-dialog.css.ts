import { baseSprinkles } from "../../utils/sprinkles";

export const footerDefault = baseSprinkles({
  backgroundColor: "subtle",
  py: "lg",
  px: "lg",
  borderTopWidth: "thin",
  borderTopStyle: "solid",
  borderTopColor: "subtle",
  display: "flex",
  gap: "sm",
  justify: "end",
});

export const footerBare = baseSprinkles({
  paddingTop: "lg",
  paddingBottom: "lg",
  display: "flex",
  gap: "sm",
  justify: "end",
});

export const title = baseSprinkles({
  fontSize: "lg",
  color: "primary",
  lineHeight: "tight",
  fontWeight: "semibold",
});

export const description = baseSprinkles({
  fontSize: "sm",
  color: "secondary",
  lineHeight: "normal",
});

export const panel = baseSprinkles({
  padding: "lg",
});
