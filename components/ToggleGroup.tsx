import { tw } from "../utils/tw";
import { FontBoldIcon, FontItalicIcon, UnderlineIcon } from "@radix-ui/react-icons";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import React, { ReactElement } from "react";

interface ToggleItem {
	value: string;
	label: string;
	icon: ReactElement;
}

const settings: ToggleItem[] = [
	{
		value: "bold",
		label: "Font bold",
		icon: <FontBoldIcon />
	},
	{
		value: "italic",
		label: "Font italic",
		icon: <FontItalicIcon />
	},
	{
		value: "underline",
		label: "Underline",
		icon: <UnderlineIcon />
	}
];

const Item = tw(
	ToggleGroupPrimitive.Item
)`group radix-state-on:bg-primitive-bold bg-primitive-faint border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x border-primitive-edge radix-state-on:border-transparent focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-highlight transition-button focus-visible:border-transparent`;

interface Props {}

export const ToggleGroup = (props: Props) => {
	return (
		<ToggleGroupPrimitive.Root type="multiple" aria-label="Font settings">
			{settings.map(({ value, label, icon }, i) => (
				<Item key={`group-item-${value}-${label}`} value={value} aria-label={label}>
					{React.cloneElement(icon, {
						className: "w-5 h-5 text-primitive-type"
					})}
				</Item>
			))}
		</ToggleGroupPrimitive.Root>
	);
};
