import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { ReactNode } from "react";
import { tw } from "../../utils/tw";
import { Label } from "./Label";

const _Root = tw(
	CheckboxPrimitive.Root
)`flex h-5 w-5 items-center justify-center rounded radix-state-checked:bg-primary radix-state-unchecked:bg-primitive-faint radix-state-unchecked:border border-primitive-edge focus-visible:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

interface RootProps extends CheckboxPrimitive.CheckboxProps {
	id: string;
	label: ReactNode;
}

export const Root = (props: RootProps) => {
	const { id, label, ...rest } = props;

	return (
		<>
			<_Root
				{...{
					id,
					...rest
				}}
			>
				<CheckboxPrimitive.Indicator>
					<CheckIcon className="h-4 w-4 self-center text-white" />
				</CheckboxPrimitive.Indicator>
			</_Root>

			<Label className={clsx("ml-3 select-none")} color="bold" htmlFor={id}>
				{label}
			</Label>
		</>
	);
};
