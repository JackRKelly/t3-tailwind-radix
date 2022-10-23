import { tw } from "../utils/tw";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";

interface Props {}

const items = [
	{ id: "red", title: "Bulbasaur" },
	{ id: "green", title: "Charmader" },
	{ id: "blue", title: "Squirtle" }
];

const Item = tw(
	RadioGroupPrimitive.Item
)`peer relative w-4 h-4 rounded-full border border-transparent text-white radix-state-checked:bg-primary radix-state-unchecked:bg-primitive focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75`;

const Indicator = tw(
	RadioGroupPrimitive.Indicator
)`absolute inset-0 flex items-center justify-center leading-0`;

const IndicatorInner = tw.div`w-1.5 h-1.5 rounded-full bg-white`;

const Label = tw.label`ml-2 block text-sm font-medium text-primitive-type`;

const ItemWrapper = tw.div`flex items-center`;

const ItemList = tw.div`mt-3 space-y-3`;

const Legend = tw.legend`text-sm font-medium leading-4 text-primitive-type-bold`;

const RadioGroup = (props: Props) => {
	const [value, setValue] = React.useState(items[0].title);

	return (
		<form>
			<Legend>Choose your starter</Legend>
			<RadioGroupPrimitive.Root
				aria-label="Pokemon starters"
				defaultValue={"Bulbasaur"}
				onValueChange={setValue}
			>
				<ItemList>
					{items.map((item) => (
						<ItemWrapper key={item.id}>
							<Item id={item.id} value={item.title}>
								<Indicator>
									<IndicatorInner />
								</Indicator>
							</Item>
							<Label htmlFor={item.id}>{item.title}</Label>
						</ItemWrapper>
					))}
				</ItemList>
			</RadioGroupPrimitive.Root>
		</form>
	);
};

export default RadioGroup;
