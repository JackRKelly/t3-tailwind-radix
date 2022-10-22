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

interface Props {}

const Tabs = (props: Props) => {
	return (
		<TabsPrimitive.Root defaultValue="tab1" className="border border-primitive-edge rounded-lg">
			<TabsPrimitive.List className={cx("flex w-full rounded-t-lg bg-primitive-faint")}>
				{tabs.map(({ title, value }) => (
					<TabsPrimitive.Trigger
						key={`tab-trigger-${value}`}
						value={value}
						className={cx(
							"group first:rounded-tl-lg last:rounded-tr-lg border-b first:border-r last:border-l border-primitive-edge radix-state-active:primitive-bold radix-state-active:border-b-primitive-edge-extra-bold radix-state-active:bg-primitive-faint focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-primitive flex-1 px-3 py-2.5 focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75"
						)}
					>
						<span className={cx("text-sm font-medium text-primitive-type")}>{title}</span>
					</TabsPrimitive.Trigger>
				))}
			</TabsPrimitive.List>
			{tabs.map(({ value }) => (
				<TabsPrimitive.Content
					key={`tab-content-${value}`}
					value={value}
					className={cx(
						"rounded-b-lg bg-primitive px-6 py-4 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75"
					)}
				>
					<span className="text-sm text-primitive-type">
						{
							{
								tab1: "Your inbox is empty",
								tab2: "Make some coffee",
								tab3: "Order more coffee"
							}[value]
						}
					</span>
				</TabsPrimitive.Content>
			))}
		</TabsPrimitive.Root>
	);
};

export default Tabs;
