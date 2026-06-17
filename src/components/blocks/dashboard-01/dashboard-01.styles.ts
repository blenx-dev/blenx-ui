import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize, mediaQueries } from "@/lib/theme/tokens.stylex";

export const dashboardStyles = stylex.create({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.large,
		padding: spacing.large,
		boxSizing: "border-box",
	},
	kpiGrid: {
		display: "grid",
		gridTemplateColumns: {
			default: "repeat(1, 1fr)",
			[mediaQueries.md]: "repeat(2, 1fr)",
			[mediaQueries.lg]: "repeat(4, 1fr)",
		},
		gap: spacing.medium,
	},
	kpiCard: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.xsmall,
	},
	kpiValue: {
		fontSize: fontSize.xxlarge,
		fontWeight: 700,
		lineHeight: 1,
	},
	kpiLabel: {
		fontSize: fontSize.small,
		color: theme.contentSecondary,
	},
	kpiTrend: {
		fontSize: fontSize.xsmall,
		display: "flex",
		alignItems: "center",
		gap: spacing.xxsmall,
	},
	kpiTrendUp: {
		color: theme.sentimentPositive,
	},
	kpiTrendDown: {
		color: theme.sentimentNegative,
	},
	sectionHeader: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: spacing.small,
	},
	sectionTitle: {
		fontSize: fontSize.large,
		fontWeight: 600,
	},
	chartGrid: {
		display: "grid",
		gridTemplateColumns: {
			default: "repeat(1, 1fr)",
			[mediaQueries.md]: "repeat(2, 1fr)",
		},
		gap: spacing.medium,
	},
	chartPlaceholder: {
		height: 240,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderStyle: "dashed",
		borderColor: theme.border,
		borderRadius: theme.borderRadius,
		backgroundColor: theme.surfaceSubtle,
		color: theme.contentDisabled,
		fontSize: fontSize.small,
	},
	tableWrapper: {
		overflowX: "auto",
	},
	quickActions: {
		display: "flex",
		flexDirection: "row",
		gap: spacing.small,
		flexWrap: "wrap",
	},
	section: {
		display: "flex",
		flexDirection: "column",
	},
});
