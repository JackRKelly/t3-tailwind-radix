import { tw } from "../utils/tw";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { PropsWithChildren, ReactNode } from "react";

const Content = tw(
	HoverCardPrimitive.Content
)`animate-all-sides backdrop-blur bg-opacity-[90%] z-10 border border-primitive-edge max-w-md rounded-lg p-4 md:w-full bg-primitive-faint focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

const Arrow = tw(HoverCardPrimitive.Arrow)`fill-current text-primitive-edge`;

interface RootProps
	extends PropsWithChildren,
		Pick<HoverCardPrimitive.HoverCardProps, "closeDelay" | "openDelay" | "open" | "onOpenChange">,
		Pick<HoverCardPrimitive.HoverCardContentProps, "side" | "sideOffset" | "align"> {
	trigger: ReactNode;
}

export const Root = (props: RootProps) => {
	const {
		closeDelay,
		openDelay = 100,
		open,
		onOpenChange,
		side,
		sideOffset = 4,
		align = "center",
		trigger,
		children
	} = props;

	return (
		<HoverCardPrimitive.Root {...{ closeDelay, openDelay, open, onOpenChange }}>
			<HoverCardPrimitive.Trigger asChild>{trigger}</HoverCardPrimitive.Trigger>
			<Content {...{ side, align, sideOffset }}>
				<Arrow />

				{children}
			</Content>
		</HoverCardPrimitive.Root>
	);
};
