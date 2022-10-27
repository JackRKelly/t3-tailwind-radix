import { tw } from "../../utils/tw";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CaretRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { PropsWithChildren, ReactElement, ReactNode, cloneElement } from "react";

const _Content = tw(
	DropdownMenuPrimitive.Content
)`animate-all-sides w-48 md:w-56 bg-primitive-faint backdrop-blur bg-opacity-[90%] z-10 rounded-lg`;

const _ContentInner = tw.div`border border-primitive-edge rounded-lg px-1.5 py-1`;

const _Item = tw(
	DropdownMenuPrimitive.Item
)`flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive min-w-[8rem]`;

const _CheckboxItem = tw(
	DropdownMenuPrimitive.CheckboxItem
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive`;

const _Label = tw(
	DropdownMenuPrimitive.Label
)`select-none px-2 py-2 text-xs text-primitive-type-extra-faint`;

const _SubContent = tw(
	DropdownMenuPrimitive.SubContent
)`origin-radix-dropdown-menu radix-side-right:animate-scale-in w-full rounded-md px-1 py-1 text-xs border border-primitive-edge bg-primitive-faint backdrop-blur bg-opacity-[90%] z-[11]`;

const _SubTrigger = tw(
	DropdownMenuPrimitive.SubTrigger
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive`;

const _ItemLabelGrow = tw.span`flex-grow text-primitive-type`;

const _ShortcutLabel = tw.span`text-xs ml-2 text-primitive-type-extra-faint`;

const _Arrow = tw(DropdownMenuPrimitive.Arrow)`fill-current text-primitive-edge`;

export const Separator = tw(DropdownMenuPrimitive.Separator)`my-1 h-px bg-primitive-bold`;

interface LabelProps {
	label: ReactNode;
}

export const Label = (props: LabelProps) => {
	const { label } = props;

	return <_Label>{label}</_Label>;
};

interface SubProps
	extends PropsWithChildren,
		Pick<DropdownMenuPrimitive.DropdownMenuSubProps, "open" | "onOpenChange" | "defaultOpen">,
		Pick<DropdownMenuPrimitive.DropdownMenuSubContentProps, "sideOffset" | "alignOffset"> {
	icon?: ReactElement;
	label: ReactNode;
	className?: string;
}

export const Sub = (props: SubProps) => {
	const {
		label,
		icon,
		children,
		className,
		defaultOpen,
		onOpenChange,
		open,
		alignOffset,
		sideOffset = 6
	} = props;

	return (
		<DropdownMenuPrimitive.Sub {...{ defaultOpen, onOpenChange, open }}>
			<_SubTrigger>
				{icon &&
					cloneElement(icon, {
						className: "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint"
					})}
				<_ItemLabelGrow>{label}</_ItemLabelGrow>
				<CaretRightIcon className="h-3.5 w-3.5 text-primitive-type-extra-faint ml-2" />
			</_SubTrigger>
			<DropdownMenuPrimitive.Portal>
				<_SubContent {...{ className, alignOffset, sideOffset }}>{children}</_SubContent>
			</DropdownMenuPrimitive.Portal>
		</DropdownMenuPrimitive.Sub>
	);
};

interface CheckboxItemProps
	extends PropsWithChildren,
		Pick<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps, "onCheckedChange" | "checked"> {
	icon?: ReactElement;
	checkedIcon?: ReactElement;
	label: ReactNode;
}

export const CheckboxItem = (props: CheckboxItemProps) => {
	const { label, icon, checked, checkedIcon, onCheckedChange } = props;

	return (
		<_CheckboxItem checked={checked} onCheckedChange={onCheckedChange}>
			{(() => {
				if (checked) {
					return (
						checkedIcon &&
						cloneElement(checkedIcon, {
							className: "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint"
						})
					);
				} else {
					return (
						icon &&
						cloneElement(icon, {
							className: "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint"
						})
					);
				}
			})()}
			<_ItemLabelGrow>{label}</_ItemLabelGrow>
			<DropdownMenuPrimitive.ItemIndicator>
				<CheckIcon className="h-3.5 w-3.5" />
			</DropdownMenuPrimitive.ItemIndicator>
		</_CheckboxItem>
	);
};

interface ItemProps extends Pick<DropdownMenuPrimitive.DropdownMenuItemProps, "onClick"> {
	icon: ReactElement;
	shortcut?: string;
	label: ReactNode;
}

export const Item = (props: ItemProps) => {
	const { label, icon, shortcut, onClick } = props;

	return (
		<_Item {...{ onClick }}>
			{icon &&
				cloneElement(icon, {
					className: "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint"
				})}
			<_ItemLabelGrow>{label}</_ItemLabelGrow>
			{shortcut && <_ShortcutLabel>{shortcut}</_ShortcutLabel>}
		</_Item>
	);
};

interface RootProps
	extends PropsWithChildren,
		Pick<
			DropdownMenuPrimitive.DropdownMenuContentProps,
			"side" | "sideOffset" | "align" | "alignOffset"
		>,
		Pick<DropdownMenuPrimitive.DropdownMenuProps, "open" | "onOpenChange"> {
	trigger: ReactNode;
	className?: string;
}

export const Root = (props: RootProps) => {
	const {
		side,
		sideOffset = 4,
		align,
		alignOffset,
		children,
		trigger,
		className,
		onOpenChange,
		open
	} = props;

	return (
		<DropdownMenuPrimitive.Root {...{ className, onOpenChange, open }}>
			<DropdownMenuPrimitive.Trigger asChild>{trigger}</DropdownMenuPrimitive.Trigger>
			<DropdownMenuPrimitive.Portal>
				<_Content {...{ align, alignOffset, sideOffset, side }}>
					<_ContentInner>
						<_Arrow />
						{children}
					</_ContentInner>
				</_Content>
			</DropdownMenuPrimitive.Portal>
		</DropdownMenuPrimitive.Root>
	);
};