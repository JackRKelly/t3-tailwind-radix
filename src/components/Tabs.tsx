import { tw } from "../utils/tw";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import cx from "clsx";
import React from "react";

interface Tab {
	title: string;
	value: string;
}

const tabs: Tab[] = [
	{
		title: "Inbox",
		value: "tab1"
	},
	{
		title: "Today",
		value: "tab2"
	},

	{
		title: "Upcoming",
		value: "tab3"
	}
];

const Root = tw(TabsPrimitive.Root)`border border-primitive-edge rounded-lg`;

const List = tw(TabsPrimitive.List)`flex w-full rounded-t-lg bg-primitive-faint`;

const Trigger = tw(
	TabsPrimitive.Trigger
)`group first:rounded-tl-lg last:rounded-tr-lg border-b first:border-r last:border-l border-primitive-edge radix-state-active:bg-primitive-bold focus-visible:radix-state-active:border-b-transparent radix-state-inactive:hover:bg-primitive radix-state-inactive:bg-primitive-faint flex-1 px-3 py-2.5 focus:outline-none focus-visible:ring focus-visible:ring-highlight focus:z-10 focus-visible:border-transparent transition-button`;

const TriggerInner = tw.span`text-sm font-medium text-primitive-type`;

const Content = tw(
	TabsPrimitive.Content
)`relative rounded-b-lg bg-primitive-faint px-6 py-4 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-colors`;

const ContentInner = tw.span`text-sm text-primitive-type transition-colors`;

interface Props {}

export const Tabs = (props: Props) => {
	return (
		<Root defaultValue="tab1">
			<List>
				{tabs.map(({ title, value }, i) => (
					<Trigger key={`tab-trigger-${value}`} value={value}>
						<TriggerInner>{title}</TriggerInner>
					</Trigger>
				))}
			</List>
			{tabs.map(({ value }) => (
				<Content key={`tab-content-${value}`} value={value}>
					<ContentInner>
						{
							{
								tab1: "Your inbox is empty",
								tab2: "Make some coffee",
								tab3: "Order more coffee"
							}[value]
						}
					</ContentInner>
				</Content>
			))}
		</Root>
	);
};
