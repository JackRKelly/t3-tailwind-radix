import { styleGroups, tw } from "../utils/tw";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";

interface PopoverItem {
	id: string;
	label: string;
	defaultValue?: string;
	type?: React.HTMLInputTypeAttribute;
	autoComplete?: string;
}

const items: PopoverItem[] = [
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
		defaultValue: "none",
		type: "text"
	}
];

const Form = tw.form`mt-4 space-y-2`;

const Header = tw.h3`text-base font-semibold text-primitive-type-bold`;

const Arrow = tw(PopoverPrimitive.Arrow)`fill-current text-primitive-edge`;

const Content = tw(
	PopoverPrimitive.Content
)`radix-state-open:radix-side-top:animate-slide-down-fade-in radix-state-closed:radix-side-top:animate-slide-down-fade-out radix-state-open:radix-side-right:animate-slide-left-fade-in radix-state-closed:radix-side-right:animate-slide-left-fade-out radix-state-open:radix-side-bottom:animate-slide-up-fade-in radix-state-closed:radix-side-bottom:animate-slide-up-fade-out radix-state-open:radix-side-left:animate-slide-right-fade-in radix-state-closed:radix-side-left:animate-slide-right-fade-out w-48 md:w-56 bg-primitive-faint backdrop-blur bg-opacity-[90%] z-10 rounded-lg`;

const ContentInner = tw.div`border border-primitive-edge rounded-lg p-4`;

const Fieldset = tw.fieldset`flex items-center`;

const Close = tw(
	PopoverPrimitive.Close
)`absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Wrapper = tw.div`relative inline-block text-left`;

interface Props {}

export const Popover = (props: Props) => {
	return (
		<Wrapper>
			<PopoverPrimitive.Root>
				<PopoverPrimitive.Trigger asChild>
					<Button>Click</Button>
				</PopoverPrimitive.Trigger>

				<Content align="center" sideOffset={4}>
					<ContentInner>
						<Arrow />
						<Header>Dimensions</Header>
						<Form>
							{items.map(({ id, label, defaultValue, autoComplete, type = "text" }) => {
								return (
									<Fieldset key={`popover-items-${id}`}>
										<Label htmlFor={id} className="shrink-0 grow">
											{label}
										</Label>
										<Input
											id={id}
											type={type}
											className="w-1/2"
											defaultValue={defaultValue}
											autoComplete={autoComplete}
										/>
									</Fieldset>
								);
							})}
						</Form>
						<Close>
							<Cross1Icon className="h-4 w-4 text-primitive-type hover:text-primitive-type-bold" />
						</Close>
					</ContentInner>
				</Content>
			</PopoverPrimitive.Root>
		</Wrapper>
	);
};
