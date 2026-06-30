import clsx from "clsx";
import type React from "react";
import { spinner } from "./spinner.css";
import { LoaderCircleIcon } from "../../icons";

type Props = Omit<React.ComponentProps<typeof LoaderCircleIcon>, "className" | "style"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function Spinner({ className, style, ...props }: Props): React.ReactElement {
  return <LoaderCircleIcon className={clsx(spinner, className)} style={style} {...props} />;
}
