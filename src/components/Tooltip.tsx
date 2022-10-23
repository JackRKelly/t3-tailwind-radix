import { tw } from "../utils/tw";
import Button from "./Button";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import cx from "clsx";
import React from "react";

const Content = tw(
	TooltipPrimitive.Content
)`radix-side-top:animate-slide-down-fade radix-side-right:animate-slide-left-fade radix-side-bottom:animate-slide-up-fade radix-side-left:animate-slide-right-fade inline-flex items-center rounded-md px-4 py-2.5 bg-primitive-faint border border-primitive-edge`;

const Arrow = tw(TooltipPrimitive.Arrow)`fill-current text-primitive-edge`;

const Body = tw.span`block text-sm leading-none text-primitive-type`;

interface Props {}

const Tooltip = (props: Props) => {
	return (
		<TooltipPrimitive.Provider>
			<TooltipPrimitive.Root>
				<TooltipPrimitive.Trigger asChild>
					<Button>Hover</Button>
				</TooltipPrimitive.Trigger>
				<Content sideOffset={4}>
					<Arrow />
					<Body>Sorry, but our princess is in another castle</Body>
				</Content>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	);
};

export default Tooltip;
