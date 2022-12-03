import {
	BookmarkIcon,
	DrawingPinFilledIcon,
	DrawingPinIcon,
	SpeakerLoudIcon,
	SpeakerModerateIcon,
	SpeakerOffIcon
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../Button";
import * as Dropdown from "../Dropdown";

export const DropdownExample = () => {
	const [dropdownToggle, setDropdownToggle] = useState(false);

	const iconClassName = "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint";

	return (
		<Dropdown.Root trigger={<Button>Dropdown</Button>}>
			<Dropdown.Label label="Section Label" />
			<Dropdown.CheckboxItem
				label="Checkbox"
				checkedIcon={<DrawingPinFilledIcon className={iconClassName} />}
				icon={<DrawingPinIcon className={iconClassName} />}
				checked={dropdownToggle}
				onCheckedChange={(value) => {
					value !== "indeterminate" && setDropdownToggle(value);
				}}
			/>
			<Dropdown.Item icon={<BookmarkIcon className={iconClassName} />} label="Label" />
			<Dropdown.Sub
				label="Volume"
				icon={<SpeakerLoudIcon className={iconClassName} />}
				className="min-w-[9rem]"
			>
				<Dropdown.CheckboxItem label="Loud" icon={<SpeakerLoudIcon className={iconClassName} />} />
				<Dropdown.CheckboxItem
					label="Moderate"
					icon={<SpeakerModerateIcon className={iconClassName} />}
				/>
				<Dropdown.CheckboxItem label="Off" icon={<SpeakerOffIcon className={iconClassName} />} />
			</Dropdown.Sub>
			<Dropdown.Separator />
			<Dropdown.Item icon={<BookmarkIcon className={iconClassName} />} label="Label" />
		</Dropdown.Root>
	);
};
