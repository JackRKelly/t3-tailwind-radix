import { tw } from "../utils/tw";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { CaretRightIcon } from "@radix-ui/react-icons";
import React, { PropsWithChildren, ReactNode } from "react";

const Trigger = tw(
	CollapsiblePrimitive.Trigger
)`group flex w-full select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium bg-primitive-faint hover:bg-primitive border border-primitive-edge text-primitive-type-bold focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button focus-visible:border-transparent w-full`;

const Content = tw(
	CollapsiblePrimitive.Content
)`radix-state-open:animate-collapsible-in radix-state-closed:animate-collapsible-out overflow-y-hidden mt-4 flex flex-col space-y-4`;

const _Item = tw.div`group ml-12 flex select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium bg-primitive-faint text-primitive-type-bold hover:bg-primitive border border-primitive-edge transition-colors`;

const _Root = tw(CollapsiblePrimitive.Root)`w-full max-w-xl`;

interface ItemProps extends PropsWithChildren {}

export const Item = (props: ItemProps) => {
	const { children } = props;

	return <_Item>{children}</_Item>;
};

interface RootProps extends PropsWithChildren {
	trigger: ReactNode;
}

export const Root = (props: RootProps) => {
	const { children, trigger } = props;

	const [isOpen, setIsOpen] = React.useState(true);

	return (
		<_Root open={isOpen} onOpenChange={setIsOpen}>
			<Trigger>
				<div>{trigger}</div>
				<CaretRightIcon className="transform duration-200 ease-in-out group-radix-state-open:rotate-90 text-primitive-type-faint" />
			</Trigger>
			<Content>{children}</Content>
		</_Root>
	);
};
