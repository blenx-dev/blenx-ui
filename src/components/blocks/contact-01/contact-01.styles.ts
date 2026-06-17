import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize, mediaQueries } from "@/lib/theme/tokens.stylex";

export const contactStyles = stylex.create({
	section: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: spacing.xxxlarge,
		boxSizing: "border-box",
	},
	inner: {
		display: "grid",
		gridTemplateColumns: {
			default: "repeat(1, 1fr)",
			[mediaQueries.md]: "repeat(2, 1fr)",
		},
		gap: spacing.xlarge,
		width: "100%",
		maxWidth: 960,
	},
	header: {
		gridColumn: "1 / -1",
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
	form: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.medium,
	},
	fieldGroup: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
	},
	formRow: {
		display: "flex",
		flexDirection: "row",
		gap: spacing.medium,
	},
	infoSidebar: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.large,
	},
	infoItem: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.xxsmall,
	},
	infoLabel: {
		fontSize: fontSize.small,
		fontWeight: 600,
	},
	infoValue: {
		fontSize: fontSize.small,
		color: theme.contentSecondary,
	},
	successState: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing.medium,
		padding: spacing.xxlarge,
		gridColumn: "1 / -1",
	},
	successIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: 64,
		height: 64,
		borderRadius: "50%",
		backgroundColor: theme.sentimentPositiveSubtle,
		color: theme.sentimentPositive,
	},
	select: {
		width: "100%",
		padding: `${spacing.small} ${spacing.medium}`,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.border,
		borderRadius: theme.borderRadius,
		backgroundColor: theme.background,
		color: theme.contentPrimary,
		fontSize: fontSize.small,
		fontFamily: "inherit",
		outline: {
			default: "none",
			":focus": `2px solid ${theme.focusRing}`,
		},
		outlineOffset: "2px",
		boxSizing: "border-box",
	},
});
