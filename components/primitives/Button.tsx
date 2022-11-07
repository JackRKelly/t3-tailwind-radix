import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import __LinkNext from "next/link";
import React from "react";

type LinkProps = {
	type: "link";
} & React.ComponentProps<"a"> &
	VariantProps<typeof styles>;

type ButtonProps = {
	type?: "button";
} & React.ComponentProps<"button"> &
	VariantProps<typeof styles>;

type NextLinkProps = {
	type: "next-link";
} & React.ComponentProps<typeof __LinkNext> &
	VariantProps<typeof styles>;

type PolymorphicProps = LinkProps | ButtonProps | NextLinkProps;

type PolymorphicButton = {
	(props: LinkProps): JSX.Element;
	(props: ButtonProps): JSX.Element;
	(props: NextLinkProps): JSX.Element;
};

const styles = cva(
	"inline-flex select-none items-center justify-center focus:outline-none focus-visible:ring focus-visible:ring-highlight group transition-button focus-visible:border-transparent",
	{
		variants: {
			rounded: {
				md: "rounded-md"
			},
			size: {
				md: "px-4 py-2"
			},
			shade: {
				primary: "bg-primary text-white",
				primitive:
					"bg-primitive-faint border border-primitive-edge text-primitive-type hover:bg-primitive"
			},
			fontSize: {
				md: "text-base",
				sm: "text-sm",
				xs: "text-xs"
			},
			fontWeight: {
				thin: "font-thin",
				extralight: "font-extralight",
				light: "font-light",
				normal: "font-normal",
				medium: "font-medium",
				semibold: "font-semibold",
				bold: "font-bold",
				extrabold: "font-extrabold"
			}
		},
		defaultVariants: {
			fontSize: "sm",
			fontWeight: "medium",
			size: "md",
			rounded: "md",
			shade: "primitive"
		}
	}
);

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, PolymorphicProps>(
	(props, ref) => {
		const { type, className, children, ...rest } = props;

		switch (type) {
			case "link":
				return (
					//@ts-ignore
					<a className={clsx(styles(props), className)} ref={ref} {...rest}>
						{children}
					</a>
				);
			case "next-link":
				return (
					//@ts-ignore
					<__LinkNext className={clsx(styles(props), className)} ref={ref} {...rest}>
						{children}
					</__LinkNext>
				);
			default:
				return (
					//@ts-ignore
					<button className={clsx(styles(props), className)} ref={ref} {...rest}>
						{children}
					</button>
				);
		}
	}
) as PolymorphicButton;
