import * as Accordian from "../Accordian";

export const AccordianExample = () => (
	<Accordian.Root type="multiple">
		<Accordian.Item
			value="faq-1"
			header={<Accordian.Header>What is Radix UI?</Accordian.Header>}
			content={
				<Accordian.Content>
					Radix Primitives is a low-level UI component library with a focus on accessibility,
					customization and developer experience. You can use these components either as the base
					layer of your design system, or adopt them incrementally.
				</Accordian.Content>
			}
		/>
		<Accordian.Item
			value="faq-2"
			header={<Accordian.Header>Does it support incremental adoption?</Accordian.Header>}
			content={
				<Accordian.Content>
					Each primitive can be installed individually so they can be adopted incrementally
				</Accordian.Content>
			}
		/>
		<Accordian.Item
			value="faq-3"
			header={<Accordian.Header>Is it accessible?</Accordian.Header>}
			content={
				<Accordian.Content>
					Each primitive component is built with an accessibility first approach
				</Accordian.Content>
			}
		/>
	</Accordian.Root>
);
