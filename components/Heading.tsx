import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

const styles = cva("tracking-tight text-primitive-type", {
	variants: {
		size: {
			xxl: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl",
			xl: "text-6xl",
			lg: "text-3xl",
			md: "text-xl",
			sm: "text-lg",
			xs: "text-base"
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
		size: "md",
		weight: "bold"
	}
});

interface Props extends VariantProps<typeof styles> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	children?: React.ReactNode;
	className?: string;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading: React.FC<PropsWithChildren<Props>> = (props) => {
	const { children, level = 1, className } = props;

	const Tag = `h${level}` as HeadingTag;

	return <Tag className={clsx(styles(props), className)}>{children}</Tag>;
};
