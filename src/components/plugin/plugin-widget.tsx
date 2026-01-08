import type { Attributes } from "@rbxts/react";
import React, { useEffect, useState } from "@rbxts/react";
import { createPortal } from "@rbxts/react-roblox";

import { usePlugin } from "providers/plugin-provider";

export interface PluginWidgetProps extends Attributes {
	/**
	 * A unique and consistent identifier used to storing the widget's dock
	 * state and other internal details.
	 *
	 * **NOTE**: This MUST never change. Otherwise, Roblox Studio will unable to
	 * remember the state of the plugin between sessions. Keep it unique, too.
	 */
	id: string;

	initialDockState?: Enum.InitialDockState;
	initialEnabled?: boolean;
	initialFloatSize?: Vector2;
	minSize?: Vector2;
	title?: string;
}

/**
 * Wrapper for DockWidgetPluginGui.
 *
 * @param props - PluginWidgetProps to pass into the component.
 * @returns A portal for children of the widget to render into.
 * @see [DockWidgetPluginGui](https://create.roblox.com/docs/reference/engine/classes/Plugin#CreateDockWidgetPluginGuiAsync)
 */
export function PluginWidget({
	id,
	key,
	initialDockState,
	initialEnabled,
	initialFloatSize,
	minSize,
	title,
	children,
}: Readonly<PluginWidgetProps>) {
	const plugin = usePlugin();
	const [widget, setWidget] = useState<DockWidgetPluginGui | undefined>(undefined);

	const overrideEnabledRestore = false;

	// Create widget
	useEffect(() => {
		const widgetInfo = new DockWidgetPluginGuiInfo(
			initialDockState,
			initialEnabled,
			overrideEnabledRestore,
			initialFloatSize?.X,
			initialFloatSize?.Y,
			minSize?.X,
			minSize?.Y,
		);
		const createdWidget = plugin.CreateDockWidgetPluginGuiAsync(id, widgetInfo);
		createdWidget.Name = tostring(key) === "nil" ? id : tostring(key);

		/* LOOK-INTO: Moving this out of the Create widget effect? We shouldn't re-create the whole component when the title changes. */
		createdWidget.Title = title ?? createdWidget.Name;
		setWidget(createdWidget);

		return () => {
			createdWidget.Destroy();
		};
	}, [
		initialDockState,
		initialEnabled,
		overrideEnabledRestore,
		initialFloatSize,
		minSize,
		id,
		plugin,
		key,
		title,
	]);

	const widgetChildren = (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			{children}
		</frame>
	);

	return widget ? createPortal(widgetChildren, widget) : undefined;
}
