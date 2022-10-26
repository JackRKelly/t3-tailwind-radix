import { tw } from "../utils/tw";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

const Title = tw(DialogPrimitive.Title)`text-base font-semibold text-primitive-type-bold`;

const Description = tw(DialogPrimitive.Description)`mt-2 text-sm font-normal text-primitive-type`;

const Action = tw(
	DialogPrimitive.Close
)`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary-bold border border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Cancel = tw(
	DialogPrimitive.Close
)`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-primitive-faint hover:bg-primitive text-primitive-type-bold border border-primitive-edge focus-visible:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Close = tw(
	DialogPrimitive.Close
)`absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Form = tw.form`mt-3 space-y-2`;

const Overlay = tw(
	DialogPrimitive.Overlay
)`radix-state-closed:animate-fade-out radix-state-open:animate-fade-in fixed inset-0 z-20 bg-black/50`;

const Content = tw(
	DialogPrimitive.Content
)`radix-state-closed:animate-fade-out radix-state-open:animate-fade-in fixed z-50 w-[95vw] max-w-md rounded-lg p-4 md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-app border border-primitive-edge focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

const ActionWrapper = tw.div`mt-4 flex justify-end space-x-2`;

interface Props {}

export const Dialog = (props: Props) => {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
			<DialogPrimitive.Trigger asChild>
				<Button>Click</Button>
			</DialogPrimitive.Trigger>
			<Overlay />
			<Content>
				<Title>Edit profile</Title>
				<Description>
					Make changes to your profile here. Click save when you&apos;re done.
				</Description>
				<Form>
					<fieldset>
						<Label htmlFor="firstName">First Name</Label>
						<Input id="firstName" type="text" placeholder="Tim" autoComplete="given-name" />
					</fieldset>
					<fieldset>
						<Label htmlFor="familyName">Family Name</Label>
						<Input id="familyName" type="text" placeholder="Cook" autoComplete="family-name" />
					</fieldset>
				</Form>

				<ActionWrapper>
					<Cancel>Cancel</Cancel>
					<Action>Save</Action>
				</ActionWrapper>

				<Close>
					<Cross1Icon className="h-4 w-4 text-gray-500 hover:text-primitive-type" />
				</Close>
			</Content>
		</DialogPrimitive.Root>
	);
};
