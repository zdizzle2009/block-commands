import { component, fields } from '@keystatic/core';
import { cloudImage as keystaticCloudImage } from '@keystatic/core/component-blocks';

export const componentBlocks = {
	cloudImage: keystaticCloudImage({
		label: 'Cloud Image',
	}),
	videoEmbed: component({
		label: 'Video Embed',
		schema: {
			src: fields.text({
				label: 'embed code',
				multiline: true,
				validation: {
					length: {
						min: 1,
					},
				},
			}),
		},
		preview: (props) => (
			<iframe
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				frameBorder={0}
				src={props.fields.src.value}
				style={{ aspectRatio: '16/9' }}
				title="YouTube video player"
			/>
		),
	}),
};
