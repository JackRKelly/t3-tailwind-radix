import { tw } from "../../utils/tw";
import * as SliderPrimitive from "@radix-ui/react-slider";
import React from "react";

const _Root = tw(
	SliderPrimitive.Root
)`radix-orientation-vertical:h-64 radix-orientation-horizontal:w-64 radix-orientation-horizontal:h-5 radix-orientation-vertical:w-5 relative flex touch-none items-center justify-center`;

const _Track = tw(
	SliderPrimitive.Track
)`relative radix-orientation-horizontal:h-1 radix-orientation-vertical:w-1 radix-orientation-horizontal:w-full radix-orientation-vertical:h-full rounded-full bg-primitive transition-colors`;

const _Range = tw(SliderPrimitive.Range)`absolute h-full rounded-full bg-primary transition-colors`;

const _Thumb = tw(
	SliderPrimitive.Thumb
)`block h-5 w-5 rounded-full bg-primary focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

interface RootProps
	extends Pick<
		SliderPrimitive.SliderProps,
		| "min"
		| "orientation"
		| "value"
		| "onValueCommit"
		| "onValueChange"
		| "disabled"
		| "defaultValue"
		| "step"
		| "max"
		| "aria-label"
	> {}

export const Root = (props: RootProps) => {
	const {
		"aria-label": ariaLabel,
		defaultValue = [50],
		disabled,
		max = 100,
		min,
		onValueChange,
		onValueCommit,
		orientation,
		step,
		value
	} = props;

	return (
		<_Root
			aria-label={ariaLabel}
			{...{
				defaultValue,
				disabled,
				max,
				min,
				onValueChange,
				onValueCommit,
				orientation,
				step,
				value
			}}
		>
			<_Track>
				<_Range />
			</_Track>
			<_Thumb />
		</_Root>
	);
};