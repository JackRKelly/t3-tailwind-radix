import { tw } from "../utils/tw";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import React from "react";

const Root = tw(
	SwitchPrimitive.Root
)`group radix-state-checked:bg-primary radix-state-unchecked:bg-primitive-bold relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent duration-200 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Thumb = tw(
	SwitchPrimitive.Thumb
)`group-radix-state-checked:translate-x-5 group-radix-state-unchecked:translate-x-0 pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`;

type Props = SwitchPrimitive.SwitchProps & React.RefAttributes<HTMLButtonElement>;

const Switch: React.FC<Props> = (props) => {
	return (
		<Root {...props}>
			<Thumb />
		</Root>
	);
};

export default Switch;
