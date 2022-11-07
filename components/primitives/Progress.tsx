import * as ProgressPrimitive from "@radix-ui/react-progress";
import { tw } from "../../utils/tw";

const Root = tw(
	ProgressPrimitive.Root
)`h-3 w-full overflow-hidden rounded-full bg-primitive transition-colors max-w-xl`;

const Indicator = tw(ProgressPrimitive.Indicator)`h-full bg-primary transition-all duration-500`;

interface Props extends ProgressPrimitive.ProgressProps {}

export const Progress = (props: Props) => {
	const { value = 0, ...rest } = props;

	return (
		<Root {...{ value, ...rest }}>
			<Indicator style={{ width: `${value}%` }} />
		</Root>
	);
};
