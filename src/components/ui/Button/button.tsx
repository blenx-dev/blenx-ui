import { mergeProps } from "@base-ui/react/merge-props";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import * as stylex from "@stylexjs/stylex";
import { borderRadiusStyles } from "@/utils/layout.styles";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { Spinner } from "../Spinner/spinner";
import {
	buttonSizes,
	buttonStyles,
	buttonVariantStyles,
} from "./button.styles";

type _BaseUIButtonProps = PropsWithStylex<ButtonPrimitive.Props>;

type ButtonProps = PropsWithStylex<_BaseUIButtonProps> & {
	variant?: keyof typeof buttonVariantStyles;
	size?: keyof typeof buttonSizes;
	disabled?: boolean;
	loading?: boolean;
	radius?: keyof typeof borderRadiusStyles;
	fullWidth?: boolean;
};

function Button({
	children,
	variant = "primary",
	size = "medium",
	disabled: disabledProp,
	loading,
	fullWidth,
	radius,
	style,
	...props
}: ButtonProps) {
	const isDisabled = Boolean(loading || disabledProp);
	const defaultProps = {
		...stylex.props(
			buttonStyles.base,
			fullWidth && buttonStyles.fullWidth,
			buttonVariantStyles[variant],
			buttonSizes[size],
			radius && borderRadiusStyles[radius],
			style,
		),
		"aria-disabled": loading || undefined,
		"data-loading": loading ? "" : undefined,
		"data-slot": "button",
		disabled: isDisabled,
	};
	return (
		<ButtonPrimitive {...mergeProps<"button">(defaultProps, props)}>
			{loading && (
				<Spinner
					style={buttonStyles.spinner}
					data-slot="button-loading-indicator"
				/>
			)}
			{children}
		</ButtonPrimitive>
	);
}

export { Button };
export type { ButtonProps };
