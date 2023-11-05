import markdoc from '@astrojs/markdoc';
import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import { defineConfig } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
	site: 'https://block-commands.netlify.app',
	integrations: [keystatic(), markdoc(), react(), sitemap(), tailwind()],
	output: 'hybrid',
	adapter: netlify(),
});
