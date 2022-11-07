import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { PropsWithChildren, ReactNode } from "react";
import { tw } from "../../utils/tw";
import { buttonStyles } from "./Button";

const _Close = tw(
	DialogPrimitive.Close
)`absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const _Overlay = tw(
	DialogPrimitive.Overlay
)`radix-state-closed:animate-fade-out radix-state-open:animate-fade-in fixed inset-0 z-20 bg-black/50`;

const _Content = tw(
	DialogPrimitive.Content
)`radix-state-closed:animate-fade-out radix-state-open:animate-fade-in fixed z-50 w-[95vw] max-w-md rounded-lg p-4 md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-app border border-primitive-edge focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

const _Title = tw(DialogPrimitive.Title)`text-base font-semibold text-primitive-type-bold`;

const _Description = tw(DialogPrimitive.Description)`mt-2 text-sm font-normal text-primitive-type`;

export const Action = (props: PropsWithChildren) => {
	const { children } = props;

	return (
		<DialogPrimitive.Close className={buttonStyles({ shade: "primary" })}>
			{children}
		</DialogPrimitive.Close>
	);
};

export const Cancel = (props: PropsWithChildren) => {
	const { children } = props;

	return <DialogPrimitive.Close className={buttonStyles()}>{children}</DialogPrimitive.Close>;
};

export const Description = (props: PropsWithChildren) => {
	const { children } = props;

	return <_Description>{children}</_Description>;
};

export const Title = (props: PropsWithChildren) => {
	const { children } = props;

	return <_Title>{children}</_Title>;
};

interface RootProps
	extends PropsWithChildren,
		Pick<DialogPrimitive.DialogProps, "onOpenChange" | "open"> {
	trigger: ReactNode;
	showCloseIcon?: boolean;
}

export const Root = (props: RootProps) => {
	const { onOpenChange, open, trigger, children, showCloseIcon = true } = props;

	return (
		<DialogPrimitive.Root {...{ onOpenChange, open }}>
			<DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
			<_Overlay />
			<_Content>
				{children}
				{showCloseIcon && (
					<_Close>
						<Cross1Icon className="h-4 w-4 text-primitive-type hover:text-primitive-type-bold" />
					</_Close>
				)}
			</_Content>
		</DialogPrimitive.Root>
	);
};
