import { type DocumentElement } from '@keystatic/core';
import { Fragment } from 'react';

import { DocumentRenderer } from '../keystatic/renderer';
import { toHumanReadableDate, toIsoString } from '../lib/utils/date-helpers';

type PostProps = {
	document: DocumentElement[];
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
				<time dateTime={toIsoString(post.pubDate)} className="sr-only">
					{toHumanReadableDate(post.pubDate)}
				</time>
			) : null}
			<DocumentRenderer document={document} />
		</Fragment>
	);
}
