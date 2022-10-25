import { tw } from "../utils/tw";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const Content = tw(
	TooltipPrimitive.Content
)`animate-delayed-all-sides inline-flex items-center bg-primitive-faint backdrop-blur bg-opacity-[90%] rounded-md`;

const ContentInner = tw.div`border border-primitive-edge rounded-md px-4 py-2.5`;

const Arrow = tw(TooltipPrimitive.Arrow)`fill-current text-primitive-edge`;

const Body = tw.span`block text-sm leading-none text-primitive-type`;

interface Props {
	text: string;
	children: React.ReactNode;
	open?: TooltipPrimitive.TooltipProps["open"];
	defaultOpen?: TooltipPrimitive.TooltipProps["defaultOpen"];
	onOpenChange?: TooltipPrimitive.TooltipProps["onOpenChange"];
	delayDuration?: TooltipPrimitive.TooltipProps["delayDuration"];
	sideOffset?: TooltipPrimitive.TooltipContentProps["sideOffset"];
	tabIndex?: TooltipPrimitive.TooltipContentProps["tabIndex"];
	side?: TooltipPrimitive.TooltipContentProps["side"];
	alignOffset?: TooltipPrimitive.TooltipContentProps["alignOffset"];
	align?: TooltipPrimitive.TooltipContentProps["align"];
	draggable?: TooltipPrimitive.TooltipContentProps["draggable"];
}

export const Tooltip = (props: Props) => {
	const {
		text,
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
			<Content
				sideOffset={sideOffset}
				align={align}
				side={side}
				tabIndex={tabIndex}
				alignOffset={alignOffset}
			>
				<ContentInner>
					<Arrow />
					<Body>{text}</Body>
				</ContentInner>
			</Content>
		</TooltipPrimitive.Root>
	);
};
