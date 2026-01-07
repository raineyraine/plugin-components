import type { PropsWithChildren } from "@rbxts/react";
import React from "@rbxts/react";

import { RobloxPluginContext } from "providers/plugin-provider";

interface RobloxPluginProviderProps extends PropsWithChildren {
	plugin: Plugin;
}

export function RobloxPluginProvider({ plugin, children }: Readonly<RobloxPluginProviderProps>) {
	return <RobloxPluginContext.Provider value={plugin}>{children}</RobloxPluginContext.Provider>;
}
