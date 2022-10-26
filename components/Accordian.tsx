import { tw } from "../utils/tw";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon as _ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

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
		header: "Each primitive can be installed individually so we can adopt them incrementally?",
		content: "Yes!"
	},
	{
		header: "Is it accessible?",
		content: "Yes!"
	}
];

const Root = tw(AccordionPrimitive.Root)`space-y-4 w-full max-w-xl`;

const Trigger = tw(
	AccordionPrimitive.Trigger
)`radix-state-closed:rounded-lg radix-state-open:rounded-t-lg group focus:outline-none inline-flex w-full items-center justify-between bg-primitive-faint hover:bg-primitive border radix-state-open:border-b-transparent border-primitive-edge px-4 py-2 text-left group-focus-within:border-transparent transition-button`;

const Item = tw(
	AccordionPrimitive.Item
)`rounded-lg overflow-hidden group focus-within:ring focus-within:ring-highlight focus:outline-none transition-button`;

const ChevronDownIcon = tw(
	_ChevronDownIcon
)`ml-2 h-5 w-5 shrink-0 text-primitive-type ease-in-out group-radix-state-open:rotate-180 duration-150`;

const TriggerHeader = tw.span`text-sm font-medium text-primitive-type`;

const Content = tw(
	AccordionPrimitive.Content
)`rounded-b-lg radix-state-open:animate-collapsible-in radix-state-closed:animate-collapsible-out overflow-y-hidden w-full bg-primitive-faint transition-all`;

const ContentInner = tw.div`rounded-b-lg text-sm text-primitive-type-faint px-4 pb-3 pt-1 border-x border-b border-primitive-edge transition-all group-focus-within:border-transparent`;

const Header = tw(AccordionPrimitive.Header)`w-full`;

export const Accordion = () => {
	return (
		<Root type="multiple">
			{items.map(({ header, content }, i) => (
				<Item key={`header-${i}`} value={`item-${i + 1}`}>
					<Header>
						<Trigger>
							<TriggerHeader>{header}</TriggerHeader>
							<ChevronDownIcon />
						</Trigger>
					</Header>
					<Content>
						<ContentInner>{content}</ContentInner>
					</Content>
				</Item>
			))}
		</Root>
	);
};
