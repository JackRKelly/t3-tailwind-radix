import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { PropsWithChildren } from "react";
import { tw } from "../../utils/tw";
import { Button } from "./Button";

const _ScrollUpButton = tw(
	SelectPrimitive.ScrollUpButton
)`flex items-center justify-center text-primitive-type`;

const _Viewport = tw(
	SelectPrimitive.Viewport
)`p-2 rounded-lg border border-primitive-edge bg-primitive-faint backdrop-blur bg-opacity-[85%]`;

const _Group = tw(SelectPrimitive.Group)`z-10`;

const _ItemIndicator = tw(SelectPrimitive.ItemIndicator)`absolute left-2 inline-flex items-center`;

const _ScrollDownButton = tw(
	SelectPrimitive.ScrollDownButton
)`flex items-center justify-center text-primitive-type`;

const _Item = tw(
	SelectPrimitive.Item
)`relative flex items-center px-8 py-2 rounded-md text-sm text-primitive-type font-medium focus:bg-primitive radix-disabled:opacity-50 focus-visible:border-transparent focus:outline-none select-none`;

const _Content = tw(SelectPrimitive.Content)` relative z-10`;

const _SelectIcon = tw(SelectPrimitive.Icon)`ml-2`;

interface ItemProps extends PropsWithChildren, SelectPrimitive.SelectItemProps {
	label?: string;
}

export const Item = (props: ItemProps) => {
	const { value, label, ...rest } = props;

	return (
		<_Item {...{ value, ...rest }}>
			<SelectPrimitive.ItemText>{label ?? value}</SelectPrimitive.ItemText>
			<_ItemIndicator>
				<CheckIcon />
			</_ItemIndicator>
		</_Item>
	);
};

interface RootProps extends PropsWithChildren, SelectPrimitive.SelectProps {}

export const Root = (props: RootProps) => {
	const { children, ...rest } = props;

	return (
		<SelectPrimitive.Root {...rest}>
			<SelectPrimitive.Trigger asChild>
				<Button className="min-w-[85px]">
					<SelectPrimitive.Value />
					<_SelectIcon>
						<ChevronDownIcon />
					</_SelectIcon>
				</Button>
			</SelectPrimitive.Trigger>
			<_Content>
				<_ScrollUpButton>
					<ChevronUpIcon />
				</_ScrollUpButton>
				<_Viewport>
					<_Group>{children}</_Group>
				</_Viewport>
				<_ScrollDownButton>
					<ChevronDownIcon />
				</_ScrollDownButton>
			</_Content>
		</SelectPrimitive.Root>
	);
};
