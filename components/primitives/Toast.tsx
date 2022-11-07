import * as ToastPrimitive from "@radix-ui/react-toast";
import { PropsWithChildren } from "react";
import { tw } from "../../utils/tw";
import { buttonStyles } from "./Button";

const _Root = tw(
	ToastPrimitive.Root
)`z-50 fixed bottom-3 inset-x-4 w-auto md:top-2 md:right-2 md:left-auto md:bottom-auto md:w-full md:max-w-sm rounded-lg border border-primitive-edge radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right radix-state-closed:animate-toast-hide radix-swipe-end:animate-toast-swipe-out translate-x-radix-toast-swipe-move-x radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease] focus:outline-none focus-visible:ring focus-visible:ring-highlight bg-primitive-faint bg-opacity-[85%] backdrop-blur`;

interface ActionProps extends PropsWithChildren, ToastPrimitive.ToastActionProps {}

export const Action = (props: ActionProps) => {
	const { children, ...rest } = props;

	return (
		<ToastPrimitive.Action className={buttonStyles({ shade: "primary" })} {...rest}>
			{children}
		</ToastPrimitive.Action>
	);
};

interface CloseProps extends PropsWithChildren, ToastPrimitive.ToastCloseProps {}

export const Close = (props: CloseProps) => {
	const { children, ...rest } = props;

	return (
		<ToastPrimitive.Close className={buttonStyles()} {...rest}>
			{children}
		</ToastPrimitive.Close>
	);
};

export const Title = tw(ToastPrimitive.Title)`text-base font-semibold text-primitive-type-bold`;

export const Description = tw(ToastPrimitive.Description)`mt-1 text-sm text-primitive-type`;

export const Provider = (props: PropsWithChildren) => {
	const { children } = props;

	return <ToastPrimitive.Provider>{children}</ToastPrimitive.Provider>;
};

interface ToastProps extends PropsWithChildren, ToastPrimitive.ToastProps {}

export const Root = (props: ToastProps) => {
	const { children, ...rest } = props;

	return (
		<>
			<_Root {...rest}>{children}</_Root>

			<ToastPrimitive.Viewport />
		</>
	);
};
