import { tw } from "../../utils/tw";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Input } from "../Input";
import { Label } from "../Label";
import * as Popover from "../Popover";
import type { NextPage } from "next";

const Form = tw.form`mt-4 space-y-2`;

const Fieldset = tw.fieldset`flex items-center`;

interface PopoverItem {
	id: string;
	label: string;
	defaultValue?: string;
	type?: React.HTMLInputTypeAttribute;
	autoComplete?: string;
}

const items: PopoverItem[] = [
	{
		id: "width",
		label: "Width",
		defaultValue: "100%"
	},
	{
		id: "max-width",
		label: "Max. width",
		defaultValue: "300px"
	},
	{
		id: "height",
		label: "Height",
		defaultValue: "25px"
	},
	{
		id: "max-height",
		label: "Max. height",
		defaultValue: "none",
		type: "text"
	}
];

export const PopoverExample: NextPage = () => {
	return (
		<Popover.Root trigger={<Button>Popover</Button>}>
			<Heading size="xs">Popover</Heading>

			<Form>
				{items.map(({ id, label, defaultValue, autoComplete, type = "text" }) => {
					return (
						<Fieldset key={`popover-items-${id}`}>
							<Label htmlFor={id} className="shrink-0 grow">
								{label}
							</Label>
							<Input
								id={id}
								type={type}
								className="w-1/2"
								defaultValue={defaultValue}
								autoComplete={autoComplete}
							/>
						</Fieldset>
					);
				})}
			</Form>
		</Popover.Root>
	);
};
