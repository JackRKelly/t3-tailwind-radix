import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import __LinkNext from "next/link";
import React from "react";

type LinkNativeProps = {
	type: "link-native";
} & React.ComponentProps<"a"> &
	VariantProps<typeof styles>;

type ButtonNativeProps = {
	type: "button";
} & Omit<React.ComponentProps<"button">, "color"> &
	VariantProps<typeof styles>;

type LinkNextProps = {
	type: "link-next";
} & React.ComponentProps<typeof __LinkNext> &
	VariantProps<typeof styles>;

type ButtonNewProps = LinkNativeProps | ButtonNativeProps | LinkNextProps;

type ButtonTypes = "link-native" | "button" | "link-next";

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
			shade: "primary"
		}
	}
);

export const Button = (props: ButtonNewProps) => {
	const { type, children, ...rest } = props;

	const Component = buttonConstructor(type);

	//@ts-ignore
	return <Component {...rest}>{children}</Component>;
};

const buttonConstructor = (type: ButtonTypes) => {
	switch (type) {
		case "button":
			return React.forwardRef<HTMLButtonElement, ButtonNativeProps>(
				({ children, ...props }, ref) => {
					const { type, className, ...rest } = props;

					return (
						<button className={clsx(styles(props), className)} ref={ref} {...rest}>
							{children}
						</button>
					);
				}
			);
		case "link-native":
			return React.forwardRef<HTMLAnchorElement, LinkNativeProps>(({ children, ...props }, ref) => {
				const { type, className, ...rest } = props;

				return (
					<a className={clsx(styles(props), className)} ref={ref} {...rest}>
						{children}
					</a>
				);
			});
		case "link-next":
			return React.forwardRef<HTMLAnchorElement, LinkNextProps>(({ children, ...props }, ref) => {
				const { type, className, ...rest } = props;

				return (
					<__LinkNext className={clsx(styles(props), className)} ref={ref} {...rest}>
						{children}
					</__LinkNext>
				);
			});
	}
};
