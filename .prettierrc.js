import { config as defaultConfig } from '@epic-web/config/prettier';

/** @type {import("prettier").Options} */
export default {
	...defaultConfig,
	endOfLine: 'lf',
	importOrder: ['<THIRD_PARTY_MODULES>', '', '^~/(.*)$', '', '^[./]'],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.0.0',
	overrides: [
		{
			files: ['*.mdoc', '*.toml', '*.yaml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: '.nvmrc',
			options: { parser: 'yaml' },
		},
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
	plugins: [
		'prettier-plugin-curly',
		'prettier-plugin-packagejson',
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
	],
	semi: true,
};
