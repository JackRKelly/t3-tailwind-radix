import { tw } from "../../utils/tw";
import * as RadioGroup from "../RadioGroup";

const Legend = tw.legend`text-sm leading-4 text-primitive-type`;

export const RadioGroupExample = () => (
	<form>
		<Legend>Choose your starter</Legend>
		<RadioGroup.Root aria-label="Pokemon starters" defaultValue="bulbasaur">
			<RadioGroup.Item id="bulbasaur" value="bulbasaur" label="Bulbasaur" />
			<RadioGroup.Item id="pikachu" value="pikachu" label="Pikachu" />
			<RadioGroup.Item id="squirtle" value="squirtle" label="Squirtle" />
		</RadioGroup.Root>
	</form>
);
