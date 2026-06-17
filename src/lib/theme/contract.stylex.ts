import * as stylex from "@stylexjs/stylex";

export const theme = stylex.defineVars({
	primary: "",
	primarySubtle: "",
	secondary: "",

	background: "",
	backgroundSubtle: "",

	surface: "",
	surfaceSubtle: "",
	surfaceRaised: "",
	surfaceHover: "",
	surfaceOverlay: "",

	border: "",
	borderSubtle: "",
	borderStrong: "",
	borderRadius: "",

	fontSize: "",
	contentPrimary: "",
	contentSecondary: "",
	contentDisabled: "",
	contentAccent: "",
	contentOnPrimary: "",
	contentInverse: "",

	sentimentNegative: "",
	sentimentNegativeSubtle: "",
	sentimentPositive: "",
	sentimentPositiveSubtle: "",
	sentimentWarning: "",
	sentimentWarningSubtle: "",
	sentimentInfo: "",
	sentimentInfoSubtle: "",

	focusRing: "",

	shadowSm: "",
	shadowMd: "",
	shadowLg: "",
	shadowXl: "",
	// Light theme

	primaryHover: "#27272a",
	primarySoftHover: "#e4e4e7",

	sentimentPositiveHover: "#16a34a",
	sentimentPositiveSoftHover: "#dcfce7",

	sentimentWarningHover: "#ca8a04",
	sentimentWarningSoftHover: "#fef9c3",

	sentimentNegativeHover: "#dc2626",
	sentimentNegativeSoftHover: "#fee2e2",

	sentimentInfoHover: "#2563eb",
	sentimentInfoSoftHover: "#dbeafe",
});
