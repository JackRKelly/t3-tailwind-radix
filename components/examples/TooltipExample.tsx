import { Button } from "../Button";
import * as Tooltip from "../Tooltip";

export const TooltipExample = () => (
	<Tooltip.Root body={"This is a tooltip component"}>
		<Button>Hover</Button>
	</Tooltip.Root>
);
