import { tw } from "../utils/tw";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
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
import cx from "clsx";
import React, { ReactNode, useState } from "react";

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

const Separator = tw(ContextMenuPrimitive.Separator)`my-1 h-px bg-primitive-edge-faint`;

interface Props {}

const ContextMenu = (props: Props) => {
	const [showGrid, setShowGrid] = useState(false);
	const [showUi, setShowUi] = useState(false);

	return (
		<div>
			<ContextMenuPrimitive.Root>
				<ContextMenuPrimitive.Trigger className="inline-flex w-36 items-center justify-center rounded-md border-2 border-dashed border-primitive-edge bg-primitive-faint px-3 py-4">
					<span className="select-none text-sm font-medium text-primitive-type">Right Click</span>
				</ContextMenuPrimitive.Trigger>

				<ContextMenuPrimitive.Portal>
					<ContextMenuPrimitive.Content
						className={cx(
							"radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down w-48 rounded-lg px-1.5 py-1 md:w-56 bg-primitive-faint border border-primitive-edge"
						)}
					>
						{generalMenuItems.map(({ label, icon, shortcut }, i) => (
							<ContextMenuPrimitive.Item
								key={`${label}-${i}`}
								className={cx(
									"flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type focus:bg-primitive"
								)}
							>
								{icon}
								<span className="flex-grow text-primitive-type dark:text-gray-300">{label}</span>
								{shortcut && <span className="text-xs">{shortcut}</span>}
							</ContextMenuPrimitive.Item>
						))}

						<Separator />

						<ContextMenuPrimitive.CheckboxItem
							checked={showGrid}
							onCheckedChange={setShowGrid as any}
							className={cx(
								"flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type focus:bg-primitive"
							)}
						>
							{showGrid ? (
								<GridIcon className="mr-2 h-4 w-4" />
							) : (
								<TransparencyGridIcon className="mr-2 h-3.5 w-3.5 text-primitive-type dark:text-gray-300" />
							)}
							<span className="flex-grow text-primitive-type dark:text-gray-300">Show Grid</span>
							<ContextMenuPrimitive.ItemIndicator>
								<CheckIcon className="h-3.5 w-3.5" />
							</ContextMenuPrimitive.ItemIndicator>
						</ContextMenuPrimitive.CheckboxItem>

						<ContextMenuPrimitive.CheckboxItem
							checked={showUi}
							onCheckedChange={setShowUi as any}
							className={cx(
								"flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none focus:bg-primitive"
							)}
						>
							{showUi ? (
								<EyeOpenIcon className="mr-2 h-3.5 w-3.5" />
							) : (
								<EyeClosedIcon className="mr-2 h-3.5 w-3.5" />
							)}
							<span className="flex-grow text-primitive-type">Show UI</span>
							<ContextMenuPrimitive.ItemIndicator>
								<CheckIcon className="h-3.5 w-3.5" />
							</ContextMenuPrimitive.ItemIndicator>
						</ContextMenuPrimitive.CheckboxItem>

						<Separator />

						<ContextMenuPrimitive.Label className="select-none px-2 py-2 text-xs text-primitive-type">
							Region Tools
						</ContextMenuPrimitive.Label>

						{regionToolMenuItems.map(({ label, icon, shortcut }, i) => (
							<ContextMenuPrimitive.Item
								key={`${label}-${i}`}
								className={cx(
									"flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
									"text-primitive-type focus:bg-primitive"
								)}
							>
								{icon}
								<span className="flex-grow text-primitive-type">{label}</span>
								{shortcut && <span className="text-xs">{shortcut}</span>}
							</ContextMenuPrimitive.Item>
						))}

						<Separator />

						<ContextMenuPrimitive.Sub>
							<ContextMenuPrimitive.SubTrigger
								className={cx(
									"flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type focus:bg-primitive dark:text-gray-500"
								)}
							>
								<Link2Icon className="mr-2 h-3.5 w-3.5" />
								<span className="flex-grow text-primitive-type dark:text-gray-300">Share</span>
								<CaretRightIcon className="h-3.5 w-3.5" />
							</ContextMenuPrimitive.SubTrigger>
							<ContextMenuPrimitive.Portal>
								<ContextMenuPrimitive.SubContent
									className={cx(
										"origin-radix-context-menu radix-side-right:animate-scale-in",
										"w-full rounded-md px-1 py-1 text-xs",
										"bg-primitive-faint border border-primitive-edge"
									)}
								>
									{users.map(({ name, url }, i) => (
										<ContextMenuPrimitive.Item
											key={`${name}-${i}`}
											className={cx(
												"flex w-28 cursor-default select-none items-center rounded-md px-2 py-2 outline-none md:w-32",
												"text-primitive-type focus:bg-primitive"
											)}
										>
											{url ? (
												<img className="mr-2.5 h-6 w-6 rounded-full" src={url} />
											) : (
												<PersonIcon className="mr-2.5 h-6 w-6" />
											)}
											<span className="text-primitive-type dark:text-gray-300">{name}</span>
										</ContextMenuPrimitive.Item>
									))}
								</ContextMenuPrimitive.SubContent>
							</ContextMenuPrimitive.Portal>
						</ContextMenuPrimitive.Sub>
					</ContextMenuPrimitive.Content>
				</ContextMenuPrimitive.Portal>
			</ContextMenuPrimitive.Root>
		</div>
	);
};

export default ContextMenu;
