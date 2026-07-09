import type { ReactNode } from "react";
import { Text } from "../Text";
import { HStack, VStack, type HStackProps } from "../Stack/stack";
import { Box } from "../Box/box";

type Props = HStackProps & {
  icon?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

function Alert({ palette = "info", icon, title, description, children, ...props }: Props) {
  return (
    <HStack align={description ? "start" : "center"} gap="sm" p="md" palette={palette} {...props}>
      <Box p={"xs"}>{icon}</Box>
      <VStack gap="xs">
        {title ? (
          <Text variant="h6" padding="none" margin="none">
            {title}
          </Text>
        ) : null}
        {description ? <span style={{ color: "currentColor" }}>{description}</span> : null}
        {children}
      </VStack>
    </HStack>
  );
}

export { Alert };
