import { Button } from "../Button";
import { Dropdown, RadixDropdownSection } from "../Dropdown";
import {
	DashIcon,
	DrawingPinFilledIcon,
	DrawingPinIcon,
	FileIcon,
	Link2Icon,
	MixerHorizontalIcon
} from "@radix-ui/react-icons";
import type { NextPage } from "next";
import { useState } from "react";

export const DropdownExample: NextPage = () => {
	const [dropdownToggle, setDropdownToggle] = useState(false);

	const sections: RadixDropdownSection[] = [
		{
			items: [
				{
					type: "item",
					label: "New File",
					icon: <FileIcon />,
					shortcut: "⌘+N"
				},
				{
					type: "item",
					label: "Settings",
					icon: <MixerHorizontalIcon />
				},
				{
					type: "checkbox",
					label: "Checkbox",
					icon: <DrawingPinIcon />,
					checkedIcon: <DrawingPinFilledIcon />,
					checked: dropdownToggle,
					onCheckedChange: (value) => {
						value !== "indeterminate" && setDropdownToggle(value);
					}
				},
				{
					type: "sub-menu",
					label: "Sub Menu",
					icon: <Link2Icon />,
					subMenu: [
						{
							type: "item",
							label: "New File fdsaf ads fsdaf das",
							icon: <FileIcon />,
							shortcut: "⌘+N"
						},
						{
							type: "item",
							label: "Settings",
							icon: <MixerHorizontalIcon />
						},
						{
							type: "sub-menu",
							label: "Sub Menu",
							subMenu: [
								{
									type: "item",
									label: "New File",
									icon: <FileIcon />,
									shortcut: "⌘+N"
								},
								{
									type: "item",
									label: "Settings",
									icon: <MixerHorizontalIcon />
								}
							]
						}
					]
				}
			],
			label: "Section 1"
		},
		{
			label: "Section 2",
			items: [
				{
					type: "item",
					label: "New File",
					icon: <FileIcon />,
					shortcut: "⌘+N"
				}
			]
		}
	];

	return (
		<Dropdown sections={sections}>
			<Button>Click</Button>
		</Dropdown>
	);
};
