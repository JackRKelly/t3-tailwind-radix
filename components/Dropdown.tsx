import { tw } from "../utils/tw";
import { Button } from "./Button";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CaretRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { ReactElement, ReactNode, cloneElement } from "react";

const Content = tw(
	DropdownMenuPrimitive.Content
)`animate-all-sides w-48 md:w-56 bg-primitive-faint backdrop-blur bg-opacity-[90%] z-10 rounded-lg`;

const ContentInner = tw.div`border border-primitive-edge rounded-lg px-1.5 py-1`;

const Item = tw(
	DropdownMenuPrimitive.Item
)`flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive min-w-[8rem]`;

const CheckboxItem = tw(
	DropdownMenuPrimitive.CheckboxItem
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive`;

const Separator = tw(DropdownMenuPrimitive.Separator)`my-1 h-px bg-primitive-bold`;

const Label = tw(
	DropdownMenuPrimitive.Label
)`select-none px-2 py-2 text-xs text-primitive-type-extra-faint`;

const SubContent = tw(
	DropdownMenuPrimitive.SubContent
)`origin-radix-dropdown-menu radix-side-right:animate-scale-in w-full rounded-md px-1 py-1 text-xs border border-primitive-edge bg-primitive-faint backdrop-blur bg-opacity-[90%] z-[11]`;

const SubTrigger = tw(
	DropdownMenuPrimitive.SubTrigger
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive`;

const ItemLabelGrow = tw.span`flex-grow text-primitive-type`;

const ShortcutLabel = tw.span`text-xs ml-2 text-primitive-type-extra-faint`;

const Arrow = tw(DropdownMenuPrimitive.Arrow)`fill-current text-primitive-edge`;

type RadixMenuItem =
	| {
			type: "item";
			label: string;
			shortcut?: string;
			icon?: ReactElement;
			onClick?: () => void;
	  }
	| {
			type: "sub-menu";
			label: string;
			icon?: ReactElement;
			subMenu: RadixMenuItem[];
	  }
	| {
			type: "checkbox";
			label: string;
			icon?: ReactElement;
			checkedIcon?: ReactElement;
			onCheckedChange: DropdownMenuPrimitive.DropdownMenuCheckboxItemProps["onCheckedChange"];
			checked: DropdownMenuPrimitive.DropdownMenuCheckboxItemProps["checked"];
	  };

export interface RadixDropdownSection {
	label?: string;
	items: RadixMenuItem[];
}

interface Props {
	side?: DropdownMenuPrimitive.DropdownMenuContentProps["side"];
	sideOffset?: DropdownMenuPrimitive.DropdownMenuContentProps["sideOffset"];
	align?: DropdownMenuPrimitive.DropdownMenuContentProps["align"];
	alignOffset?: DropdownMenuPrimitive.DropdownMenuContentProps["alignOffset"];
	sections: RadixDropdownSection[];
	trigger: ReactNode;
}

const renderMenuItem = (menuItem: RadixMenuItem, i: number) => {
	switch (menuItem.type) {
		case "sub-menu":
			return (
				<DropdownMenuPrimitive.Sub>
					<SubTrigger>
						{menuItem.icon &&
							cloneElement(menuItem.icon, {
								className: "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint"
							})}
						<ItemLabelGrow>{menuItem.label}</ItemLabelGrow>
						<CaretRightIcon className="h-3.5 w-3.5 text-primitive-type-extra-faint ml-2" />
					</SubTrigger>
					<DropdownMenuPrimitive.Portal>
						<SubContent>
							{menuItem.subMenu.map((subMenuItem, i) => renderMenuItem(subMenuItem, i))}
						</SubContent>
					</DropdownMenuPrimitive.Portal>
				</DropdownMenuPrimitive.Sub>
			);

		case "checkbox":
			return (
				<CheckboxItem checked={menuItem.checked} onCheckedChange={menuItem.onCheckedChange}>
					{(() => {
						if (menuItem.checked) {
							return (
								menuItem.checkedIcon &&
								cloneElement(menuItem.checkedIcon, {
									className: "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint"
								})
							);
						} else {
							return (
								menuItem.icon &&
								cloneElement(menuItem.icon, {
									className: "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint"
								})
							);
						}
					})()}
					<ItemLabelGrow>{menuItem.label}</ItemLabelGrow>
					<DropdownMenuPrimitive.ItemIndicator>
						<CheckIcon className="h-3.5 w-3.5" />
					</DropdownMenuPrimitive.ItemIndicator>
				</CheckboxItem>
			);

		default:
			return (
				<Item key={`${menuItem.label}-${i}`}>
					{menuItem.icon &&
						cloneElement(menuItem.icon, {
							className: "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint"
						})}
					<ItemLabelGrow>{menuItem.label}</ItemLabelGrow>
					{menuItem.shortcut && <ShortcutLabel>{menuItem.shortcut}</ShortcutLabel>}
				</Item>
			);
	}
};

export const Dropdown = (props: Props) => {
	const { side, sideOffset = 4, align, alignOffset, sections, trigger } = props;

	return (
		<DropdownMenuPrimitive.Root>
			<DropdownMenuPrimitive.Trigger asChild>{trigger}</DropdownMenuPrimitive.Trigger>
			<DropdownMenuPrimitive.Portal>
				<Content align={align} sideOffset={sideOffset} side={side} alignOffset={alignOffset}>
					<ContentInner>
						<Arrow />
						{sections.map((section, sectionIndex) => (
							<div>
								{sectionIndex !== 0 && <Separator />}
								{section.label && <Label>{section.label}</Label>}
								{section.items.map((menuItem, i) => {
									return renderMenuItem(menuItem, i);
								})}
							</div>
						))}
					</ContentInner>
				</Content>
			</DropdownMenuPrimitive.Portal>
		</DropdownMenuPrimitive.Root>
	);
};
