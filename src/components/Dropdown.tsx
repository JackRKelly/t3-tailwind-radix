import { tw } from "../utils/tw";
import Button from "./Button";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
	CaretRightIcon,
	CheckIcon,
	CropIcon,
	EyeClosedIcon,
	EyeOpenIcon,
	FileIcon,
	FrameIcon,
	GridIcon,
	Link2Icon,
	MixerHorizontalIcon,
	PersonIcon,
	TransparencyGridIcon
} from "@radix-ui/react-icons";
import clsx from "clsx";
import { ReactNode, useState } from "react";

interface RadixMenuItem {
	label: string;
	shortcut?: string;
	icon?: ReactNode;
}

interface User {
	name: string;
	url?: string;
}

const generalMenuItems: RadixMenuItem[] = [
	{
		label: "New File",
		icon: <FileIcon className="mr-2 h-3.5 w-3.5" />,
		shortcut: "⌘+N"
	},
	{
		label: "Settings",
		icon: <MixerHorizontalIcon className="mr-2 h-3.5 w-3.5" />,
		shortcut: "⌘+,"
	}
];

const regionToolMenuItems: RadixMenuItem[] = [
	{
		label: "Frame",
		icon: <FrameIcon className="mr-2 h-3.5 w-3.5" />,
		shortcut: "⌘+F"
	},
	{
		label: "Crop",
		icon: <CropIcon className="mr-2 h-3.5 w-3.5" />,
		shortcut: "⌘+S"
	}
];

const users: User[] = [
	{
		name: "Adam",
		url: "https://github.com/adamwathan.png"
	},
	{
		name: "Steve",
		url: "https://github.com/steveschoger.png"
	},
	{
		name: "Robin",
		url: "https://github.com/robinmalfait.png"
	}
];

const Content = tw(
	DropdownMenuPrimitive.Content
)`radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56 bg-primitive-faint border border-primitive-edge`;

const Item = tw(
	DropdownMenuPrimitive.Item
)`flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive w-28 md:w-32`;

const CheckboxItem = tw(
	DropdownMenuPrimitive.CheckboxItem
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive`;

const Separator = tw(DropdownMenuPrimitive.Separator)`my-1 h-px bg-primitive-bold`;

const Label = tw(
	DropdownMenuPrimitive.Label
)`select-none px-2 py-2 text-xs text-primitive-type-extra-faint`;

const SubContent = tw(
	DropdownMenuPrimitive.SubContent
)`origin-radix-dropdown-menu radix-side-right:animate-scale-in w-full rounded-md px-1 py-1 text-xs bg-primitive-faint border border-primitive-edge`;

const SubTrigger = tw(
	DropdownMenuPrimitive.SubTrigger
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type-faint focus:bg-primitive`;

const ItemLabelGrow = tw.span`flex-grow text-primitive-type`;

const ItemLabel = tw.span`text-primitive-type`;

const ShortcutLabel = tw.span`text-xs text-primitive-type-extra-faint`;

const DropdownMenu = () => {
	const [showGrid, setShowGrid] = useState(false);
	const [showUi, setShowUi] = useState(false);

	return (
		<DropdownMenuPrimitive.Root>
			<DropdownMenuPrimitive.Trigger asChild>
				<Button>Click</Button>
			</DropdownMenuPrimitive.Trigger>

			<DropdownMenuPrimitive.Portal>
				<Content align="end" sideOffset={5}>
					{generalMenuItems.map(({ label, icon, shortcut }, i) => (
						<Item key={`${label}-${i}`} className={clsx("")}>
							{icon}
							<ItemLabelGrow>{label}</ItemLabelGrow>
							{shortcut && <ShortcutLabel>{shortcut}</ShortcutLabel>}
						</Item>
					))}

					<Separator />

					<CheckboxItem checked={showGrid} onCheckedChange={setShowGrid as any}>
						{showGrid ? (
							<GridIcon className="mr-2 h-4 w-4" />
						) : (
							<TransparencyGridIcon className="mr-2 h-3.5 w-3.5" />
						)}
						<ItemLabelGrow>Show Grid</ItemLabelGrow>
						<DropdownMenuPrimitive.ItemIndicator>
							<CheckIcon className="h-3.5 w-3.5" />
						</DropdownMenuPrimitive.ItemIndicator>
					</CheckboxItem>

					<CheckboxItem checked={showUi} onCheckedChange={setShowUi as any}>
						{showUi ? (
							<EyeOpenIcon className="mr-2 h-3.5 w-3.5" />
						) : (
							<EyeClosedIcon className="mr-2 h-3.5 w-3.5" />
						)}
						<ItemLabelGrow>Show UI</ItemLabelGrow>
						<DropdownMenuPrimitive.ItemIndicator>
							<CheckIcon className="h-3.5 w-3.5" />
						</DropdownMenuPrimitive.ItemIndicator>
					</CheckboxItem>

					<Separator />

					<Label>Region Tools</Label>

					{regionToolMenuItems.map(({ label, icon, shortcut }, i) => (
						<Item key={`${label}-${i}`}>
							{icon}
							<ItemLabelGrow>{label}</ItemLabelGrow>
							{shortcut && <ShortcutLabel>{shortcut}</ShortcutLabel>}
						</Item>
					))}

					<Separator />

					<DropdownMenuPrimitive.Sub>
						<SubTrigger>
							<Link2Icon className="mr-2 h-3.5 w-3.5" />
							<ItemLabelGrow>Share</ItemLabelGrow>
							<CaretRightIcon className="h-3.5 w-3.5" />
						</SubTrigger>
						<DropdownMenuPrimitive.Portal>
							<SubContent>
								{users.map(({ name, url }, i) => (
									<Item key={`${name}-${i}`}>
										{url ? (
											<img className="mr-2.5 h-6 w-6 rounded-full" src={url} />
										) : (
											<PersonIcon className="mr-2.5 h-6 w-6" />
										)}
										<ItemLabel>{name}</ItemLabel>
									</Item>
								))}
							</SubContent>
						</DropdownMenuPrimitive.Portal>
					</DropdownMenuPrimitive.Sub>
				</Content>
			</DropdownMenuPrimitive.Portal>
		</DropdownMenuPrimitive.Root>
	);
};

export default DropdownMenu;
