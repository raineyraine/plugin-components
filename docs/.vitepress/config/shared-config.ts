import { defineConfig } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
	markdown: {
		config(md) {
			md.use(groupIconMdPlugin);
		},
	},
	rewrites: {
		"en/:rest*": ":rest*",
	},
	themeConfig: {
		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
	},

	title: "plugin-components",
	titleTemplate: ":title - plugin-components",

	vite: {
		plugins: [groupIconVitePlugin()],
	},
});
