import { defineConfig } from 'astro/config';
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
});
