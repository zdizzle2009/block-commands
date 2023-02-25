import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

/** @see https://astro.build/config */
export default defineConfig({
	site: 'https://block-commands.netlify.app',
	integrations: [
		mdx(),
		sitemap(),
		tailwind({ config: { applyBaseStyles: false } }),
	],
	output: 'static',
});
