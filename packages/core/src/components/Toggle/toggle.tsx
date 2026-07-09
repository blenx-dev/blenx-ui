"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import clsx from "clsx";
import { base, pressed, toggleRecipes } from "./toggle.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import type { BaseSprinkles } from "../../utils/sprinkles.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";
import { paletteMap } from "../../utils/pallete-styles.css";
export type ToggleSize = "default" | "sm" | "lg";
export type ToggleVariants = RecipeVariants<typeof toggleRecipes>;

export type ToggleProps = TogglePrimitive.Props &
  ToggleVariants &
  BaseSprinkles & {
    size?: ToggleSize;
  };

export function Toggle({
  children,
  className,
  variant = "default",
  size = "default",
  palette,
  ...props
}: ToggleProps) {
  const [sprinkleClass, htmlProps] = applyBaseSprinkles(props);

  return (
    <TogglePrimitive
      data-slot="toggle"
      data-palette={palette}
      {...(htmlProps as Record<string, unknown>)}
      render={(renderProps, state) => {
        return (
          <button
            {...renderProps}
            className={clsx(
              palette ? paletteMap[palette] : null,
              base,
              toggleRecipes({ size, variant }),
              state.pressed && pressed[variant],
              sprinkleClass,
              className,
            )}
          >
            {children}
          </button>
        );
      }}
    />
  );
}
