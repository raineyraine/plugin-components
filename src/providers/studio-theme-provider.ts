import { createContext, useContext, useEffect, useState } from "@rbxts/react";

export const StudioThemeContext = createContext<StudioTheme | undefined>(undefined);

const { Studio } = settings();

StudioThemeContext.displayName = "StudioThemeContext";

export function useStudioTheme() {
	const theme = useContext(StudioThemeContext);

	const [studioTheme, setStudioTheme] = useState(Studio.Theme);

	useEffect(() => {
		if (theme) {
			return;
		}

		const connection = Studio.ThemeChanged.Connect(() => {
			setStudioTheme(Studio.Theme);
		});

		return () => {
			connection.Disconnect();
		};
	}, [theme]);
	return theme ?? studioTheme;
}
