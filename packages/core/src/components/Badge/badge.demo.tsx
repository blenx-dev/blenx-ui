import { HStack } from "../Stack/stack";
import { Badge } from "./badge";

export function VariantsStory() {
  return (
    <HStack gap="md" align="center">
      <Badge>Default</Badge>
      <Badge palette="primary">Primary</Badge>
      <Badge palette="secondary">Secondary</Badge>
      <Badge palette="success">success</Badge>
      <Badge palette="warning">warning</Badge>
      <Badge palette="danger">danger</Badge>
      <Badge palette="info">info</Badge>
    </HStack>
  );
}

export const demos = [{ name: "Variants", component: VariantsStory }];
