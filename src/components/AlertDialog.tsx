import { tw } from "../utils/tw";
import Button from "./Button";
import { Transition } from "@headlessui/react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Fragment, useState } from "react";

const Content = tw(
	AlertDialogPrimitive.Content
)`fixed z-50 w-[95vw] max-w-md rounded-lg p-4 md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-app border border-primitive-edge focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-60`;

const Title = tw(AlertDialogPrimitive.Title)`text-base font-semibold text-primitive-type-bold`;

const Description = tw(
	AlertDialogPrimitive.Description
)`mt-2 text-sm font-normal text-primitive-type`;

const ActionWrapper = tw.div`mt-4 flex justify-end space-x-2`;

const Cancel = tw(
	AlertDialogPrimitive.Cancel
)`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-primitive-faint hover:bg-primitive text-primitive-type-bold border border-primitive-edge focus-visible:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-60`;

const Action = tw(
	AlertDialogPrimitive.Action
)`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary-bold border border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-60`;

const Overlay = tw(AlertDialogPrimitive.Overlay)`fixed inset-0 z-20 bg-black/50`;

interface Props {}

const AlertDialog = (props: Props) => {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogPrimitive.Trigger asChild>
				<Button>Click</Button>
			</AlertDialogPrimitive.Trigger>
			<Transition.Root show={isOpen}>
				<Transition.Child
					as={Fragment as any}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Overlay forceMount />
				</Transition.Child>
				<Transition.Child
					as={Fragment as any}
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Content forceMount>
						<Title>Are you absolutely sure?</Title>
						<Description>
							This action cannot be undone. This will permanently delete your account and remove
							your data from our servers.
						</Description>
						<ActionWrapper>
							<Cancel>Cancel</Cancel>
							<Action>Confirm</Action>
						</ActionWrapper>
					</Content>
				</Transition.Child>
			</Transition.Root>
		</AlertDialogPrimitive.Root>
	);
};

export default AlertDialog;
