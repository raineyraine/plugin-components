import type { PropsWithChildren } from "@rbxts/react";
import React from "@rbxts/react";

import { StudioThemeContext } from "providers/studio-theme-provider";

interface StudioThemeProviderProps extends PropsWithChildren {
	theme: StudioTheme;
}

export function StudioThemeProvider({ theme, children }: Readonly<StudioThemeProviderProps>) {
	return <StudioThemeContext.Provider value={theme}>{children}</StudioThemeContext.Provider>;
}
