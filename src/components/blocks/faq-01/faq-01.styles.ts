import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize } from "@/lib/theme/tokens.stylex";

export const faqStyles = stylex.create({
	section: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingTop: spacing.xxxlarge,
		paddingBottom: spacing.xxxlarge,
		paddingLeft: spacing.medium,
		paddingRight: spacing.medium,
		width: "100%",
		boxSizing: "border-box",
	},
	inner: {
		width: "100%",
		maxWidth: 720,
		marginLeft: "auto",
		marginRight: "auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing.medium,
	},
	header: {
		textAlign: "center",
		marginBottom: spacing.medium,
	},
	title: {
		marginBottom: spacing.xsmall,
	},
	description: {
		color: theme.contentSecondary,
		maxWidth: 560,
	},
	search: {
		width: "100%",
		maxWidth: 480,
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
		"::placeholder": {
			color: theme.contentDisabled,
		},
		marginBottom: spacing.small,
		boxSizing: "border-box",
	},
	accordionWrapper: {
		width: "100%",
	},
	noResults: {
		textAlign: "center",
		padding: spacing.xlarge,
		color: theme.contentSecondary,
	},
});
