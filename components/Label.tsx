import { tw } from "../utils/tw";
import * as LabelPrimitive from "@radix-ui/react-label";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const styles = cva(null, {
	variants: {
		size: {
			lg: "text-lg",
			md: "text-md",
			sm: "text-sm",
			xs: "text-xs"
		},
		color: {
			bold: "text-primitive-type-bold",
			normal: "text-primitive-type",
			faint: "text-primitive-type-faint"
		},
		weight: {
			thin: "font-thin",
			extralight: "font-extralight",
			light: "font-light",
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold"
		}
	},
	defaultVariants: {
		size: "xs",
		weight: "medium",
		color: "normal"
	}
});

interface LabelProps
	extends PropsWithChildren,
		Pick<LabelPrimitive.LabelProps, "htmlFor">,
		VariantProps<typeof styles> {
	className?: string;
}

export const Label = (props: LabelProps) => {
	const { children, htmlFor, className } = props;

	return (
		<LabelPrimitive.Root {...{ htmlFor }} className={clsx(styles(props), className)}>
			{children}
		</LabelPrimitive.Root>
	);
};
