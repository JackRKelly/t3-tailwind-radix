import * as Select from "../Select";

export const SelectExample = () => (
	<Select.Root defaultValue="orange">
		<Select.Item value="orange" label="Orange" />
		<Select.Item value="blueberry" label="Blueberry" />
		<Select.Item value="cranberry" label="Cranberry" disabled />
		<Select.Item value="apple" label="Apple" />
		<Select.Item value="grape" label="Grape" />
	</Select.Root>
);
