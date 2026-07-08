"use client";

import type { BoxProps } from "../Box/box";
import { Box } from "../Box/box";

type AspectRatioProps = BoxProps & {
  ratio?: number;
};

export function AspectRatio({ ratio = 16 / 9, style, ...boxProps }: AspectRatioProps) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      maxWidth={"full"}
      style={{ aspectRatio: `${ratio}`, ...style }}
      {...boxProps}
    />
  );
}
