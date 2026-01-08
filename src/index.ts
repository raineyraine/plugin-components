export function makeHello(str: string) {
	return `Hello, ${str}!`;
}

export * from "./components";

// Providers
export * from "./providers/plugin-provider";
export * from "./providers/studio-theme-provider";

// Util
export * from "./util/create-plugin";
