import * as ToggleGroup from "../ToggleGroup";
import { FontBoldIcon, FontItalicIcon, UnderlineIcon } from "@radix-ui/react-icons";

export const ToggleGroupExample = () => (
	<ToggleGroup.Root type="multiple">
		<ToggleGroup.Item value="bold" aria-label="Font bold" icon={<FontBoldIcon />} />
		<ToggleGroup.Item value="italic" aria-label="Font italic" icon={<FontItalicIcon />} />
		<ToggleGroup.Item value="underline" aria-label="Underline" icon={<UnderlineIcon />} />
	</ToggleGroup.Root>
);
