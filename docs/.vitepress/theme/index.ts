// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import "virtual:group-icons.css";

import "./style.css";

export default {
	enhanceApp({ app, router, siteData }) {
		// ...
	},
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, undefined, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
} satisfies Theme;
