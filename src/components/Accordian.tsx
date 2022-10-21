import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon as _ChevronDownIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import React from "react";
import tw from "twin.macro";

interface AccordionItem {
	header: string;
	content: string;
}

const items: AccordionItem[] = [
	{
		header: "What is Radix UI?",
		content:
			"Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally."
	},
	{
		header: "Each primitive can be installed individually so you we adopt them incrementally?",
		content: "Yes!"
	},
	{
		header: "Is it accessible?",
		content: "Yes!"
	}
];

const Root = tw(AccordionPrimitive.Root)`space-y-4`;

const Trigger = tw(
	AccordionPrimitive.Trigger
)`radix-state-closed:rounded-lg radix-state-open:rounded-t-lg focus:outline-none inline-flex w-full items-center justify-between bg-gray-100 px-4 py-2 text-left dark:bg-gray-800`;

const Item = tw(
	AccordionPrimitive.Item
)`rounded-lg focus-within:ring focus-within:ring-primary-500 focus-within:ring-opacity-75 focus:outline-none`;

const ChevronDownIcon = tw(
	_ChevronDownIcon
)`ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400 group-radix-state-open:rotate-180 group-radix-state-open:duration-300`;

const TriggerInner = tw.span`text-sm font-medium text-gray-900 dark:text-gray-100`;

const Content = tw(
	AccordionPrimitive.Content
)`pt-1 w-full rounded-b-lg bg-gray-100 px-4 pb-3 dark:bg-gray-800`;

const ContentInner = tw.div`text-sm text-gray-700 dark:text-gray-400`;

const Accordion = () => {
	return (
		<Root type="multiple">
			{items.map(({ header, content }, i) => (
				<Item key={`header-${i}`} value={`item-${i + 1}`}>
					<AccordionPrimitive.Header className="w-full">
						<Trigger className="group">
							<TriggerInner>{header}</TriggerInner>
							<ChevronDownIcon />
						</Trigger>
					</AccordionPrimitive.Header>
					<Content>
						<ContentInner>{content}</ContentInner>
					</Content>
				</Item>
			))}
		</Root>
	);
};

export default Accordion;
