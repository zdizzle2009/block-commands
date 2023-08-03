module.exports = {
	endOfLine: 'lf',
	importOrder: ['<THIRD_PARTY_MODULES>', '', '^~/(.*)$', '', '^[./]'],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
	overrides: [
		{ files: '*.astro', options: { parser: 'astro' } },
		{ files: '.*rc', options: { parser: 'json' } },
		{ files: '.nvmrc', options: { parser: 'yaml' } },
	],
	plugins: [
		require.resolve('prettier-plugin-curly'),
		require.resolve('prettier-plugin-packagejson'),
		require.resolve('@ianvs/prettier-plugin-sort-imports'),
		require.resolve('prettier-plugin-astro'),
		require.resolve('prettier-plugin-tailwindcss'),
	],
	proseWrap: 'always',
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
};
