import { Button } from "../Button";
import { Dropdown, RadixDropdownSection } from "../Dropdown";
import {
	DotsHorizontalIcon,
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
					shortcut: "⌘+,",
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
					icon: <DotsHorizontalIcon />,
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
							shortcut: "⌘+,",
							icon: <MixerHorizontalIcon />
						},
						{
							type: "sub-menu",
							label: "Sub Menu",
							icon: <DotsHorizontalIcon />,
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

	return <Dropdown sections={sections} trigger={<Button>Click</Button>} />;
};
