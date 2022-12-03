import { labelStyles } from "../Label";
import * as RadioGroup from "../RadioGroup";

export const RadioGroupExample = () => (
	<form>
		<fieldset>
			<legend className={labelStyles()}>Choose your starter</legend>
			<RadioGroup.Root aria-label="Pokemon starters" defaultValue="bulbasaur">
				<RadioGroup.Item id="bulbasaur" value="bulbasaur" label="Bulbasaur" />
				<RadioGroup.Item id="pikachu" value="pikachu" label="Pikachu" />
				<RadioGroup.Item id="squirtle" value="squirtle" label="Squirtle" />
			</RadioGroup.Root>
		</fieldset>
	</form>
);
