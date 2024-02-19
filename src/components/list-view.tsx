import { type DocumentElement } from '@keystatic/core';

type ListViewProps = {
	posts: Array<{
		category: string;
		href: string;
		slug: string;
		entry: {
			title: string;
			description: string;
			pubDate: string;
			content: () => Promise<DocumentElement[]>;
		};
	}>;
};

export function ListView({ posts }: ListViewProps) {
	return (
		<table className="m-0 min-w-full text-base">
			<thead className="sr-only">
				<tr>
					<th>Date</th>
					<th>Title</th>
					<th>Category</th>
				</tr>
			</thead>
			<tbody>
				{posts.map((post) => (
					<tr key={post.slug} className="border-b border-gray-200">
						<td className="whitespace-nowrap p-2">
							<time dateTime={post.entry.pubDate}>
								{new Date(post.entry.pubDate).toLocaleDateString('en-AU', {
									year: 'numeric',
									month: 'short',
									day: 'numeric',
								})}
							</time>
						</td>
						<td className="w-full p-2">
							<a href={post.href}>{post.entry.title}</a>
						</td>
						<td className="whitespace-nowrap p-2">
							<a href={`/${post.category}`} className="ml-auto">
								#{post.category}
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
