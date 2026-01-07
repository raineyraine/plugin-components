import { createContext, useContext } from "@rbxts/react";

export const RobloxPluginContext = createContext<Plugin>(undefined!);

RobloxPluginContext.displayName = "RobloxPluginContext";

export function usePlugin() {
	return useContext(RobloxPluginContext);
}
