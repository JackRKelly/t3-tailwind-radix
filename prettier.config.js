/** @type {import("prettier").Config} */
module.exports = {
	plugins: [
		require.resolve("prettier-plugin-tailwindcss"),
		require.resolve("@trivago/prettier-plugin-sort-imports")
	],
	useTabs: true,
	printWidth: 100,
	singleQuote: false,
	trailingComma: "none",
	semi: true,
	quoteProps: "consistent",
	endOfLine: "lf",
	bracketSpacing: true,
	arrowParens: "always",
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
};
