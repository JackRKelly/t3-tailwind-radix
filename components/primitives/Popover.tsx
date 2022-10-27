import { tw } from "../../utils/tw";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { PropsWithChildren, ReactNode } from "react";

const _Arrow = tw(PopoverPrimitive.Arrow)`fill-current text-primitive-edge`;

const _Content = tw(
	PopoverPrimitive.Content
)`animate-all-sides w-48 md:w-56 bg-primitive-faint backdrop-blur bg-opacity-[90%] z-10 rounded-lg`;

const _ContentInner = tw.div`border border-primitive-edge rounded-lg p-4`;

const _Close = tw(
	PopoverPrimitive.Close
)`absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const _Wrapper = tw.div`relative inline-block text-left`;

interface RootProps
	extends PropsWithChildren,
		Pick<PopoverPrimitive.PopoverContentProps, "side" | "sideOffset" | "align"> {
	showCloseIcon?: boolean;
	trigger: ReactNode;
}

export const Root = (props: RootProps) => {
	const { children, side, sideOffset = 4, align, showCloseIcon = true, trigger } = props;

	return (
		<_Wrapper>
			<PopoverPrimitive.Root>
				<PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>

				<_Content {...{ side, sideOffset, align }}>
					<_ContentInner>
						<_Arrow />

						{children}

						{showCloseIcon && (
							<_Close>
								<Cross1Icon className="h-4 w-4 text-primitive-type hover:text-primitive-type-bold" />
							</_Close>
						)}
					</_ContentInner>
				</_Content>
			</PopoverPrimitive.Root>
		</_Wrapper>
	);
};