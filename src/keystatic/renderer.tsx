import { type InferRenderersForComponentBlocks } from '@keystatic/core';
import {
	DocumentRenderer as KeystaticDocumentRenderer,
	type DocumentRendererProps,
} from '@keystatic/core/renderer';

import { CloudImage } from '../components/cloud-image';
import { type componentBlocks } from './component-blocks';

export function DocumentRenderer(props: DocumentRendererProps) {
	return (
		<KeystaticDocumentRenderer
			{...props}
			componentBlocks={componentBlockRenderers}
		/>
	);
}

const componentBlockRenderers = {
	cloudImage(props) {
		return <CloudImage {...props} />;
	},
	videoEmbed(props) {
		return (
			<iframe
				{...props}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="aspect-video"
				frameBorder={0}
				style={{ aspectRatio: '16/9' }}
				title="YouTube video player"
			/>
		);
	},
} satisfies InferRenderersForComponentBlocks<typeof componentBlocks>;
