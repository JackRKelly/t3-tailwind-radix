import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { PropsWithChildren } from "react";

interface Props
	extends PropsWithChildren,
		Pick<AspectRatioPrimitive.AspectRatioProps, "className" | "ratio"> {}

export const Root = (props: Props) => {
	const { className, children, ratio = 16 / 9 } = props;

	return (
		<AspectRatioPrimitive.Root {...{ className, ratio }}>{children}</AspectRatioPrimitive.Root>
	);
};
