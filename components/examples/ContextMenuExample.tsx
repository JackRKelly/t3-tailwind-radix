import * as ContextMenu from "../ContextMenu";
import {
	BookmarkIcon,
	DrawingPinFilledIcon,
	DrawingPinIcon,
	SpeakerLoudIcon,
	SpeakerModerateIcon,
	SpeakerOffIcon
} from "@radix-ui/react-icons";
import type { NextPage } from "next";
import { useState } from "react";

export const ContextMenuExample: NextPage = () => {
	const [contextMenuToggle, setContextMenuToggle] = useState(false);

	return (
		<ContextMenu.Root trigger={<ContextMenu.Trigger>Context Menu</ContextMenu.Trigger>}>
			<ContextMenu.Label label="Label" />
			<ContextMenu.CheckboxItem
				label="Checkbox"
				checkedIcon={<DrawingPinFilledIcon />}
				icon={<DrawingPinIcon />}
				checked={contextMenuToggle}
				onCheckedChange={(value) => {
					value !== "indeterminate" && setContextMenuToggle(value);
				}}
			/>
			<ContextMenu.Item icon={<BookmarkIcon />} label="Label" />
			<ContextMenu.Sub label="Volume" icon={<SpeakerLoudIcon />} className="min-w-[9rem]">
				<ContextMenu.CheckboxItem label="Loud" icon={<SpeakerLoudIcon />} />
				<ContextMenu.CheckboxItem label="Moderate" icon={<SpeakerModerateIcon />} />
				<ContextMenu.CheckboxItem label="Off" icon={<SpeakerOffIcon />} />
			</ContextMenu.Sub>
			<ContextMenu.Separator />
			<ContextMenu.Item icon={<BookmarkIcon />} label="Label" />
		</ContextMenu.Root>
	);
};
