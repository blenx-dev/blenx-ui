import clsx from "clsx";
import { iconWrapper } from "./icon.css";
import { Box, type BoxProps } from "../Box/box";

type IconProps = Omit<BoxProps, "fontSize"> & { size?: BoxProps["fontSize"] };

export function Icon({ children, className, style, size, ...props }: IconProps) {
  return (
    <Box className={clsx(iconWrapper, className)} fontSize={size} style={style} {...props}>
      {children}
    </Box>
  );
}

export type { IconProps };
