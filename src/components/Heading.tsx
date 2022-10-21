import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import tw, { TwStyle } from "twin.macro";

const styles = cva("font-medium tracking-tight", {
	variants: {
		size: {
			xl: "text-8xl",
			lg: "text-6xl",
			md: "text-3xl",
			sm: "text-xl",
			xs: "text-lg"
		}
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
