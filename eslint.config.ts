import isentinel from "@isentinel/eslint-config";

export default isentinel(
	{
		name: "project/core",

		pnpm: true,
		react: true,
		type: "package",
	},
	{ name: "project/rules", rules: { "ts/explicit-function-return-type": "off" } },
);
