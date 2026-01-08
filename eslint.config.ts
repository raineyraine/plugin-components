import isentinel from "@isentinel/eslint-config";

export default isentinel(
	{
		name: "project/core",
		namedConfigs: true,

		pnpm: true,
		react: true,
		type: "package",
	},
	{
		name: "project/rules",
		rules: {
			"package-json/require-exports": "off",
			"ts/explicit-function-return-type": "off",
			"ts/no-non-null-assertion": "off",
		},
	},
	{
		name: "project/docs-rules",
		files: ["docs/**"],
		rules: {
			"roblox/no-undeclared-scope": "off",
		},
	},
	{
		name: "project/package-rules",
		files: ["test/**", "docs/**"],
		rules: {
			"package-json/require-attribution": "off",
			"package-json/require-author": "off",
			"package-json/require-description": "off",
			"package-json/require-exports": "off",
			"package-json/require-files": "off",
			"package-json/require-keywords": "off",
			"package-json/require-license": "off",
			"package-json/require-types": "off",
		},
	},
);
