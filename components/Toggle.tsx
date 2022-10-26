import { tw } from "../utils/tw";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { PropsWithChildren } from "react";

interface RootProps
	extends PropsWithChildren,
		Pick<
			TogglePrimitive.ToggleProps,
			"defaultPressed" | "onPressedChange" | "pressed" | "disabled"
		> {}

export const Root = (props: RootProps) => {
	const { children, defaultPressed, disabled, onPressedChange, pressed } = props;

	return (
		<TogglePrimitive.Root {...{ defaultPressed, disabled, onPressedChange, pressed }} asChild>
			{children}
		</TogglePrimitive.Root>
	);
};
