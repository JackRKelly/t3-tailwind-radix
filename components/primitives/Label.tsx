import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, VariantProps } from "class-variance-authority";
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
		shade: {
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
		shade: "normal"
	}
});

interface LabelProps
	extends PropsWithChildren,
		LabelPrimitive.LabelProps,
		VariantProps<typeof styles> {
	className?: string;
}

export const Label = (props: LabelProps) => {
	const { children, className, ...rest } = props;

	return (
		<LabelPrimitive.Root {...rest} className={clsx(styles(props), className)}>
			{children}
		</LabelPrimitive.Root>
	);
};
