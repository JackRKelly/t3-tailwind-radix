import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { PropsWithChildren, ReactNode } from "react";
import { tw } from "../../utils/tw";

const _Root = tw(AccordionPrimitive.Root)`space-y-4 w-full max-w-xl`;

const _Trigger = tw(
	AccordionPrimitive.Trigger
)`radix-state-closed:rounded-lg radix-state-open:rounded-t-lg group focus:outline-none inline-flex w-full items-center justify-between bg-primitive-faint hover:bg-primitive border radix-state-open:border-b-transparent border-primitive-edge px-4 py-2 text-left group-focus-within:border-transparent transition-button`;

const _Item = tw(
	AccordionPrimitive.Item
)`rounded-lg overflow-hidden group focus-within:ring focus-within:ring-highlight focus:outline-none transition-button`;

const _Content = tw(
	AccordionPrimitive.Content
)`rounded-b-lg radix-state-open:animate-collapsible-in radix-state-closed:animate-collapsible-out overflow-y-hidden w-full bg-primitive-faint transition-all`;

const _Header = tw(AccordionPrimitive.Header)`w-full`;

export const Header = tw.span`text-sm font-medium text-primitive-type`;

export const Content = tw.div`rounded-b-lg text-sm text-primitive-type-faint px-4 pb-3 pt-1 border-x border-b border-primitive-edge transition-all group-focus-within:border-transparent`;

interface ItemProps extends Pick<AccordionPrimitive.AccordionItemProps, "value"> {
	header: ReactNode;
	content: ReactNode;
}

export const Item = (props: ItemProps) => {
	const { header, content, value } = props;

	return (
		<_Item {...{ value }}>
			<_Header>
				<_Trigger>
					{header}
					<ChevronDownIcon className="ml-2 h-5 w-5 shrink-0 text-primitive-type ease-in-out group-radix-state-open:rotate-180 duration-150" />
				</_Trigger>
			</_Header>
			<_Content>{content}</_Content>
		</_Item>
	);
};

type RootProps = PropsWithChildren &
	(
		| Pick<
				AccordionPrimitive.AccordionSingleProps,
				"disabled" | "defaultValue" | "onValueChange" | "value" | "type" | "aria-label"
		  >
		| Pick<
				AccordionPrimitive.AccordionMultipleProps,
				"disabled" | "defaultValue" | "onValueChange" | "value" | "type" | "aria-label"
		  >
	);

export const Root = (props: RootProps) => {
	const {
		children,
		type,
		value,
		onValueChange,
		defaultValue,
		disabled,
		"aria-label": ariaLabel
	} = props;

	switch (type) {
		case "single":
			return (
				<_Root {...{ type, value, onValueChange, defaultValue, disabled }} aria-label={ariaLabel}>
					{children}
				</_Root>
			);
		case "multiple":
			return (
				<_Root {...{ type, value, onValueChange, defaultValue, disabled }} aria-label={ariaLabel}>
					{children}
				</_Root>
			);
	}
};
