import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius as radiusTokens } from "@/lib/theme/tokens.stylex";
import { useThemeBuilder } from "./theme-builder-context";

const radiusMap: Record<string, string> = {
	none: "0px",
	small: radiusTokens.small,
	medium: radiusTokens.medium,
	large: radiusTokens.large,
	pill: radiusTokens.full,
};

export function ThemePreviewProvider({ children }: { children: ReactNode }) {
	const tokens = useThemeBuilder((s) => s.tokens);

	const themeClass = useMemo(
		() =>
			stylex.createTheme(theme, {
				primary: tokens.primary,
				primarySubtle: tokens.primarySubtle,
				secondary: tokens.secondary,
				background: tokens.background,
				backgroundSubtle: tokens.backgroundSubtle,
				surface: tokens.surface,
				surfaceSubtle: tokens.surfaceSubtle,
				surfaceRaised: tokens.surfaceRaised,
				surfaceHover: tokens.surfaceHover,
				surfaceOverlay: tokens.surfaceOverlay,
				border: tokens.border,
				borderSubtle: tokens.borderSubtle,
				borderStrong: tokens.borderStrong,
				contentPrimary: tokens.contentPrimary,
				contentSecondary: tokens.contentSecondary,
				contentDisabled: tokens.contentDisabled,
				contentAccent: tokens.contentAccent,
				contentOnPrimary: tokens.contentOnPrimary,
				contentInverse: tokens.contentInverse,
				sentimentNegative: tokens.sentimentNegative,
				sentimentNegativeSubtle: tokens.sentimentNegativeSubtle,
				sentimentPositive: tokens.sentimentPositive,
				sentimentPositiveSubtle: tokens.sentimentPositiveSubtle,
				sentimentWarning: tokens.sentimentWarning,
				sentimentWarningSubtle: tokens.sentimentWarningSubtle,
				sentimentInfo: tokens.sentimentInfo,
				sentimentInfoSubtle: tokens.sentimentInfoSubtle,
				focusRing: tokens.focusRing,
				shadowSm: tokens.shadowSm,
				shadowMd: tokens.shadowMd,
				shadowLg: tokens.shadowLg,
				shadowXl: tokens.shadowXl,
				fontSize: tokens.baseFontSize,
				borderRadius: radiusMap[tokens.radius] ?? radiusTokens.medium,
			}),
		[tokens],
	);

	return <div {...stylex.props(themeClass)}>{children}</div>;
}
