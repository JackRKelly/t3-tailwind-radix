import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

export const inputStyles = cva(
	"mt-1 block w-full rounded-md focus-visible:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-input",
	{
		variants: {
			rounded: {
				md: "rounded-md"
			},
			size: {
				md: "px-2 py-2"
			},
			shade: {
				none: "",
				primary: "bg-primary text-white hover:bg-primary-bold",
				primitive:
					"bg-primitive-faint border border-primitive-edge text-primitive-type hover:bg-primitive placeholder:text-primitive-type-faint"
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
			fontWeight: "normal",
			size: "md",
			rounded: "md",
			shade: "primitive"
		}
	}
);

type InputProps = React.ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = (props: InputProps) => {
	const { className, ...rest } = props;

	return <input className={clsx(inputStyles(props), className)} {...rest} />;
};
