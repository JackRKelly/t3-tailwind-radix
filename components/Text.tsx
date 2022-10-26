import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

const styles = cva("text-type", {
	variants: {
		size: {
			xl: "text-lg md:text-xl",
			lg: "text-base md:text-lg",
			md: "text-sm md:text-base",
			sm: "text-sm",
			xs: "text-xs"
		},
		weight: {
			thin: "font-thin",
			extralight: "font-extralight",
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
			extrabold: "font-extrabold",
			black: "font-black"
		}
	},
	defaultVariants: {
		size: "lg",
		weight: "normal"
	}
});

interface Props extends VariantProps<typeof styles> {
	className?: string;
}

export const Text = (props: PropsWithChildren<Props>) => {
	const { children, className } = props;

	return <p className={clsx(styles(props), className)}>{children}</p>;
};
