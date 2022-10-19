import { defineConfig } from 'astro/config';
import { FontaineTransform } from 'fontaine'

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
	site: 'https://block-commands.netlify.app',
	integrations: [
		mdx(),
		sitemap(),
		tailwind({ config: { applyBaseStyles: false } }),
	],
	output: 'server',
	adapter: netlify(),
	vite: {
		plugins:  [
			FontaineTransform.vite({
				fallbacks: [
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'Segoe UI Symbol',
				'"Noto Color Emoji"',
			],
			})
		],
	}
});
