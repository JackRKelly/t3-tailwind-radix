import { tw } from "../utils/tw";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className">;

const _Button = tw.button`
	inline-flex select-none bg-primitive-faint items-center
	justify-center rounded-md px-4 py-2 text-sm font-medium
	border border-primitive-edge
	text-primitive-type hover:bg-primitive focus:outline-none
	focus-visible:ring focus-visible:ring-highlight
	group first-line:radix-state-open:bg-primitive-bold
  first-letter:radix-state-instant-open:bg-primitive-bold
	radix-state-delayed-open:bg-primitive-bold
	transition-button focus-visible:border-transparent
`;

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => (
	<_Button ref={ref} {...props}>
		{children}
	</_Button>
));

Button.displayName = "Button";
export default Button;
