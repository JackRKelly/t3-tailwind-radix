import * as TogglePrimitive from "@radix-ui/react-toggle";
import { PropsWithChildren } from "react";

interface RootProps extends PropsWithChildren, TogglePrimitive.ToggleProps {}

export const Root = (props: RootProps) => {
	const { children, ...rest } = props;

	return (
		<TogglePrimitive.Root {...rest} asChild>
			{children}
		</TogglePrimitive.Root>
	);
};
