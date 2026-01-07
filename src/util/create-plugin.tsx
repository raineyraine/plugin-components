import { Error } from "@rbxts/luau-polyfill";
import type { ReactNode } from "@rbxts/react";
import React from "@rbxts/react";
import { createRoot } from "@rbxts/react-roblox";

import { RobloxPluginProvider } from "../components";

/**
 * Utility function for creating an app. Automatically handles plugin unloading
 * and core plugin providers.
 *
 * The `plugin` arguments passed to `render` should not be used within function
 * components.. Instead, use the `RobloxPluginContext` or the `usePlugin` hook.
 *
 * @template T Used for extensions of the Plugin interface.
 * @param pluginSource - The source plugin, usually the `plugin` Roblox global.
 * @param render - Called when rendering, passed as the children of core plugin
 *   providers in `root.render`.
 * @param unloader - An optional function, called right before the plugin tree
 *   unmounts. Use for cleanup behavior.
 * @returns A function to call when unloading the plugin. This calls your
 *   `unloader` function, if specified, and then unmounts the React tree. It is
 *   automatically connected to `pluginSource.Unloading`. _You cannot unload a
 *   plugin tree more than once_.
 */
export function createPlugin<T extends Plugin>(
	pluginSource: T,
	render: (plugin: T) => ReactNode,
	unloader?: (plugin: T) => void,
): () => void {
	/* eslint-disable-next-line ts/no-unnecessary-type-assertion -- Needed to remove warnings */
	pluginSource = pluginSource as T;

	const folder = new Instance("Folder");
	folder.Name = `${pluginSource.Name}-react-tree`;
	folder.Parent = pluginSource;

	const root = createRoot(folder);

	let mounted = true;

	const unload = () => {
		if (!mounted) {
			throw Error("attempt to unload already unloaded plugin tree!");
		}

		mounted = false;
		if (unloader) {
			unloader(pluginSource);
		}

		root.unmount();
	};

	pluginSource.Unloading.Once(unload);

	root.render(
		<RobloxPluginProvider plugin={pluginSource}>{render(pluginSource)}</RobloxPluginProvider>,
	);

	return unload;
}
