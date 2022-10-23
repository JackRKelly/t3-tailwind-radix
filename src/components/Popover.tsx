import { tw } from "../utils/tw";
import Button from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import cx from "clsx";
import React from "react";

interface Props {}

const items = [
	{
		id: "width",
		label: "Width",
		defaultValue: "100%"
	},
	{
		id: "max-width",
		label: "Max. width",
		defaultValue: "300px"
	},
	{
		id: "height",
		label: "Height",
		defaultValue: "25px"
	},
	{
		id: "max-height",
		label: "Max. height",
		defaultValue: "none"
	}
];

const Form = tw.form`mt-4 space-y-2`;

const Header = tw.h3`text-base font-semibold text-primitive-type-bold`;

const Arrow = tw(PopoverPrimitive.Arrow)`fill-current text-primitive-edge`;

const Content = tw(
	PopoverPrimitive.Content
)`radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down w-48 rounded-lg p-4 md:w-56 bg-primitive-faint border border-primitive-edge z-10`;

const Fieldset = tw.fieldset`flex items-center`;

const Close = tw(
	PopoverPrimitive.Close
)`absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-60`;

const Wrapper = tw.div`relative inline-block text-left`;

const Popover = (props: Props) => {
	return (
		<Wrapper>
			<PopoverPrimitive.Root>
				<PopoverPrimitive.Trigger asChild>
					<Button>Click</Button>
				</PopoverPrimitive.Trigger>
				<Content align="center" sideOffset={4}>
					<Arrow />
					<Header>Dimensions</Header>

					<Form>
						{items.map(({ id, label, defaultValue }) => {
							return (
								<Fieldset key={`popover-items-${id}`}>
									<Label htmlFor={id} className="shrink-0 grow">
										{label}
									</Label>
									<Input
										id={id}
										type="text"
										className="w-1/2"
										defaultValue={defaultValue}
										autoComplete="given-name"
									/>
								</Fieldset>
							);
						})}
					</Form>

					<Close>
						<Cross1Icon className="h-4 w-4 text-primitive-type hover:text-primitive-type-bold" />
					</Close>
				</Content>
			</PopoverPrimitive.Root>
		</Wrapper>
	);
};

export default Popover;
