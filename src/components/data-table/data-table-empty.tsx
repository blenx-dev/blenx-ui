import { fontSize, spacing, theme } from "@around-me/ui/theme/contract.stylex";
import { FolderOpenIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";

interface DataTableEmptyProps {
	/** Custom message to display */
	message?: string;
	/** Optional icon or illustration */
	icon?: React.ReactNode;
	/** Optional action button */
	action?: React.ReactNode;
}

/**
 * Empty state for the DataTable.
 * Displayed when no data matches the current filters or the table is empty.
 */
export function DataTableEmpty({
	message = "No results found",
	icon,
	action,
}: DataTableEmptyProps) {
	return (
		<div role="status" aria-label={message} {...stylex.props(styles.container)}>
			{icon && <div {...stylex.props(styles.iconWrap)}>{icon}</div>}
			{!icon && (
				<div {...stylex.props(styles.iconWrap)}>
					<FolderOpenIcon size={48} />
				</div>
			)}
			<p {...stylex.props(styles.message)}>{message}</p>
			{action && <div {...stylex.props(styles.actionWrap)}>{action}</div>}
		</div>
	);
}

const styles = stylex.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: spacing.xxxlarge,
		paddingBottom: spacing.xxxlarge,
		paddingLeft: spacing.medium,
		paddingRight: spacing.medium,
		gap: 12,
	},
	iconWrap: {
		opacity: 0.5,
	},
	message: {
		color: theme.contentSecondary,
		fontSize: fontSize.small,
		lineHeight: 1.5,
		textAlign: "center",
		margin: 0,
	},
	actionWrap: {
		marginTop: spacing.xsmall,
	},
});
