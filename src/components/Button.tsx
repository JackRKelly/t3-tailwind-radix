import clsx from "clsx";
import React from "react";

type Props = Omit<React.ComponentProps<"button">, "className">;

const Button = React.forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => (
	<button
		ref={ref}
		{...props}
		className="inline-flex select-none bg-primitive items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primitive-type hover:bg-primitive-bold focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75 group first-line:radix-state-open:bg-primitive-bold radix-state-on:bg-primitive-bold first-letter:radix-state-instant-open:bg-primitive-bold radix-state-delayed-open:bg-primitive-bold"
	>
		{children}
	</button>
));

Button.displayName = "Button";
export default Button;
