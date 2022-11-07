import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";
import { tw } from "../../utils/tw";

const _Content = tw(
	TooltipPrimitive.Content
)`animate-delayed-all-sides inline-flex items-center bg-primitive-faint backdrop-blur bg-opacity-[90%] rounded-md z-10`;

const _ContentInner = tw.div`border border-primitive-edge rounded-md px-4 py-2.5`;

const _Arrow = tw(TooltipPrimitive.Arrow)`fill-current text-primitive-edge`;

const _Body = tw.span`block text-sm leading-none text-primitive-type`;

export const Provider = (props: PropsWithChildren) => {
	const { children } = props;

	return <TooltipPrimitive.Provider>{children}</TooltipPrimitive.Provider>;
};

interface RootProps extends TooltipPrimitive.TooltipProps, TooltipPrimitive.TooltipContentProps {
	body: ReactNode;
}

export const Root = (props: PropsWithChildren<RootProps>) => {
	const {
		body,
		children,
		sideOffset = 4,
		defaultOpen,
		delayDuration = 200,
		onOpenChange,
		open,
		disableHoverableContent,
		...rest
	} = props;

	return (
		<TooltipPrimitive.Root
			{...{ defaultOpen, delayDuration, onOpenChange, open, disableHoverableContent }}
		>
			<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
			<_Content {...{ sideOffset, ...rest }}>
				<_ContentInner>
					<_Arrow />
					<_Body>{body}</_Body>
				</_ContentInner>
			</_Content>
		</TooltipPrimitive.Root>
	);
};
