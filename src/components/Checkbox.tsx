import { tw } from "../utils/tw";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as LabelPrimitive from "@radix-ui/react-label";

const Root = tw(
	CheckboxPrimitive.Root
)`flex h-5 w-5 items-center justify-center rounded radix-state-checked:bg-primary radix-state-unchecked:bg-primitive-faint radix-state-unchecked:border border-primitive-edge focus:outline-none focus-visible:ring focus-visible:ring-highlight`;

const Label = tw(
	LabelPrimitive.Label
)`ml-3 select-none text-sm font-medium text-primitive-type-bold`;

interface Props {}

const Checkbox = (props: Props) => {
	return (
		<form className="flex items-center">
			<Root id="c1" defaultChecked>
				<CheckboxPrimitive.Indicator>
					<CheckIcon className="h-4 w-4 self-center text-white" />
				</CheckboxPrimitive.Indicator>
			</Root>

			<Label htmlFor="c1">Accept terms and conditions</Label>
		</form>
	);
};

export default Checkbox;
