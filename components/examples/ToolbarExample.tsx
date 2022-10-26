import { tw } from "../../utils/tw";
import * as Toolbar from "../Toolbar";
import {
	FontBoldIcon,
	FontItalicIcon,
	TextAlignCenterIcon,
	TextAlignLeftIcon,
	TextAlignRightIcon,
	UnderlineIcon
} from "@radix-ui/react-icons";

const LinkWrapper = tw.span`hidden items-center pr-2 xl:flex`;

export const ToolbarExample = () => (
	<Toolbar.Root>
		<Toolbar.ToggleGroup type="multiple">
			<Toolbar.ToggleGroupItem value="bold" aria-label="Font bold" icon={<FontBoldIcon />} />
			<Toolbar.ToggleGroupItem value="italic" aria-label="Font italic" icon={<FontItalicIcon />} />
			<Toolbar.ToggleGroupItem value="underline" aria-label="Underline" icon={<UnderlineIcon />} />
		</Toolbar.ToggleGroup>
		<Toolbar.ToggleGroup type="single">
			<Toolbar.ToggleGroupItem value="left" aria-label="Text left" icon={<TextAlignLeftIcon />} />
			<Toolbar.ToggleGroupItem
				value="center"
				aria-label="Text center"
				icon={<TextAlignCenterIcon />}
			/>
			<Toolbar.ToggleGroupItem
				value="right"
				aria-label="Text right"
				icon={<TextAlignRightIcon />}
			/>
		</Toolbar.ToggleGroup>

		<Toolbar.Separator />

		<LinkWrapper>
			<Toolbar.Link>Edited 2 hours ago</Toolbar.Link>
		</LinkWrapper>
	</Toolbar.Root>
);
