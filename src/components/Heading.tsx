import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

const styles = cva("tracking-tight", {
	variants: {
		size: {
			xl: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl",
			lg: "text-6xl",
			md: "text-3xl",
			sm: "text-xl",
			xs: "text-lg"
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
		weight: "bold"
	}
});

interface Props extends VariantProps<typeof styles> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	children?: React.ReactNode;
	className?: string;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading: React.FC<Props> = (props) => {
	const { children, level = 1, className } = props;

	const Tag = `h${level}` as HeadingTag;

	return <Tag className={clsx(styles(props), className)}>{children}</Tag>;
};
