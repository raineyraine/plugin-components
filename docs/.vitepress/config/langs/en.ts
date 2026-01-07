import { defineConfig } from "vitepress";

export default defineConfig({
	description: "React components for Roblox-TS plugins",
	lang: "en-US",

	themeConfig: {
		nav: [
			{ link: "/", text: "Home" },
			{ link: "/docs/introduction", text: "Get Started" },
			{ link: "/api/home", text: "API" },
		],
		sidebar: {
			"/api/": [],
			"/docs/": [
				{
					items: [
						{ link: "/docs/introduction", text: "Introduction" },
						{ link: "/docs/installation", text: "Installation" },
						{ link: "docs/creating-plugin", text: "Creating a Plugin" },
					],
					text: "Get Started",
				},
			],
		},
	},
});
