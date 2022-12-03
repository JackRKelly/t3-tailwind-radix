import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CaretRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { PropsWithChildren, ReactNode } from "react";
import { tw } from "../../utils/tw";

const _Content = tw(
	ContextMenuPrimitive.Content
)`animate-all-sides w-48 md:w-56 bg-primitive-faint backdrop-blur bg-opacity-[90%] z-10 rounded-lg`;

const _ContentInner = tw.div`border border-primitive-edge rounded-lg px-1.5 py-1`;

const _SubContent = tw(
	ContextMenuPrimitive.SubContent
)`origin-radix-dropdown-menu animate-open-all-sides animate-close-all-sides w-full rounded-md px-1 py-1 text-xs border border-primitive-edge bg-primitive-faint backdrop-blur bg-opacity-[90%] z-[11]`;

const _SubTrigger = tw(
	ContextMenuPrimitive.SubTrigger
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive`;

const _ItemLabelGrow = tw.span`flex-grow text-primitive-type`;

const _ShortcutLabel = tw.span`text-xs ml-2 text-primitive-type-extra-faint`;

const _Arrow = tw(ContextMenuPrimitive.Arrow)`fill-current text-primitive-edge`;

const _Trigger = tw(
	ContextMenuPrimitive.Trigger
)`inline-flex w-36 items-center justify-center rounded-md border-2 border-dashed border-primitive-edge bg-primitive-faint px-3 py-4 transition-colors`;

const _TriggerInner = tw.span`select-none text-sm font-medium text-primitive-type`;

const _Item = tw(
	ContextMenuPrimitive.Item
)`flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive min-w-[8rem]`;

const _CheckboxItem = tw(
	ContextMenuPrimitive.CheckboxItem
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive`;

const _Label = tw(
	ContextMenuPrimitive.Label
)`select-none px-2 py-2 text-xs text-primitive-type-extra-faint`;

export const Separator = tw(ContextMenuPrimitive.Separator)`my-1 h-px bg-primitive-bold`;

export const Trigger = (props: PropsWithChildren) => {
	const { children } = props;

	return <_TriggerInner>{children}</_TriggerInner>;
};

interface LabelProps {
	label: ReactNode;
}

export const Label = (props: LabelProps) => {
	const { label } = props;

	return <_Label>{label}</_Label>;
};

interface SubProps
	extends PropsWithChildren,
		ContextMenuPrimitive.ContextMenuSubProps,
		ContextMenuPrimitive.ContextMenuSubContentProps {
	icon?: React.ReactNode;
	label: React.ReactNode;
	className?: string;
}

export const Sub = (props: SubProps) => {
	const { label, icon, children, defaultOpen, onOpenChange, open, sideOffset = 6, ...rest } = props;

	return (
		<ContextMenuPrimitive.Sub {...{ defaultOpen, onOpenChange, open }}>
			<_SubTrigger>
				{icon}
				<_ItemLabelGrow>{label}</_ItemLabelGrow>
				<CaretRightIcon className="h-3.5 w-3.5 text-primitive-type-extra-faint ml-2" />
			</_SubTrigger>
			<ContextMenuPrimitive.Portal>
				<_SubContent {...{ sideOffset, ...rest }}>{children}</_SubContent>
			</ContextMenuPrimitive.Portal>
		</ContextMenuPrimitive.Sub>
	);
};

interface CheckboxItemProps
	extends PropsWithChildren,
		ContextMenuPrimitive.ContextMenuCheckboxItemProps {
	icon?: React.ReactNode;
	checkedIcon?: React.ReactNode;
	label: React.ReactNode;
}

export const CheckboxItem = (props: CheckboxItemProps) => {
	const { label, icon, checked, checkedIcon, ...rest } = props;

	return (
		<_CheckboxItem {...{ checked, ...rest }}>
			{(() => {
				if (checked) {
					return checkedIcon;
				} else {
					return icon;
				}
			})()}
			<_ItemLabelGrow>{label}</_ItemLabelGrow>
			<ContextMenuPrimitive.ItemIndicator>
				<CheckIcon className="h-3.5 w-3.5" />
			</ContextMenuPrimitive.ItemIndicator>
		</_CheckboxItem>
	);
};

interface ItemProps {
	icon: React.ReactNode;
	shortcut?: string;
	label: React.ReactNode;
}

export const Item = (props: ItemProps) => {
	const { label, icon, shortcut } = props;

	return (
		<_Item>
			{icon}
			<_ItemLabelGrow>{label}</_ItemLabelGrow>
			{shortcut && <_ShortcutLabel>{shortcut}</_ShortcutLabel>}
		</_Item>
	);
};

interface RootProps extends PropsWithChildren, ContextMenuPrimitive.ContextMenuProps {
	trigger: React.ReactNode;
	className?: string;
}

export const Root = (props: RootProps) => {
	const { children, trigger, ...rest } = props;

	return (
		<ContextMenuPrimitive.Root {...rest}>
			<_Trigger asChild>
				<_TriggerInner>{trigger}</_TriggerInner>
			</_Trigger>
			<ContextMenuPrimitive.Portal>
				<_Content>
					<_ContentInner>
						<_Arrow />
						{children}
					</_ContentInner>
				</_Content>
			</ContextMenuPrimitive.Portal>
		</ContextMenuPrimitive.Root>
	);
};
