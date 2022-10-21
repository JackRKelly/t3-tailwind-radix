import { useLocalStorage } from "../hooks/useLocalStorage";
import React, { createContext, useLayoutEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
	theme: Theme;
	setTheme: null | ((value: Theme | ((val: Theme) => Theme)) => void | null);
}

const ThemeContext = createContext<ThemeContextProps>({ theme: "light", setTheme: null });

interface ThemeProviderProps {
	children?: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");

	useLayoutEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);
