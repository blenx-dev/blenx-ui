import * as stylex from "@stylexjs/stylex";
import { Box, type BoxProps } from "../Box/box";
import { stackGapStyles as gridGapStyles } from "../Stack/stack.styles";
import {
	gridAlignStyles,
	gridColumnStyles,
	gridJustifyStyles,
	gridSpanStyles,
	gridStyles,
} from "./grid.styles";
import { responsiveGridColumns } from "./responsiveGrid.styles";

type SpacingToken = keyof typeof gridGapStyles;

export type Breakpoint = "base" | "sm" | "md" | "lg" | "xl";

export type ResponsiveColumns = Partial<
	Record<Breakpoint, keyof typeof gridColumnStyles>
>;

export type GridProps = BoxProps & {
	columns?: keyof typeof gridColumnStyles | ResponsiveColumns;
	gap?: SpacingToken;
	align?: "start" | "center" | "end" | "stretch";
	justify?: "start" | "center" | "end" | "stretch";
};

export type GridItemProps = BoxProps & {
	span?: keyof typeof gridSpanStyles;
};

const breakpointOrder: Breakpoint[] = ["base", "sm", "md", "lg", "xl"];

function resolveColumns(
	columns: GridProps["columns"],
): readonly stylex.StyleXStyles[] {
	if (!columns) return [];
	if (typeof columns === "number") {
		return [gridColumnStyles[columns] as stylex.StyleXStyles];
	}
	const result: stylex.StyleXStyles[] = [];
	for (const bp of breakpointOrder) {
		const col = columns[bp];
		if (col !== undefined) {
			const key = `${bp}${col}` as keyof typeof responsiveGridColumns;
			result.push(responsiveGridColumns[key] as stylex.StyleXStyles);
		}
	}
	return result;
}

function Grid({
	gap: gapProp = "medium",
	columns: columnsProp,
	align: alignProp,
	justify: justifyProp,
	style,
	...props
}: GridProps) {
	const columnStyles = resolveColumns(columnsProp);
	const resolvedStyles = stylex.props(
		...columnStyles,
		gridGapStyles[gapProp],
		alignProp && gridAlignStyles[alignProp],
		justifyProp && gridJustifyStyles[justifyProp],
		style,
	);

	return <Box display="grid" {...props} {...resolvedStyles} />;
}

function GridItem({ span: spanProp, style, ...props }: GridItemProps) {
	const resolvedStyles = stylex.props(
		gridStyles.item,
		spanProp && gridSpanStyles[spanProp],
		style,
	);
	return <Box {...props} {...resolvedStyles} />;
}

export { Grid, GridItem };
