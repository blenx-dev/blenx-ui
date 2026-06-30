import { CircleAlertIcon } from "@blenx-dev/core/icons";
import * as styles from "./data-table.css";
import { Button } from "@blenx-dev/core";

interface DataTableErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function DataTableError({
  message = "Something went wrong while loading data",
  onRetry,
}: DataTableErrorProps) {
  return (
    <div role="alert" aria-label={message} className={styles.errorContainer}>
      <CircleAlertIcon width={48} />
      <p className={styles.errorMessage}>{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Retry
        </Button>
      )}
    </div>
  );
}
