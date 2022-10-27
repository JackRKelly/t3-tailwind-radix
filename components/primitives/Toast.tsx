import * as ToastPrimitive from "@radix-ui/react-toast";
import { PropsWithChildren } from "react";
import { tw } from "../../utils/tw";

const _Root = tw(
	ToastPrimitive.Root
)`z-50 fixed bottom-3 inset-x-4 w-auto md:top-2 md:right-2 md:left-auto md:bottom-auto md:w-full md:max-w-sm rounded-lg border border-primitive-edge radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right radix-state-closed:animate-toast-hide radix-swipe-end:animate-toast-swipe-out translate-x-radix-toast-swipe-move-x radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease] focus:outline-none focus-visible:ring focus-visible:ring-highlight bg-primitive-faint bg-opacity-[85%] backdrop-blur`;

export const Action = tw(
	ToastPrimitive.Action
)`w-full rounded-lg px-4 py-2 flex items-center justify-center text-sm font-medium bg-primary text-white hover:bg-primary-bold focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

export const Close = tw(
	ToastPrimitive.Close
)`w-full border border-primitive-edge focus-visible:border-transparent rounded-lg px-4 py-2 flex items-center justify-center text-sm font-medium text-primitive-type hover:bg-primitive focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

export const Title = tw(ToastPrimitive.Title)`text-base font-semibold text-primitive-type-bold`;

export const Description = tw(ToastPrimitive.Description)`mt-1 text-sm text-primitive-type`;

export const Provider = (props: PropsWithChildren) => {
	const { children } = props;

	return <ToastPrimitive.Provider>{children}</ToastPrimitive.Provider>;
};

interface ToastProps
	extends PropsWithChildren,
		Pick<ToastPrimitive.ToastProps, "open" | "onOpenChange"> {}

export const Root = (props: ToastProps) => {
	const { children, onOpenChange, open } = props;

	return (
		<>
			<_Root {...{ onOpenChange, open }}>{children}</_Root>

			<ToastPrimitive.Viewport />
		</>
	);
};
