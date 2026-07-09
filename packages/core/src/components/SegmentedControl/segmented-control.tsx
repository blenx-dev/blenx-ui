import { ToggleGroup, ToggleGroupItem, type ToggleGroupProps } from "../ToggleGroup/toggle-group";
import { segment, segmentedControl } from "./segmented-control.css";
import clsx from "clsx";

type Option<T extends string> = {
  value: T;
  label: string;
};

type SegmentedControlProps<T extends string> = Omit<ToggleGroupProps, "value" | "onValueChange"> & {
  value: T;
  onValueChange: (value: T) => void;
  options: Option<T>[];
};
export function SegmentedControl<T extends string>({
  value,
  onValueChange,
  options,
  variant = "outline",
  tray = true,
  palette = "neutral",
  className,
  ...props
}: SegmentedControlProps<T>) {
  return (
    <ToggleGroup
      className={clsx(tray && segmentedControl, className)}
      value={[value]}
      onValueChange={(values) => {
        if (values.length === 0) {
          return;
        }
        onValueChange(values[0] as T);
      }}
      variant={variant}
      tray={tray}
      palette={palette}
      {...props}
    >
      {options.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          className={segment}
          palette={palette}
        >
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
