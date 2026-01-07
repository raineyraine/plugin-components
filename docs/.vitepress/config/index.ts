import { defineConfig } from "vitepress";

import en from "./langs/en";
import { shared } from "./shared-config";

export default defineConfig({
	...shared,
	locales: {
		root: { label: "English", ...en },
	},
});
