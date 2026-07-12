import {
  baseSprinkles,
  gridSprinkles,
  type BaseSprinkles,
  type GridSprinkles,
} from "./sprinkles.css";

const BASE_SPRINKLE_PROPERTIES = baseSprinkles.properties;
type BasePropKeys = keyof BaseSprinkles;
type GridPropKeys = keyof GridSprinkles;
const GRID_SPRINKLE_PROPERTIES = gridSprinkles.properties;
const isBaseSprinklePropery = (key: any): key is BasePropKeys => {
  return BASE_SPRINKLE_PROPERTIES.has(key);
};
export function applyBaseSprinkles<T extends Record<PropertyKey, any>>(props: T): [string, T] {
  const sprinkleProps: BaseSprinkles = {};
  const htmlProps: Partial<T> = {};
  const otherKeysToProcess = [];

  for (const [key, value] of Object.entries(props)) {
    if (key === "fullWidth") {
      if (props[key]) {
        otherKeysToProcess.push(key);
      }
    } else if (key === "withBorder" && value) {
      otherKeysToProcess.push(key);
    } else if (key === "fullHeight") {
      continue;
    } else if (key === "palette" && value) {
      otherKeysToProcess.push(key);
    } else if (isBaseSprinklePropery(key)) {
      sprinkleProps[key] = value;
    } else {
      (htmlProps as Record<string, unknown>)[key] = value;
    }
  }
  for (const key of otherKeysToProcess) {
    if (key === "fullWidth") {
      if (props[key]) {
        sprinkleProps.width = "full";
      }
    } else if (key === "withBorder") {
      console.log("key", key);
      sprinkleProps.borderStyle = sprinkleProps.borderStyle || "solid";
      sprinkleProps.borderWidth = sprinkleProps.borderWidth || "thin";
      sprinkleProps.borderColor = sprinkleProps.borderColor || "secondary";
    }
  }
  return [baseSprinkles(sprinkleProps), htmlProps as T];
}
export function applyGridSprinkles(
  props: Record<string, unknown>,
): [string, Record<string, unknown>] {
  const sprinkleProps: GridSprinkles = {};
  const htmlProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props) as [GridPropKeys, any][]) {
    if (GRID_SPRINKLE_PROPERTIES.has(key)) {
      sprinkleProps[key as GridPropKeys] = value;
    } else {
      htmlProps[key] = value;
    }
  }
  return [gridSprinkles(sprinkleProps), htmlProps];
}
