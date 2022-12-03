import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

export const labelStyles = cva(null, {
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
		size: "sm",
		weight: "medium",
		shade: "faint"
	}
});

type InputProps = React.ComponentProps<"label"> & VariantProps<typeof labelStyles>;

export const Label = (props: InputProps) => {
	const { className, ...rest } = props;

	return <label className={clsx(labelStyles(props), className)} {...rest} />;
};
