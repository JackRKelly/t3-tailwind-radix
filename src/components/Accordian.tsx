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
)`group radix-state-closed:rounded-lg radix-state-open:rounded-t-lg focus:outline-none inline-flex w-full items-center justify-between bg-primitive-faint hover:bg-primitive border-t border-x radix-state-closed:border-b border-primitive-edge px-4 py-2 text-left focus-visible:border-transparent transition-button`;

const Item = tw(
	AccordionPrimitive.Item
)`rounded-lg focus-within:ring focus-within:ring-highlight focus:outline-none`;

const ChevronDownIcon = tw(
	_ChevronDownIcon
)`ml-2 h-5 w-5 shrink-0 text-primitive-type ease-in-out group-radix-state-open:rotate-180 duration-150`;

const TriggerInner = tw.span`text-sm font-medium text-primitive-type`;

const Content = tw(
	AccordionPrimitive.Content
)`pt-1 w-full rounded-b-lg bg-primitive-faint border-x border-b border-primitive-edge px-4 pb-3`;

const ContentInner = tw.div`text-sm text-primitive-type-faint`;

const Header = tw(AccordionPrimitive.Header)`w-full`;

export const Accordion = () => {
	return (
		<Root type="multiple">
			{items.map(({ header, content }, i) => (
				<Item key={`header-${i}`} value={`item-${i + 1}`}>
					<Header>
						<Trigger className="group">
							<TriggerInner>{header}</TriggerInner>
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
