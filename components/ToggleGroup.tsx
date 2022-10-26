import { tw } from "../utils/tw";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import React, { PropsWithChildren, ReactElement } from "react";

const _Item = tw(
	ToggleGroupPrimitive.Item
)`group radix-state-on:bg-primitive-bold bg-primitive-faint border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x border-primitive-edge radix-state-on:border-transparent focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-highlight transition-button focus-visible:border-transparent hover:bg-primitive`;

interface ItemProps
	extends Pick<ToggleGroupPrimitive.ToggleGroupItemProps, "value" | "aria-label"> {
	icon: ReactElement;
}

export const Item = (props: ItemProps) => {
	const { value, "aria-label": ariaLabel, icon } = props;

	return (
		<_Item {...{ value }} aria-label={ariaLabel}>
			{React.cloneElement(icon, {
				className: "w-5 h-5 text-primitive-type"
			})}
		</_Item>
	);
};

type RootProps = PropsWithChildren &
	(
		| Pick<
				ToggleGroupPrimitive.ToggleGroupSingleProps,
				"disabled" | "defaultValue" | "onValueChange" | "value" | "type" | "aria-label"
		  >
		| Pick<
				ToggleGroupPrimitive.ToggleGroupMultipleProps,
				"disabled" | "defaultValue" | "onValueChange" | "value" | "type" | "aria-label"
		  >
	);

export const Root = (props: RootProps) => {
	const {
		children,
		type,
		value,
		onValueChange,
		defaultValue,
		disabled,
		"aria-label": ariaLabel
	} = props;

	switch (type) {
		case "single":
			return (
				<ToggleGroupPrimitive.Root
					{...{ type, value, onValueChange, defaultValue, disabled }}
					aria-label={ariaLabel}
				>
					{children}
				</ToggleGroupPrimitive.Root>
			);
		case "multiple":
			return (
				<ToggleGroupPrimitive.Root
					{...{ type, value, onValueChange, defaultValue, disabled }}
					aria-label={ariaLabel}
				>
					{children}
				</ToggleGroupPrimitive.Root>
			);
	}
};
