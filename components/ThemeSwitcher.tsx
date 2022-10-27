import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ReactElement, useEffect, useState } from "react";
import { Button } from "./primitives/Button";
import * as Dropdown from "./primitives/Dropdown";

export type ThemeStyle = "light" | "dark" | "system";

interface Theme {
	key: ThemeStyle;
	label: string;
	icon: ReactElement;
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

export const ThemeSwitcher = () => {
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

	return (
		<Dropdown.Root
			trigger={
				<Button>
					{(() => {
						switch (preferredTheme) {
							case "light":
								return <SunIcon className="h-5 w-5 text-primitive-type" />;
							case "dark":
								return <MoonIcon className="h-5 w-5 text-primitive-type" />;
							default:
								return <Half2Icon className="h-5 w-5 text-primitive-type" />;
						}
					})()}
				</Button>
			}
		>
			{themes.map(({ key, label, icon }, i) => {
				return (
					<Dropdown.Item
						key={`theme-${i}`}
						onClick={() => {
							(window as any).__setPreferredTheme(key);
							setPreferredTheme(key);
						}}
						icon={icon}
						label={label}
					/>
				);
			})}
		</Dropdown.Root>
	);
};
