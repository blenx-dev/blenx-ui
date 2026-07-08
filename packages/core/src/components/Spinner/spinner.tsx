import clsx from "clsx";
import type React from "react";
import { spinner, spinnerVariants } from "./spinner.css";
import { LoaderCircleIcon } from "../../icons";

type SpinnerSize = "xs" | "sm" | "md" | "lg";

type Props = Omit<
  React.ComponentProps<typeof LoaderCircleIcon>,
  "className" | "style" | "width" | "height"
> & {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  variant?: SpinnerSize;
};

const sizeMap: Record<string, number> = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 32,
};

export function Spinner({ className, style, size, variant, ...props }: Props): React.ReactElement {
  const resolvedSize = size ?? (variant ? sizeMap[variant] : 20);
  return (
    <LoaderCircleIcon
      className={clsx(spinner, variant && spinnerVariants({ size: variant }), className)}
      style={style}
      width={resolvedSize}
      height={resolvedSize}
      {...props}
    />
  );
}
