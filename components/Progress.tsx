import { tw } from "../utils/tw";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const Root = tw(
	ProgressPrimitive.Root
)`h-3 w-full overflow-hidden rounded-full bg-primitive transition-colors max-w-xl`;

const Indicator = tw(ProgressPrimitive.Indicator)`h-full bg-primary transition-all duration-500`;

interface Props extends Pick<ProgressPrimitive.ProgressProps, "value" | "max"> {}

export const Progress = (props: Props) => {
	const { value = 0, max } = props;

	return (
		<Root {...{ value, max }}>
			<Indicator style={{ width: `${value}%` }} />
		</Root>
	);
};
