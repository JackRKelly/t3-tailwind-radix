import { tw } from "../../../utils/tw";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Input } from "../Input";
import { Label } from "../Label";
import * as Popover from "../Popover";

const Form = tw.form`mt-4 space-y-2`;

const Fieldset = tw.fieldset`flex items-center`;

export const PopoverExample = () => (
	<Popover.Root trigger={<Button>Popover</Button>}>
		<Heading size="xs">Popover</Heading>

		<Form>
			<Fieldset>
				<Label htmlFor="width" className="shrink-0 grow">
					Width
				</Label>
				<Input id="width" type="text" className="w-1/2" defaultValue="100%" />
			</Fieldset>
			<Fieldset>
				<Label htmlFor="max-width" className="shrink-0 grow">
					Max. width
				</Label>
				<Input id="max-width" type="text" className="w-1/2" defaultValue="300px" />
			</Fieldset>
			<Fieldset>
				<Label htmlFor="height" className="shrink-0 grow">
					Height
				</Label>
				<Input id="height" type="text" className="w-1/2" defaultValue="25px" />
			</Fieldset>
			<Fieldset>
				<Label htmlFor="max-height" className="shrink-0 grow">
					Max. height
				</Label>
				<Input id="max-height" type="text" className="w-1/2" defaultValue="none" />
			</Fieldset>
		</Form>
	</Popover.Root>
);
