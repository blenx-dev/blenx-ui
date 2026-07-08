import { HStack } from "../Stack/stack";
import { Badge } from "./badge";

export function VariantsStory() {
  return (
    <HStack gap="md" align="center">
      <Badge>Default</Badge>
      <Badge palette="primary">Primary</Badge>
      <Badge palette="secondary">Secondary</Badge>
    </HStack>
  );
}
