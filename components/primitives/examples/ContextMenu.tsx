import {
	BookmarkIcon,
	DrawingPinFilledIcon,
	DrawingPinIcon,
	SpeakerLoudIcon,
	SpeakerModerateIcon,
	SpeakerOffIcon
} from "@radix-ui/react-icons";
import { useState } from "react";
import * as ContextMenu from "../ContextMenu";

export const ContextMenuExample = () => {
	const [contextMenuToggle, setContextMenuToggle] = useState(false);

	const iconClassName = "mr-2 h-3.5 w-3.5 text-primitive-type-extra-faint";

	return (
		<ContextMenu.Root trigger={<ContextMenu.Trigger>Context Menu</ContextMenu.Trigger>}>
			<ContextMenu.Label label="Label" />
			<ContextMenu.CheckboxItem
				label="Checkbox"
				checkedIcon={<DrawingPinFilledIcon className={iconClassName} />}
				icon={<DrawingPinIcon className={iconClassName} />}
				checked={contextMenuToggle}
				onCheckedChange={(value) => {
					value !== "indeterminate" && setContextMenuToggle(value);
				}}
			/>
			<ContextMenu.Item icon={<BookmarkIcon className={iconClassName} />} label="Label" />
			<ContextMenu.Sub
				label="Volume"
				icon={<SpeakerLoudIcon className={iconClassName} />}
				className="min-w-[9rem]"
			>
				<ContextMenu.CheckboxItem
					label="Loud"
					icon={<SpeakerLoudIcon className={iconClassName} />}
				/>
				<ContextMenu.CheckboxItem
					label="Moderate"
					icon={<SpeakerModerateIcon className={iconClassName} />}
				/>
				<ContextMenu.CheckboxItem label="Off" icon={<SpeakerOffIcon className={iconClassName} />} />
			</ContextMenu.Sub>
			<ContextMenu.Separator />
			<ContextMenu.Item icon={<BookmarkIcon className={iconClassName} />} label="Label" />
		</ContextMenu.Root>
	);
};
