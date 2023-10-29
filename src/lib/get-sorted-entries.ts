import { reader } from '../keystatic/reader';

export async function getSortedEntries() {
	const facts = await reader.collections.facts.all();
	const tutorials = await reader.collections.tutorials.all();
	const videos = await reader.collections.videos.all();

	const entries = [
		...facts.map((fact) => ({
			...fact,
			category: 'facts',
			href: `facts/${fact.slug}`,
		})),
		...tutorials.map((tutorial) => ({
			...tutorial,
			category: 'tutorials',
			href: `tutorials/${tutorial.slug}`,
		})),
		...videos.map((video) => ({
			...video,
			category: 'videos',
			href: `videos/${video.slug}`,
		})),
	];

	return sortEntries(entries);
}

type BaseEntry = { entry: { pubDate: string } };

export function sortEntries<Entry extends BaseEntry>(entries: Entry[]) {
	return entries.sort(
		(a, b) =>
			new Date(b.entry.pubDate).valueOf() - new Date(a.entry.pubDate).valueOf(),
	);
}
