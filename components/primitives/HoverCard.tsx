import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { PropsWithChildren, ReactNode } from "react";
import { tw } from "../../utils/tw";

const _Content = tw(
	HoverCardPrimitive.Content
)`animate-all-sides backdrop-blur bg-opacity-[90%] z-10 border border-primitive-edge max-w-md rounded-lg p-4 md:w-full bg-primitive-faint focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

const _Arrow = tw(HoverCardPrimitive.Arrow)`fill-current text-primitive-edge`;

interface RootProps
	extends PropsWithChildren,
		HoverCardPrimitive.HoverCardProps,
		HoverCardPrimitive.HoverCardContentProps {
	trigger: ReactNode;
}

export const Root = (props: RootProps) => {
	const {
		closeDelay,
		openDelay = 100,
		open,
		onOpenChange,
		defaultOpen,
		sideOffset = 4,
		align = "center",
		trigger,
		children,
		...rest
	} = props;

	return (
		<HoverCardPrimitive.Root {...{ closeDelay, openDelay, open, onOpenChange, defaultOpen }}>
			<HoverCardPrimitive.Trigger asChild>{trigger}</HoverCardPrimitive.Trigger>
			<_Content {...{ align, sideOffset, ...rest }}>
				<_Arrow />

				{children}
			</_Content>
		</HoverCardPrimitive.Root>
	);
};
