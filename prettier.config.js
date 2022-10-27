/** @type {import("prettier").Config} */
module.exports = {
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
	useTabs: true,
	printWidth: 100,
	singleQuote: false,
	trailingComma: "none",
	semi: true,
	quoteProps: "consistent",
	endOfLine: "lf",
	bracketSpacing: true,
	arrowParens: "always"
};
