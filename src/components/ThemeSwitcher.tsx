import { tw } from "../utils/tw";
import { themes, useTheme } from "./ThemeProvider";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";

const Label = tw.span`flex-grow text-primitive-type-bold`;

const Item = tw(
	DropdownMenuPrimitive.Item
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type focus:bg-primitive`;

const Trigger = tw(
	DropdownMenuPrimitive.Trigger
)`inline-flex select-none justify-center rounded-md px-2.5 py-2 text-sm font-medium bg-primitive-faint text-primitive-type hover:bg-primitive border border-primitive-edge focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Content = tw(
	DropdownMenuPrimitive.Content
)`radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down w-48 rounded-lg px-1.5 py-1 md:w-56 bg-primitive-faint border-primitive-edge border`;

const Arrow = tw(DropdownMenuPrimitive.DropdownMenuArrow)`fill-current text-primitive-edge`;

interface Props {
	side?: DropdownMenuPrimitive.DropdownMenuContentProps["side"];
	sideOffset?: DropdownMenuPrimitive.DropdownMenuContentProps["sideOffset"];
	align?: DropdownMenuPrimitive.DropdownMenuContentProps["align"];
	alignOffset?: DropdownMenuPrimitive.DropdownMenuContentProps["alignOffset"];
}

const ThemeSwitcher = (props: Props) => {
	const { theme, setTheme } = useTheme();

	const { align, alignOffset, side, sideOffset = 4 } = props;

	return (
		<div className="relative inline-block text-left">
			<DropdownMenuPrimitive.Root>
				<Trigger>
					{(function () {
						switch (theme) {
							case "light":
								return <SunIcon className="h-5 w-5 text-primitive-type" />;
							case "dark":
								return <MoonIcon className="h-5 w-5 text-primitive-type" />;
							default:
								return <Half2Icon className="h-5 w-5 text-primitive-type" />;
						}
					})()}
				</Trigger>

				<DropdownMenuPrimitive.Portal>
					<Content sideOffset={sideOffset} side={side} alignOffset={alignOffset} align={align}>
						<Arrow />
						{themes.map(({ key, label, icon }, i) => {
							return (
								<Item
									key={`theme-${i}`}
									onClick={() => {
										setTheme?.(key);
									}}
								>
									{React.cloneElement(icon, {
										className: "w-5 h-5 mr-2 text-primitive-type-extra-faint"
									})}
									<Label>{label}</Label>
								</Item>
							);
						})}
					</Content>
				</DropdownMenuPrimitive.Portal>
			</DropdownMenuPrimitive.Root>
		</div>
	);
};

export default ThemeSwitcher;
