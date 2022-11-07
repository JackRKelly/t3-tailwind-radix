import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, AspectRatioPrimitive.AspectRatioProps {}

export const Root = (props: Props) => {
	const { children, ...rest } = props;

	return <AspectRatioPrimitive.Root {...rest}>{children}</AspectRatioPrimitive.Root>;
};
