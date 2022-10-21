import clsx from "clsx";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className">;

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => (
	<button
		ref={ref}
		{...props}
		className="inline-flex select-none bg-button items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-button-type hover:bg-button-bold focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 group first-line:radix-state-open:bg-button-bold radix-state-on:bg-button-bold first-letter:radix-state-instant-open:bg-button-bold radix-state-delayed-open:bg-button-bold"
	>
		{children}
	</button>
));

Button.displayName = "Button";
export default Button;
