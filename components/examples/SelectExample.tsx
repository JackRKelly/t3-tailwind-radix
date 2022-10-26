import * as Select from "../Select";

export const SelectExample = () => {
	return (
		<Select.Root defaultValue="orange">
			<Select.Item value="orange" textValue="Orange" />
			<Select.Item value="blueberry" textValue="Blueberry" />
			<Select.Item value="apple" textValue="Apple" />
			<Select.Item value="grape" textValue="Grape" />
		</Select.Root>
	);
};
