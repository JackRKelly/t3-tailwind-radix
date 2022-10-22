import * as SwitchPrimitive from "@radix-ui/react-switch";
import clsx from "clsx";
import React from "react";

type Props = SwitchPrimitive.SwitchProps & React.RefAttributes<HTMLButtonElement>;

const Switch: React.FC<Props> = (props) => {
	return (
		<SwitchPrimitive.Root
			{...props}
			className={clsx(
				"group radix-state-checked:bg-primary radix-state-unchecked:bg-primitive-bold relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-highlight focus-visible:ring-opacity-75"
			)}
		>
			<SwitchPrimitive.Thumb
				className={clsx(
					"group-radix-state-checked:translate-x-5 group-radix-state-unchecked:translate-x-0 pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-primitive shadow-lg ring-0 transition duration-200 ease-in-out"
				)}
			/>
		</SwitchPrimitive.Root>
	);
};

export default Switch;
