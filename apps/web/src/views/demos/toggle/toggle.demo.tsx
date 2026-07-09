import { useState } from "react";
import { Stack, Toggle } from "@blenx-dev/core";
import { ListIcon, StarIcon, CheckIcon } from "@blenx-dev/core/icons";

export function VariantsStory() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Stack gap="md">
      <Stack gap="sm" direction="row" align="center">
        <Toggle pressed={active === "a"} onPressedChange={(p) => setActive(p ? "a" : null)}>
          Default (no border)
        </Toggle>
        <Toggle
          variant="outline"
          pressed={active === "b"}
          onPressedChange={(p) => setActive(p ? "b" : null)}
        >
          Outline
        </Toggle>
      </Stack>
    </Stack>
  );
}

export function SizesStory() {
  return (
    <Stack gap="md">
      <Stack gap="sm" direction="row" align="center">
        <Toggle size="sm">Small</Toggle>
        <Toggle size="default">Default</Toggle>
        <Toggle size="lg">Large</Toggle>
      </Stack>
    </Stack>
  );
}

export function WithIconsStory() {
  return (
    <Stack gap="md">
      <Stack gap="sm" direction="row" align="center">
        <Toggle aria-label="List">
          <ListIcon />
        </Toggle>
        <Toggle aria-label="Star">
          <StarIcon />
        </Toggle>
        <Toggle aria-label="Check">
          <CheckIcon />
        </Toggle>
      </Stack>
    </Stack>
  );
}

export function DisabledStory() {
  return (
    <Stack gap="md">
      <Stack gap="sm" direction="row" align="center">
        <Toggle disabled>Default</Toggle>
        <Toggle variant="outline" disabled>
          Outline
        </Toggle>
      </Stack>
    </Stack>
  );
}

const palettes = [
  "primary",
  "secondary",
  "neutral",
  "success",
  "warning",
  "danger",
  "info",
] as const;

export function PaletteDefaultStory() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Stack gap="md">
      {palettes.map((p) => (
        <Stack key={p} gap="sm" direction="row" align="center">
          <Toggle
            palette={p}
            style={{ minWidth: 100 }}
            pressed={active === p}
            onPressedChange={(pr) => setActive(pr ? p : null)}
          >
            {p}
          </Toggle>
        </Stack>
      ))}
    </Stack>
  );
}

export function PaletteOutlineStory() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Stack gap="md">
      {palettes.map((p) => (
        <Stack key={p} gap="sm" direction="row" align="center">
          <Toggle
            palette={p}
            variant="outline"
            style={{ minWidth: 100 }}
            pressed={active === p}
            onPressedChange={(pr) => setActive(pr ? p : null)}
          >
            {p}
          </Toggle>
        </Stack>
      ))}
    </Stack>
  );
}

export const demos = [
  { name: "Variants", component: VariantsStory },
  { name: "Sizes", component: SizesStory },
  { name: "With Icons", component: WithIconsStory },
  { name: "Disabled", component: DisabledStory },
  { name: "Palette (default)", component: PaletteDefaultStory },
  { name: "Palette (outline)", component: PaletteOutlineStory },
];
