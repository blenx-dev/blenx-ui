import { useState } from "react";
import { VStack, Text, SegmentedControl } from "@blenx-dev/core";

export function SegmentedControlDemo() {
  const [value, setValue] = useState("day");

  return (
    <VStack gap="md">
      <Text>Selected: {value}</Text>
      <SegmentedControl
        value={value}
        onValueChange={setValue}
        options={[
          { value: "day", label: "Day" },
          { value: "week", label: "Week" },
          { value: "month", label: "Month" },
        ]}
      />
    </VStack>
  );
}

export function DefaultVariantStory() {
  const [value, setValue] = useState("sm");

  return (
    <VStack gap="md">
      <Text>Selected: {value}</Text>
      <SegmentedControl
        value={value}
        onValueChange={setValue}
        variant="default"
        options={[
          { value: "sm", label: "Small" },
          { value: "md", label: "Medium" },
          { value: "lg", label: "Large" },
        ]}
      />
    </VStack>
  );
}

export function SizesStory() {
  const [valueSm, setValueSm] = useState("1");
  const [valueDefault, setValueDefault] = useState("2");
  const [valueLg, setValueLg] = useState("3");

  return (
    <VStack gap="md">
      <VStack gap="sm">
        <Text variant="body2" color="secondary">
          sm
        </Text>
        <SegmentedControl
          size="sm"
          value={valueSm}
          onValueChange={setValueSm}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
      </VStack>
      <VStack gap="sm">
        <Text variant="body2" color="secondary">
          default
        </Text>
        <SegmentedControl
          value={valueDefault}
          onValueChange={setValueDefault}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
      </VStack>
      <VStack gap="sm">
        <Text variant="body2" color="secondary">
          lg
        </Text>
        <SegmentedControl
          size="lg"
          value={valueLg}
          onValueChange={setValueLg}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        />
      </VStack>
    </VStack>
  );
}

export function VerticalStory() {
  const [value, setValue] = useState("read");

  return (
    <VStack gap="md">
      <Text>Selected: {value}</Text>
      <SegmentedControl
        orientation="vertical"
        value={value}
        onValueChange={setValue}
        options={[
          { value: "read", label: "Read" },
          { value: "write", label: "Write" },
          { value: "admin", label: "Admin" },
        ]}
        style={{ width: 160 }}
      />
    </VStack>
  );
}

export const demos = [
  { name: "Outline", component: SegmentedControlDemo },
  { name: "Default Variant", component: DefaultVariantStory },
  { name: "Sizes", component: SizesStory },
  { name: "Vertical", component: VerticalStory },
];
