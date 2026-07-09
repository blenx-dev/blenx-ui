import { CheckIcon, CircleAlertIcon, InfoIcon, SkullIcon } from "@blenx-dev/core/icons";
import { Alert, VStack } from "@blenx-dev/core";

export function AlertDemo() {
  return (
    <VStack>
      <Alert
        palette="info"
        icon={<InfoIcon width={20} />}
        title="Info"
        radius="xl"
        withBorder
        description="This is an info alert"
      />
      <Alert
        palette="success"
        icon={<CheckIcon width={20} />}
        title="Success"
        description="This is a success alert"
      />
      <Alert
        palette="warning"
        icon={<CircleAlertIcon width={20} />}
        title="Warning"
        description="This is a warning alert"
      />
      <Alert
        palette="danger"
        icon={<SkullIcon width={20} />}
        title="Error"
        withBorder
        description="This is an error alert"
      />
      <Alert palette="danger" icon={<SkullIcon width={20} />}>
        This is another error alert
      </Alert>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: AlertDemo }];
