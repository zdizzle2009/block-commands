import { collection, config, fields } from '@keystatic/core';

import { componentBlocks } from './src/keystatic/component-blocks';

const isDev = process.env.NODE_ENV === 'development';

export default config({
	cloud: {
		project: 'luke-bennett/block-commands',
	},
	storage: isDev
		? {
				kind: 'local',
		  }
		: {
				kind: 'cloud',
		  },
	collections: {
		// Facts
		facts: collection({
			label: 'Facts',
			slugField: 'title',
			path: 'src/content/facts/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
					},
				}),
				description: fields.text({
					label: 'Description',
				}),
				pubDate: fields.date({
					defaultValue: {
						kind: 'today',
					},
					label: 'Publish Date',
					validation: {
						isRequired: true,
					},
				}),
				content: fields.document({
					label: 'Content',
					componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
				}),
			},
		}),

		// Tutorials
		tutorials: collection({
			label: 'Tutorials',
			slugField: 'title',
			path: 'src/content/tutorials/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
					},
				}),
				description: fields.text({
					label: 'Description',
				}),
				pubDate: fields.date({
					defaultValue: {
						kind: 'today',
					},
					label: 'Publish Date',
					validation: {
						isRequired: true,
					},
				}),
				content: fields.document({
					label: 'Content',
					componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
				}),
			},
		}),

		// Videos
		videos: collection({
			label: 'Videos',
			slugField: 'title',
			path: 'src/content/videos/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
					},
				}),
				description: fields.text({
					label: 'Description',
				}),
				pubDate: fields.date({
					defaultValue: {
						kind: 'today',
					},
					label: 'Publish Date',
					validation: {
						isRequired: true,
					},
				}),
				content: fields.document({
					label: 'Content',
					componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
				}),
			},
		}),
	},
});
