import { Button } from "../Button";
import * as Dropdown from "../Dropdown";
import {
	BookmarkIcon,
	DrawingPinFilledIcon,
	DrawingPinIcon,
	RocketIcon,
	SpeakerLoudIcon,
	SpeakerModerateIcon,
	SpeakerOffIcon
} from "@radix-ui/react-icons";
import type { NextPage } from "next";
import { useState } from "react";

export const DropdownExample: NextPage = () => {
	const [dropdownToggle, setDropdownToggle] = useState(false);

	return (
		<Dropdown.Root trigger={<Button>Click</Button>}>
			<Dropdown.Label label="Label" />
			<Dropdown.CheckboxItem
				label="Checkbox"
				checkedIcon={<DrawingPinFilledIcon />}
				icon={<DrawingPinIcon />}
				checked={dropdownToggle}
				onCheckedChange={(value) => {
					value !== "indeterminate" && setDropdownToggle(value);
				}}
			/>
			<Dropdown.Item icon={<BookmarkIcon />} label="Label" />
			<Dropdown.Sub label="Food" icon={<RocketIcon />} className="min-w-[9rem]">
				<Dropdown.CheckboxItem label="Loud" icon={<SpeakerLoudIcon />} />
				<Dropdown.CheckboxItem label="Moderate" icon={<SpeakerModerateIcon />} />
				<Dropdown.CheckboxItem label="Off" icon={<SpeakerOffIcon />} />
			</Dropdown.Sub>
			<Dropdown.Separator />
			<Dropdown.Item icon={<BookmarkIcon />} label="Label" />
		</Dropdown.Root>
	);
};
