import { collection, fields, config as keystaticConfig } from '@keystatic/core';

import { componentBlocks } from './component-blocks';

export const config = keystaticConfig({
	storage: {
		kind: 'local',
	},
	collections: {
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
				heroImage: fields.image({
					label: 'Hero Image',
					directory: 'public/images/facts',
					publicPath: '/images/facts/',
				}),
				content: fields.document({
					label: 'Content',
					componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: 'public/images/facts',
						publicPath: '/images/facts/',
					},
				}),
			},
		}),
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
				heroImage: fields.image({
					label: 'Hero Image',
					directory: 'public/images/tutorials',
					publicPath: '/images/tutorials/',
				}),
				content: fields.document({
					label: 'Content',
					componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: 'public/images/tutorials',
						publicPath: '/images/tutorials/',
					},
				}),
			},
		}),
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
				heroImage: fields.image({
					label: 'Hero Image',
					directory: 'public/images/videos',
					publicPath: '/images/videos/',
				}),
				content: fields.document({
					label: 'Content',
					componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: 'public/images/videos',
						publicPath: '/images/videos/',
					},
				}),
			},
		}),
	},
});