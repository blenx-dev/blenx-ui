import * as stylex from "@stylexjs/stylex";
import { mediaQueries } from "@/lib/theme/tokens.stylex";

export const responsiveGridColumns = stylex.create({
	base1: { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
	sm1: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
	},
	md1: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
	},
	lg1: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
	},
	xl1: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(1, minmax(0, 1fr))" },
	},
	base2: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
	sm2: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
	},
	md2: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
	},
	lg2: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
	},
	xl2: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
	},
	base3: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
	sm3: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
	},
	md3: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
	},
	lg3: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
	},
	xl3: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
	},
	base4: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
	sm4: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
	},
	md4: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
	},
	lg4: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
	},
	xl4: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
	},
	base5: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" },
	sm5: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" },
	},
	md5: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" },
	},
	lg5: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" },
	},
	xl5: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" },
	},
	base6: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
	sm6: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
	},
	md6: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
	},
	lg6: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
	},
	xl6: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(6, minmax(0, 1fr))" },
	},
	base7: { gridTemplateColumns: "repeat(7, minmax(0, 1fr))" },
	sm7: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(7, minmax(0, 1fr))" },
	},
	md7: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(7, minmax(0, 1fr))" },
	},
	lg7: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(7, minmax(0, 1fr))" },
	},
	xl7: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(7, minmax(0, 1fr))" },
	},
	base8: { gridTemplateColumns: "repeat(8, minmax(0, 1fr))" },
	sm8: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(8, minmax(0, 1fr))" },
	},
	md8: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(8, minmax(0, 1fr))" },
	},
	lg8: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(8, minmax(0, 1fr))" },
	},
	xl8: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(8, minmax(0, 1fr))" },
	},
	base9: { gridTemplateColumns: "repeat(9, minmax(0, 1fr))" },
	sm9: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(9, minmax(0, 1fr))" },
	},
	md9: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(9, minmax(0, 1fr))" },
	},
	lg9: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(9, minmax(0, 1fr))" },
	},
	xl9: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(9, minmax(0, 1fr))" },
	},
	base10: { gridTemplateColumns: "repeat(10, minmax(0, 1fr))" },
	sm10: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(10, minmax(0, 1fr))" },
	},
	md10: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(10, minmax(0, 1fr))" },
	},
	lg10: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(10, minmax(0, 1fr))" },
	},
	xl10: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(10, minmax(0, 1fr))" },
	},
	base11: { gridTemplateColumns: "repeat(11, minmax(0, 1fr))" },
	sm11: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(11, minmax(0, 1fr))" },
	},
	md11: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(11, minmax(0, 1fr))" },
	},
	lg11: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(11, minmax(0, 1fr))" },
	},
	xl11: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(11, minmax(0, 1fr))" },
	},
	base12: { gridTemplateColumns: "repeat(12, minmax(0, 1fr))" },
	sm12: {
		[mediaQueries.sm]: { gridTemplateColumns: "repeat(12, minmax(0, 1fr))" },
	},
	md12: {
		[mediaQueries.md]: { gridTemplateColumns: "repeat(12, minmax(0, 1fr))" },
	},
	lg12: {
		[mediaQueries.lg]: { gridTemplateColumns: "repeat(12, minmax(0, 1fr))" },
	},
	xl12: {
		[mediaQueries.xl]: { gridTemplateColumns: "repeat(12, minmax(0, 1fr))" },
	},
});
