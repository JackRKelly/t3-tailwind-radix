import React from "react";
import { tw } from "../../utils/tw";

type Props = React.ComponentProps<"button">;

const _Button = tw.button`inline-flex select-none bg-primitive-faint items-center justify-center rounded-md px-4 py-2 text-sm font-medium border border-primitive-edge text-primitive-type hover:bg-primitive focus:outline-none focus-visible:ring focus-visible:ring-highlight group transition-button focus-visible:border-transparent`;

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
	return (
		<_Button ref={ref} {...props}>
			{children}
		</_Button>
	);
});

Button.displayName = "Button";
export { Button };
