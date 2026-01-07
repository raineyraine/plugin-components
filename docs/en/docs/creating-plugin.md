# Creating a Plugin

plugin-components provides a utility function for creating plugin trees. This
automatically creates important contexts (like RobloxPluginProvider) and handles
mounting and unmounting. Just import the `createPlugin` function to start:

```tsx:line-numbers
import { createPlugin } from "@rbxts/plugin-components"
```

Now, we can call it with two arguments:

- The
  [`plugin`](https://create.roblox.com/docs/reference/engine/globals/RobloxGlobals#plugin)
  global to give the tree access to.
- A function returning the React tree to render. This is called with the
  provided plugin as its first argument.

```tsx:line-numbers {4-9}
import { createPlugin } from "@rbxts/plugin-components";

// Imagine we have a plugin tree here!
const tree = <></>;
createPlugin(plugin, (pluginSource) => {
    print(`Our ${pluginSource} is about to render!`);

    return tree;
});
```

Your plugin is ready! See [Deploying](#deploying) to deploy your plugin.

::: details Unmounting

`createPlugin()` handles unmounting your React tree for you. It's automatically
connected to the
[`Plugin.Unloading`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Unloading)
event, which will unmount your tree when your plugin is unloaded. This
unmounting function is also returned by `createPlugin()`, if you want to unmount
it before that.

Sometimes, you may have things that have to be cleaned up outside of your React
tree. `createPlugin()` has a third optional argument for this:

```tsx
// ...
const someInstancesToDestroy = new Set<Instance>();

const unmount = createPlugin(plugin, renderFunction, (pluginSource) => {
	for (const item of instancesToDestroy) {
		item.Destroy();
	}
});
```

This function, like the render function, is called with the provided plugin as
its first argument.

:::

## Deploying

::: warning WIP

This section is being written.

**TODO**

- [ ] Describe how to save a plugin in studio
- [ ] Describe how to publish a plugin
- [ ] Describe how to debug a plugin

:::
