import { FontBoldIcon, FontItalicIcon, UnderlineIcon } from "@radix-ui/react-icons";
import * as ToggleGroup from "../ToggleGroup";

export const ToggleGroupExample = () => {
	const iconClassName = "w-5 h-5 text-primitive-type";

	return (
		<ToggleGroup.Root type="multiple">
			<ToggleGroup.Item
				value="bold"
				aria-label="Font bold"
				icon={<FontBoldIcon className={iconClassName} />}
			/>
			<ToggleGroup.Item
				value="italic"
				aria-label="Font italic"
				icon={<FontItalicIcon className={iconClassName} />}
			/>
			<ToggleGroup.Item
				value="underline"
				aria-label="Underline"
				icon={<UnderlineIcon className={iconClassName} />}
			/>
		</ToggleGroup.Root>
	);
};
