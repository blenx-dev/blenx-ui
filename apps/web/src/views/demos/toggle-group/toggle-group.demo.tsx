import { useState } from "react";
import {
  VStack,
  HStack,
  Text,
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@blenx-dev/core";

export function DefaultStory() {
  const [value, setValue] = useState<string[]>(["a"]);

  return (
    <VStack gap="md">
      <Text>Selected: {value.join(", ") || "none"}</Text>
      <ToggleGroup value={value} onValueChange={setValue}>
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
    </VStack>
  );
}

export function OutlineStory() {
  const [value, setValue] = useState<string[]>(["x"]);

  return (
    <VStack gap="md">
      <Text>Selected: {value.join(", ") || "none"}</Text>
      <ToggleGroup value={value} onValueChange={setValue} variant="outline">
        <ToggleGroupItem value="x">Option X</ToggleGroupItem>
        <ToggleGroupItem value="y">Option Y</ToggleGroupItem>
        <ToggleGroupItem value="z">Option Z</ToggleGroupItem>
      </ToggleGroup>
    </VStack>
  );
}

export function VerticalStory() {
  const [value, setValue] = useState<string[]>(["a"]);

  return (
    <HStack gap="xl" align="start">
      <VStack gap="sm">
        <Text variant="body2" color="secondary">
          Default (tray)
        </Text>
        <ToggleGroup orientation="vertical" value={value} onValueChange={setValue}>
          <ToggleGroupItem value="a">Option A</ToggleGroupItem>
          <ToggleGroupItem value="b">Option B</ToggleGroupItem>
          <ToggleGroupItem value="c">Option C</ToggleGroupItem>
        </ToggleGroup>
      </VStack>
      <VStack gap="sm">
        <Text variant="body2" color="secondary">
          Outline
        </Text>
        <ToggleGroup
          orientation="vertical"
          variant="outline"
          value={value}
          onValueChange={setValue}
        >
          <ToggleGroupItem value="a">Option A</ToggleGroupItem>
          <ToggleGroupItem value="b">Option B</ToggleGroupItem>
          <ToggleGroupItem value="c">Option C</ToggleGroupItem>
        </ToggleGroup>
      </VStack>
    </HStack>
  );
}

export function SizesStory() {
  const [value, setValue] = useState<string[]>(["m"]);

  return (
    <VStack gap="md">
      <ToggleGroup size="sm" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="s">S</ToggleGroupItem>
        <ToggleGroupItem value="m">M</ToggleGroupItem>
        <ToggleGroupItem value="l">L</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup size="default" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="s">S</ToggleGroupItem>
        <ToggleGroupItem value="m">M</ToggleGroupItem>
        <ToggleGroupItem value="l">L</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup size="lg" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="s">S</ToggleGroupItem>
        <ToggleGroupItem value="m">M</ToggleGroupItem>
        <ToggleGroupItem value="l">L</ToggleGroupItem>
      </ToggleGroup>
    </VStack>
  );
}

export function WithSeparatorStory() {
  const [value, setValue] = useState<string[]>(["a"]);

  return (
    <VStack gap="md">
      <ToggleGroup value={value} onValueChange={setValue}>
        <ToggleGroupItem value="a">Item A</ToggleGroupItem>
        <ToggleGroupItem value="b">Item B</ToggleGroupItem>
        <ToggleGroupSeparator />
        <ToggleGroupItem value="c">Item C</ToggleGroupItem>
        <ToggleGroupItem value="d">Item D</ToggleGroupItem>
      </ToggleGroup>
    </VStack>
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

export function PaletteStory() {
  const [value, setValue] = useState<string[]>(["a"]);

  return (
    <VStack gap="md">
      {palettes.map((p) => (
        <VStack key={p} gap="xs">
          <Text variant="body2" color="secondary">
            {p}
          </Text>
          <ToggleGroup palette={p} value={value} onValueChange={setValue}>
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        </VStack>
      ))}
    </VStack>
  );
}

export function PaletteOutlineStory() {
  const [value, setValue] = useState<string[]>(["a"]);

  return (
    <VStack gap="md">
      {palettes.map((p) => (
        <VStack key={p} gap="xs">
          <Text variant="body2" color="secondary">
            {p}
          </Text>
          <ToggleGroup palette={p} variant="outline" value={value} onValueChange={setValue}>
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        </VStack>
      ))}
    </VStack>
  );
}

export function NoTrayStory() {
  const [value, setValue] = useState<string[]>(["a"]);

  return (
    <VStack gap="md">
      <Text>Selected: {value.join(", ") || "none"}</Text>
      <ToggleGroup value={value} onValueChange={setValue} tray={false}>
        <ToggleGroupItem value="a">Option A</ToggleGroupItem>
        <ToggleGroupItem value="b">Option B</ToggleGroupItem>
        <ToggleGroupItem value="c">Option C</ToggleGroupItem>
      </ToggleGroup>
    </VStack>
  );
}

export const demos = [
  { name: "Default (tray)", component: DefaultStory },
  { name: "Outline", component: OutlineStory },
  { name: "Vertical", component: VerticalStory },
  { name: "Sizes", component: SizesStory },
  { name: "With Separator", component: WithSeparatorStory },
  { name: "Palette", component: PaletteStory },
  { name: "Palette (outline)", component: PaletteOutlineStory },
  { name: "No Tray", component: NoTrayStory },
];
