module.exports = {
	proseWrap: 'always',
	quoteProps: 'consistent',
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
