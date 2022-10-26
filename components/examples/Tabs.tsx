import * as Tabs from "../Tabs";

export const TabsExample = () => {
	return (
		<Tabs.Root defaultValue="tab1">
			<Tabs.List>
				<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
				<Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
				<Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="tab1">Your inbox is empty</Tabs.Content>
			<Tabs.Content value="tab2">Make some coffee</Tabs.Content>
			<Tabs.Content value="tab3">Order more coffee</Tabs.Content>
		</Tabs.Root>
	);
};
