import { collection, fields, config as keystaticConfig } from '@keystatic/core';

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
				}),
				heroImage: fields.image({
					label: 'Hero Image',
					directory: 'public/images/facts',
					publicPath: '/images/facts/',
				}),
				content: fields.document({
					label: 'Content',
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
	},
});
