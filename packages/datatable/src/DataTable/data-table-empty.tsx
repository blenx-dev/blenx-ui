import { FolderOpenIcon } from "@blenx-dev/core/icons";
import * as styles from "./data-table.css";

interface DataTableEmptyProps {
  message?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function DataTableEmpty({
  message = "No results found",
  icon,
  action,
}: DataTableEmptyProps) {
  return (
    <output aria-label={message} className={styles.emptyContainer}>
      {icon && <div className={styles.iconWrap}>{icon}</div>}
      {!icon && (
        <div className={styles.iconWrap}>
          <FolderOpenIcon width={48} />
        </div>
      )}
      <p className={styles.message}>{message}</p>
      {action && <div className={styles.actionWrap}>{action}</div>}
    </output>
  );
}
