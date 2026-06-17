import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize, mediaQueries } from "@/lib/theme/tokens.stylex";

export const pricingStyles = stylex.create({
	section: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing.xlarge,
		padding: spacing.xxxlarge,
		boxSizing: "border-box",
	},
	header: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing.small,
	},
	description: {
		color: theme.contentSecondary,
		maxWidth: 560,
	},
	toggle: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: spacing.small,
		justifyContent: "center",
	},
	savingsBadge: {
		backgroundColor: theme.sentimentPositiveSubtle,
		color: theme.sentimentPositive,
		fontSize: fontSize.xsmall,
		fontWeight: 600,
		padding: `${spacing.xxsmall} ${spacing.xsmall}`,
		borderRadius: theme.borderRadius,
	},
	grid: {
		display: "grid",
		gridTemplateColumns: {
			default: "repeat(1, 1fr)",
			[mediaQueries.md]: "repeat(2, 1fr)",
			[mediaQueries.lg]: "repeat(3, 1fr)",
		},
		gap: spacing.medium,
		width: "100%",
		maxWidth: 1100,
	},
	popularCard: {
		transform: {
			default: "none",
			[mediaQueries.lg]: "scale(1.05)",
		},
		borderColor: theme.primary,
		borderWidth: 2,
	},
	popularBadge: {
		backgroundColor: theme.primary,
		color: theme.contentOnPrimary,
		fontSize: fontSize.xsmall,
		fontWeight: 600,
		padding: `${spacing.xxsmall} ${spacing.small}`,
		borderRadius: theme.borderRadius,
		width: "fit-content",
		marginBottom: spacing.small,
	},
	planName: {
		fontSize: fontSize.large,
		fontWeight: 600,
	},
	planPrice: {
		fontSize: fontSize.xxxlarge,
		fontWeight: 700,
		lineHeight: 1,
	},
	planPeriod: {
		fontSize: fontSize.small,
		color: theme.contentSecondary,
	},
	features: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
	},
	feature: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: spacing.xsmall,
		fontSize: fontSize.small,
	},
	featureIcon: {
		color: theme.sentimentPositive,
		flexShrink: 0,
	},
	billingLabel: {
		fontSize: fontSize.small,
		color: theme.contentSecondary,
	},
	ctaMargin: {
		marginTop: spacing.medium,
	},
	popularBorder: {
		borderColor: theme.primary,
	},
});
