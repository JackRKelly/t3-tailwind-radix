import { tw } from "../../utils/tw";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";

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

interface RootProps
	extends Pick<
			TooltipPrimitive.TooltipProps,
			"open" | "defaultOpen" | "onOpenChange" | "delayDuration"
		>,
		Pick<
			TooltipPrimitive.TooltipContentProps,
			"sideOffset" | "tabIndex" | "side" | "alignOffset" | "align" | "draggable"
		> {
	body: ReactNode;
}

export const Root = (props: PropsWithChildren<RootProps>) => {
	const {
		body,
		children,
		sideOffset = 4,
		tabIndex,
		side,
		alignOffset,
		align,
		defaultOpen,
		delayDuration = 200,
		onOpenChange,
		open
	} = props;

	return (
		<TooltipPrimitive.Root
			defaultOpen={defaultOpen}
			open={open}
			delayDuration={delayDuration}
			onOpenChange={onOpenChange}
		>
			<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
			<_Content
				sideOffset={sideOffset}
				align={align}
				side={side}
				tabIndex={tabIndex}
				alignOffset={alignOffset}
			>
				<_ContentInner>
					<_Arrow />
					<_Body>{body}</_Body>
				</_ContentInner>
			</_Content>
		</TooltipPrimitive.Root>
	);
};
