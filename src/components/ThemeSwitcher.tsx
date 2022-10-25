import { tw } from "../utils/tw";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";

export type ThemeStyle = "light" | "dark" | "system";

interface Theme {
	key: ThemeStyle;
	label: string;
	icon: React.ReactElement;
}

export const themes: Theme[] = [
	{
		key: "light",
		label: "Light",
		icon: <SunIcon />
	},
	{
		key: "dark",
		label: "Dark",
		icon: <MoonIcon />
	},

	{
		key: "system",
		label: "System",
		icon: <Half2Icon />
	}
];

const Label = tw.span`flex-grow text-primitive-type-bold`;

const Item = tw(
	DropdownMenuPrimitive.Item
)`flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none text-primitive-type focus:bg-primitive`;

const Trigger = tw(
	DropdownMenuPrimitive.Trigger
)`inline-flex select-none justify-center rounded-md px-2.5 py-2 text-sm font-medium bg-primitive-faint text-primitive-type hover:bg-primitive border border-primitive-edge focus-visible:border-transparent focus:outline-none focus-visible:ring focus-visible:ring-highlight transition-button`;

const Content = tw(
	DropdownMenuPrimitive.Content
)`radix-state-open:radix-side-top:animate-slide-down-fade-in radix-state-closed:radix-side-top:animate-slide-down-fade-out radix-state-open:radix-side-right:animate-slide-left-fade-in radix-state-closed:radix-side-right:animate-slide-left-fade-out radix-state-open:radix-side-bottom:animate-slide-up-fade-in radix-state-closed:radix-side-bottom:animate-slide-up-fade-out radix-state-open:radix-side-left:animate-slide-right-fade-in radix-state-closed:radix-side-left:animate-slide-right-fade-out w-48 md:w-56 bg-primitive-faint bg-opacity-[90%] backdrop-blur rounded-lg`;

const ContentInner = tw.div`border border-primitive-edge rounded-lg px-1.5 py-1`;

const Arrow = tw(
	DropdownMenuPrimitive.DropdownMenuArrow
)`fill-current text-primitive-edge flex w-2 h-1`;

interface Props {
	side?: DropdownMenuPrimitive.DropdownMenuContentProps["side"];
	sideOffset?: DropdownMenuPrimitive.DropdownMenuContentProps["sideOffset"];
	align?: DropdownMenuPrimitive.DropdownMenuContentProps["align"];
	alignOffset?: DropdownMenuPrimitive.DropdownMenuContentProps["alignOffset"];
}

const ThemeSwitcher = (props: Props) => {
	const [preferredTheme, setPreferredTheme] = useState<null | ThemeStyle>(null);

	useEffect(() => {
		try {
			let found = localStorage.getItem("theme") as ThemeStyle | null;
			setPreferredTheme(found);
		} catch (error) {}
	}, []);

	useEffect(() => {
		const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const updateTheme = (_e: MediaQueryListEvent) => {
			setPreferredTheme("system");
		};
		prefersDarkQuery.addEventListener("change", updateTheme);

		return () => {
			prefersDarkQuery.removeEventListener("change", updateTheme);
		};
	}, []);

	const { align, alignOffset, side, sideOffset = 4 } = props;

	return (
		<div className="relative inline-block text-left">
			<DropdownMenuPrimitive.Root>
				<Trigger>
					{(function () {
						switch (preferredTheme) {
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
					<Content
						sideOffset={sideOffset}
						side={side}
						alignOffset={alignOffset}
						align={align}
						forceMount
					>
						<ContentInner>
							<Arrow />
							{themes.map(({ key, label, icon }, i) => {
								return (
									<Item
										key={`theme-${i}`}
										onClick={() => {
											(window as any).__setPreferredTheme(key);
											setPreferredTheme(key);
										}}
									>
										{React.cloneElement(icon, {
											className: "w-5 h-5 mr-2 text-primitive-type-extra-faint"
										})}
										<Label>{label}</Label>
									</Item>
								);
							})}
						</ContentInner>
					</Content>
				</DropdownMenuPrimitive.Portal>
			</DropdownMenuPrimitive.Root>
		</div>
	);
};

export default ThemeSwitcher;
