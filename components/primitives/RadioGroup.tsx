import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { PropsWithChildren } from "react";
import { tw } from "../../utils/tw";
import { Label } from "./Label";

const _Item = tw(
	RadioGroupPrimitive.Item
)`peer relative w-4 h-4 rounded-full text-white radix-state-checked:bg-primary radix-state-unchecked:bg-primitive-faint radix-state-unchecked:border border-primitive-edge focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-highlight transition-button`;

const _Indicator = tw(
	RadioGroupPrimitive.Indicator
)`absolute inset-0 flex items-center justify-center leading-0`;

const _IndicatorInner = tw.div`w-1.5 h-1.5 rounded-full bg-white`;

const _ItemWrapper = tw.div`flex items-center`;

const _ItemList = tw.div`mt-3 space-y-3`;

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
		<_ItemWrapper>
			<_Item {...{ id, value, defaultValue, disabled, required }}>
				<_Indicator>
					<_IndicatorInner />
				</_Indicator>
			</_Item>
			<Label htmlFor={id} size="sm" className="ml-2 block">
				{label ?? value}
			</Label>
		</_ItemWrapper>
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
			<_ItemList>{children}</_ItemList>
		</RadioGroupPrimitive.Root>
	);
};
