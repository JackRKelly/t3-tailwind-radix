import { tw } from "../../utils/tw";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import React, { PropsWithChildren, ReactElement } from "react";

const _Root = tw(
	ToolbarPrimitive.Root
)`flex space-x-4 rounded-lg bg-primitive-faint border border-primitive-edge px-2.5 py-2 transition-colors w-full max-w-xl`;

const _Item = tw(
	ToolbarPrimitive.ToggleItem
)`radix-state-on:bg-primitive-bold bg-primitive-faint border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x border-primitive-edge radix-state-on:border-transparent focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-highlight focus-visible:border-transparent transition-button hover:bg-primitive`;

export const Link = tw(
	ToolbarPrimitive.Link
)`text-sm text-primitive-type-faint focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-highlight transition-colors`;

export const Separator = tw(
	ToolbarPrimitive.Separator
)`mx-4 my-0.5 hidden h-auto w-px bg-primitive-edge-bold xl:flex transition-colors`;

interface ItemProps extends Pick<ToolbarPrimitive.ToolbarToggleItemProps, "value" | "aria-label"> {
	icon: ReactElement;
}

export const ToggleGroupItem = (props: ItemProps) => {
	const { value, "aria-label": ariaLabel, icon } = props;

	return (
		<_Item {...{ value }} aria-label={ariaLabel}>
			{React.cloneElement(icon, {
				className: "w-5 h-5 text-primitive-type"
			})}
		</_Item>
	);
};

type ToggleGroupProps = PropsWithChildren &
	(
		| Pick<
				ToolbarPrimitive.ToolbarToggleGroupSingleProps,
				"disabled" | "defaultValue" | "onValueChange" | "value" | "type" | "aria-label"
		  >
		| Pick<
				ToolbarPrimitive.ToolbarToggleGroupMultipleProps,
				"disabled" | "defaultValue" | "onValueChange" | "value" | "type" | "aria-label"
		  >
	);

export const ToggleGroup = (props: ToggleGroupProps) => {
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
				<ToolbarPrimitive.ToggleGroup
					{...{ type, value, onValueChange, defaultValue, disabled }}
					aria-label={ariaLabel}
				>
					{children}
				</ToolbarPrimitive.ToggleGroup>
			);
		case "multiple":
			return (
				<ToolbarPrimitive.ToggleGroup
					{...{ type, value, onValueChange, defaultValue, disabled }}
					aria-label={ariaLabel}
				>
					{children}
				</ToolbarPrimitive.ToggleGroup>
			);
	}
};

interface RootProps extends PropsWithChildren {}

export const Root = (props: RootProps) => {
	const { children } = props;
	return <_Root>{children}</_Root>;
};
