import markdoc from '@astrojs/markdoc';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
	site: 'https://block-commands.netlify.app',
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Press Start 2P',
			cssVariable: '--font-press-start-2p',
		},
	],
	integrations: [keystatic(), markdoc(), react(), sitemap()],
	output: 'static',
	adapter: netlify({
		edgeMiddleware: true,
	}),
	vite: {
		optimizeDeps: {
			exclude: [
				'@keystatic/astro',
				'@keystatic/astro/internal/keystatic-api.js',
			],
		},
		plugins: [tailwindcss()],
	},
});
