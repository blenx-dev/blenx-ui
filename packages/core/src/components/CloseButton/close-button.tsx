import { XIcon } from "../../icons";
import { IconButton, type IconButtonProps } from "../IconButton/icon-button";

export type { IconButtonProps as CloseButtonProps };

export function CloseButton(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <XIcon width={18} />
    </IconButton>
  );
}
