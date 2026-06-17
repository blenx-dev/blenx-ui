import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize, mediaQueries } from "@/lib/theme/tokens.stylex";

export const emptyStateStyles = stylex.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		gap: spacing.medium,
		padding: spacing.xxlarge,
	},
	page: {
		minHeight: "60vh",
	},
	iconWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: 64,
		height: 64,
		borderRadius: "50%",
		backgroundColor: theme.surfaceSubtle,
		color: theme.contentDisabled,
		fontSize: fontSize.xxlarge,
		flexShrink: 0,
	},
	title: {
		maxWidth: 400,
	},
	description: {
		maxWidth: 480,
		color: theme.contentSecondary,
	},
	actions: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: spacing.small,
		marginTop: spacing.small,
		flexWrap: "wrap",
		justifyContent: "center",
		[mediaQueries.sm]: {
			flexDirection: "column",
			width: "100%",
		},
	},
	actionFullWidth: {
		[mediaQueries.sm]: {
			width: "100%",
		},
	},
});
