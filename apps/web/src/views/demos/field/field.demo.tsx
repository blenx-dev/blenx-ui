"use client";

import { useState } from "react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  VStack,
  Text,
  Input,
} from "@blenx-dev/core";

export function FieldDemo() {
  const [value, setValue] = useState("");

  return (
    <VStack gap="md">
      <VStack gap="sm">
        <Text variant="h6">Basic Field</Text>
        <Field name="username">
          <FieldLabel>Username</FieldLabel>
          <FieldDescription>Choose a unique username</FieldDescription>
          <Input placeholder="Enter username" />
        </Field>
      </VStack>
      <VStack gap="sm">
        <Text variant="h6">Field with Error</Text>
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <FieldDescription>Enter a valid email address</FieldDescription>
          <Input
            placeholder="you@example.com"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {value.length > 0 && !value.includes("@") && (
            <FieldError>Please enter a valid email address</FieldError>
          )}
        </Field>
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: FieldDemo }];
