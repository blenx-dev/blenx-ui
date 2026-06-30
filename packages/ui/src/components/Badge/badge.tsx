import clsx from "clsx";
import { getBadgeStyles } from "./badge.css";
import { Box, type BoxProps } from "../Box/box";

type Variant = "default" | "primary" | "secondary" | "success" | "danger";
type Appearance = "solid" | "outline" | "soft";

type Props = BoxProps & {
  variant?: Variant;
  appearance?: Appearance;
};

export function Badge({
  variant = "default",
  appearance = "solid",
  className,
  style,
  ...props
}: Props) {
  return (
    <Box
      className={clsx(getBadgeStyles(variant, appearance), className)}
      style={style}
      {...props}
    />
  );
}
