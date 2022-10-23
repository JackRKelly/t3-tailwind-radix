import { tw } from "../utils/tw";
import Button from "./Button";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectItemProps } from "@radix-ui/react-select";
import React from "react";

const ScrollUpButton = tw(
	SelectPrimitive.ScrollUpButton
)`flex items-center justify-center text-primitive-type`;

const Viewport = tw(
	SelectPrimitive.Viewport
)`bg-primitive-faint p-2 rounded-lg border border-primitive-edge`;

const Group = tw(SelectPrimitive.Group)`z-10`;

const ItemIndicator = tw(SelectPrimitive.ItemIndicator)`absolute left-2 inline-flex items-center`;

const ScrollDownButton = tw(
	SelectPrimitive.ScrollDownButton
)`flex items-center justify-center text-primitive-type`;

const Item = tw(
	SelectPrimitive.Item
)`relative flex items-center px-8 py-2 rounded-md text-sm text-primitive-type font-medium focus:bg-primitive radix-disabled:opacity-50 focus-visible:border-transparent focus:outline-none select-none`;

const Content = tw(SelectPrimitive.Content)`relative z-10`;

const SelectIcon = tw(SelectPrimitive.Icon)`ml-2`;

interface Props {
	options: [SelectItemProps, ...SelectItemProps[]];
	defaultValue?: string;
	ariaLabel: string;
}

const Select: React.FC<Props> = (props) => {
	const { options, ariaLabel, defaultValue } = props;

	return (
		<SelectPrimitive.Root
			defaultValue={
				defaultValue ?? (options.find((option) => !option.disabled)?.value || options[0].value)
			}
		>
			<SelectPrimitive.Trigger asChild aria-label={ariaLabel}>
				<Button>
					<SelectPrimitive.Value />
					<SelectIcon>
						<ChevronDownIcon />
					</SelectIcon>
				</Button>
			</SelectPrimitive.Trigger>
			<Content>
				<ScrollUpButton>
					<ChevronUpIcon />
				</ScrollUpButton>
				<Viewport>
					<Group>
						{options.map((option, i) => (
							<Item disabled={option.disabled} key={`${option.value}-${i}`} value={option.value}>
								<SelectPrimitive.ItemText>
									{option.textValue ?? option.value}
								</SelectPrimitive.ItemText>
								<ItemIndicator>
									<CheckIcon />
								</ItemIndicator>
							</Item>
						))}
					</Group>
				</Viewport>
				<ScrollDownButton>
					<ChevronDownIcon />
				</ScrollDownButton>
			</Content>
		</SelectPrimitive.Root>
	);
};

export default Select;
