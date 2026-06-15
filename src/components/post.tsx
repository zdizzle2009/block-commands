import type { DocumentElement } from '@keystatic/core';
import { Fragment } from 'react';
import { DocumentRenderer } from '../keystatic/renderer';
import { toHumanReadableDate, toIsoString } from '../lib/utils/date-helpers';

type PostProps = {
	document: Array<DocumentElement>;
	post: {
		title: string;
		description: string;
		pubDate: string;
	};
};

export function Post({ document, post }: PostProps) {
	return (
		<Fragment>
			<h1>{post.title}</h1>
			{post.pubDate ? (
				<time className="sr-only" dateTime={toIsoString(post.pubDate)}>
					{toHumanReadableDate(post.pubDate)}
				</time>
			) : null}
			<DocumentRenderer document={document} />
		</Fragment>
	);
}
