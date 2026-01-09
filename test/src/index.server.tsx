import { createPlugin, PluginWidget } from "@rbxts/plugin-components";
import React from "@rbxts/react";

createPlugin(plugin, () => {
	return <PluginWidget id="test-widget-hello-world" />;
});
