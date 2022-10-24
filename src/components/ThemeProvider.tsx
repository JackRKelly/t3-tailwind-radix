import { useLocalStorage } from "../hooks/useLocalStorage";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React, { createContext, useEffect, useLayoutEffect } from "react";

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

interface ThemeContextProps {
	theme: ThemeStyle;
	setTheme: null | ((value: ThemeStyle | ((val: ThemeStyle) => ThemeStyle)) => void | null);
}

const ThemeContext = createContext<ThemeContextProps>({ theme: "system", setTheme: null });

interface ThemeProviderProps {
	children?: React.ReactNode;
}

const setDataTheme = (theme: ThemeStyle) => {
	document.documentElement.setAttribute("data-theme", theme);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

	const [localTheme, setLocalTheme] = useLocalStorage<ThemeStyle>("theme", "system");
	const [theme, setTheme] = React.useState<ThemeStyle>("system");

	const updateTheme = (_e: MediaQueryListEvent) => {
		setTheme("system");
	};

	useLayoutEffect(() => {
		setTheme(localTheme);
	}, [localTheme]);

	useEffect(() => {
		setDataTheme(theme);
	}, [theme]);

	useEffect(() => {
		prefersDarkQuery.addEventListener("change", updateTheme);

		return () => {
			prefersDarkQuery.removeEventListener("change", updateTheme);
		};
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme: setLocalTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => React.useContext(ThemeContext);
