import { tw } from "../utils/tw";
import { Label } from "./Label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React, { PropsWithChildren } from "react";

const items = [
	{ id: "red", title: "Bulbasaur" },
	{ id: "green", title: "Charmader" },
	{ id: "blue", title: "Squirtle" }
];

const _Item = tw(
	RadioGroupPrimitive.Item
)`peer relative w-4 h-4 rounded-full text-white radix-state-checked:bg-primary radix-state-unchecked:bg-primitive-faint radix-state-unchecked:border border-primitive-edge focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-highlight transition-button`;

const Indicator = tw(
	RadioGroupPrimitive.Indicator
)`absolute inset-0 flex items-center justify-center leading-0`;

const IndicatorInner = tw.div`w-1.5 h-1.5 rounded-full bg-white`;

const ItemWrapper = tw.div`flex items-center`;

const ItemList = tw.div`mt-3 space-y-3`;

interface ItemProps
	extends Pick<
		RadioGroupPrimitive.RadioGroupItemProps,
		"disabled" | "required" | "value" | "defaultValue"
	> {
	id: string;
	label?: string;
}

export const Item = (props: ItemProps) => {
	const { id, value, label, defaultValue, disabled, required } = props;
	return (
		<ItemWrapper>
			<_Item {...{ id, value, defaultValue, disabled, required }}>
				<Indicator>
					<IndicatorInner />
				</Indicator>
			</_Item>
			<Label htmlFor={id} size="sm" className="ml-2 block">
				{label ?? value}
			</Label>
		</ItemWrapper>
	);
};

interface RootProps
	extends PropsWithChildren,
		Pick<
			RadioGroupPrimitive.RadioGroupProps,
			"aria-label" | "value" | "defaultValue" | "onValueChange"
		> {}

export const Root = (props: RootProps) => {
	const { value, defaultValue, onValueChange, children, "aria-label": ariaLabel } = props;

	return (
		<RadioGroupPrimitive.Root aria-label={ariaLabel} {...{ value, defaultValue, onValueChange }}>
			<ItemList>{children}</ItemList>
		</RadioGroupPrimitive.Root>
	);
};
