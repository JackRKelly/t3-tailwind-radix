import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { PropsWithChildren, ReactElement } from "react";
import { tw } from "../../utils/tw";

const _Item = tw(
	ToggleGroupPrimitive.Item
)`group radix-state-on:bg-primitive-bold bg-primitive-faint border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x border-primitive-edge radix-state-on:border-transparent focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-highlight transition-button focus-visible:border-transparent hover:bg-primitive`;

interface ItemProps extends ToggleGroupPrimitive.ToggleGroupItemProps {
	icon: ReactElement;
}

export const Item = (props: ItemProps) => {
	const { icon, ...rest } = props;

	return <_Item {...rest}>{icon}</_Item>;
};

type RootProps = PropsWithChildren &
	(ToggleGroupPrimitive.ToggleGroupSingleProps | ToggleGroupPrimitive.ToggleGroupMultipleProps);

export const Root = (props: RootProps) => {
	const { children, type, value, defaultValue, onValueChange, ...rest } = props;

	switch (type) {
		case "single":
			return (
				<ToggleGroupPrimitive.Root {...{ type, value, defaultValue, onValueChange, ...rest }}>
					{children}
				</ToggleGroupPrimitive.Root>
			);
		case "multiple":
			return (
				<ToggleGroupPrimitive.Root {...{ type, value, defaultValue, onValueChange, ...rest }}>
					{children}
				</ToggleGroupPrimitive.Root>
			);
	}
};
