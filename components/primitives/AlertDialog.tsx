import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { PropsWithChildren, ReactNode } from "react";
import { tw } from "../../utils/tw";

const _Content = tw(
	AlertDialogPrimitive.Content
)`radix-state-closed:animate-fade-out radix-state-open:animate-fade-in fixed z-50 w-[95vw] max-w-md rounded-lg p-4 md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-app border border-primitive-edge focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

const _Title = tw(AlertDialogPrimitive.Title)`text-base font-semibold text-primitive-type-bold`;

const _Description = tw(
	AlertDialogPrimitive.Description
)`mt-2 text-sm font-normal text-primitive-type`;

const _Cancel = tw(
	AlertDialogPrimitive.Cancel
)`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-primitive-faint hover:bg-primitive text-primitive-type-bold border border-primitive-edge focus-visible:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const _Action = tw(
	AlertDialogPrimitive.Action
)`inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary-bold border border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const _Overlay = tw(
	AlertDialogPrimitive.Overlay
)`radix-state-closed:animate-fade-out radix-state-open:animate-fade-in fixed inset-0 z-20 bg-black/50`;

export const Action = (props: PropsWithChildren) => {
	const { children } = props;

	return <_Action>{children}</_Action>;
};

export const Cancel = (props: PropsWithChildren) => {
	const { children } = props;

	return <_Cancel>{children}</_Cancel>;
};

export const Description = (props: PropsWithChildren) => {
	const { children } = props;

	return <_Description>{children}</_Description>;
};

export const Title = (props: PropsWithChildren) => {
	const { children } = props;

	return <_Title>{children}</_Title>;
};

interface RootProps extends PropsWithChildren, AlertDialogPrimitive.AlertDialogProps {
	trigger: ReactNode;
}

export const Root = (props: RootProps) => {
	const { trigger, children, ...rest } = props;

	return (
		<AlertDialogPrimitive.Root {...rest}>
			<AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>
			<_Overlay />
			<_Content>{children}</_Content>
		</AlertDialogPrimitive.Root>
	);
};
