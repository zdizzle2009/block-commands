import markdoc from '@astrojs/markdoc';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
	site: 'https://block-commands.netlify.app',
	integrations: [keystatic(), markdoc(), react(), sitemap()],
	output: 'static',
	adapter: netlify({
		edgeMiddleware: true,
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
