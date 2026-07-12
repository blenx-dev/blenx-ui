"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import clsx from "clsx";
import * as React from "react";
import type { SeparatorProps } from "../Separator/separator";
import { Separator } from "../Separator/separator";
import {
  Toggle as ToggleComponent,
  type ToggleProps as ToggleComponentProps,
  type ToggleProps,
  type ToggleSize,
} from "../Toggle/toggle";
import {
  dangerPalette,
  infoPalette,
  neutralPalette,
  primaryPalette,
  successPalette,
  warningPalette,
} from "../../utils/pallete-styles.css";
import {
  groupBase,
  groupDefault,
  groupHorizontal,
  groupVertical,
  itemGapVar,
  outlineGroupItem,
  outlineItemHorizontal,
  outlineItemVertical,
  trayItem,
  trayPaddingVar,
  trayRadiusVar,
} from "./toggle-group.css";

import { tokenVars } from "../../theme/contract.css";

type ToggleGroupVariant = ToggleProps["variant"];
type ToggleGroupSize = ToggleSize;
type ToggleGroupPalette = NonNullable<ToggleProps["palette"]>;
type ToggleGroupRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
type ToggleGroupSpacing = "none" | "xxs" | "xs" | "sm" | "md" | "lg";

const radiusVarMap: Record<ToggleGroupRadius, string> = {
  none: "0",
  sm: tokenVars.borderRadius.sm,
  md: tokenVars.borderRadius.md,
  lg: tokenVars.borderRadius.lg,
  xl: tokenVars.borderRadius.xl,
  full: "9999px",
};

const spacingVarMap: Record<ToggleGroupSpacing, string> = {
  none: tokenVars.spacing.none,
  xxs: tokenVars.spacing.xxs,
  xs: tokenVars.spacing.xs,
  sm: tokenVars.spacing.sm,
  md: tokenVars.spacing.md,
  lg: tokenVars.spacing.lg,
};

const paletteClasses: Record<ToggleGroupPalette, string> = {
  primary: primaryPalette,
  secondary: neutralPalette,
  neutral: neutralPalette,
  success: successPalette,
  warning: warningPalette,
  danger: dangerPalette,
  info: infoPalette,
};

type ToggleGroupContextValue = {
  variant: ToggleGroupVariant;
  size: ToggleGroupSize;
  orientation: "horizontal" | "vertical";
  tray: boolean;
  palette: ToggleGroupPalette;
};

export const ToggleGroupContext = React.createContext<ToggleGroupContextValue | null>(null);

export type ToggleGroupProps = ToggleGroupPrimitive.Props & {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  tray?: boolean;
  palette?: ToggleGroupPalette;
  radius?: ToggleGroupRadius;
  padding?: ToggleGroupSpacing;
  gap?: ToggleGroupSpacing;
};

export function ToggleGroup({
  className,
  style,
  variant = "default",
  size = "default",
  orientation = "horizontal",
  tray = true,
  palette = "neutral",
  radius = "md",
  padding = "xxs",
  gap: gapProp = "xxs",
  children,
  ...props
}: ToggleGroupProps): React.ReactElement {
  const isHorizontal = orientation === "horizontal";
  const isDefault = variant === "default";

  const contextValue = React.useMemo(
    () => ({ variant, size, orientation, tray, palette }),
    [variant, size, orientation, tray, palette],
  );

  return (
    <ToggleGroupPrimitive
      className={clsx(
        groupBase,
        isHorizontal ? groupHorizontal : groupVertical,
        isDefault && tray && groupDefault,
        paletteClasses[palette],
        className,
      )}
      style={{
        [trayRadiusVar]: radiusVarMap[radius],
        [trayPaddingVar]: spacingVarMap[padding],
        [itemGapVar]: spacingVarMap[gapProp],
        ...style,
      }}
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-palette={palette}
      orientation={orientation}
      {...props}
    >
      <ToggleGroupContext.Provider value={contextValue}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
}

export function ToggleGroupItem({
  className,
  style,
  children,
  variant,
  size,
  palette,
  ...props
}: ToggleComponentProps & {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  palette?: ToggleGroupPalette;
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  const context = React.useContext(ToggleGroupContext);

  const resolvedVariant = variant ?? context?.variant ?? "default";
  const resolvedSize = size ?? context?.size ?? "default";
  const resolvedPalette = palette ?? context?.palette ?? "neutral";
  const orientation = context?.orientation ?? "horizontal";
  const hasTray = context?.tray ?? true;
  const isOutline = resolvedVariant === "outline";
  const isDefault = resolvedVariant === "default";

  return (
    <ToggleComponent
      className={clsx(
        isOutline && (orientation === "horizontal" ? outlineItemHorizontal : outlineItemVertical),
        isOutline && outlineGroupItem,
        isDefault && hasTray && trayItem,
        className,
      )}
      style={style}
      data-size={resolvedSize}
      data-variant={resolvedVariant}
      palette={resolvedPalette}
      size={resolvedSize}
      variant={resolvedVariant}
      {...props}
    >
      {children}
    </ToggleComponent>
  );
}

export function ToggleGroupSeparator({
  className,
  orientation,
  ...props
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
} & SeparatorProps): React.ReactElement {
  const context = React.useContext(ToggleGroupContext);
  const resolvedOrientation =
    orientation ?? (context?.orientation === "vertical" ? "horizontal" : "vertical");

  return <Separator className={clsx(className)} orientation={resolvedOrientation} {...props} />;
}
