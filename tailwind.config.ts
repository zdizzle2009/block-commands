import typographyPlugin from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdoc,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				green: {
					light: '#ded',
					dark: '#3d7144',
				},
			},
			fontFamily: {
				display: ['"Press Start 2P"', ...defaultTheme.fontFamily.sans],
			},
			typography: ({ theme }: { theme: (...args: any) => any }) => ({
				DEFAULT: {
					css: {
						h1: {
							color: theme('colors.green.dark'),
							fontFamily: theme('fontFamily.display').join(', '),
							fontSize: theme('fontSize.5xl'),
							lineHeight: 1.25,
							textTransform: 'uppercase',
							textWrap: 'balance',
						},
						h2: {
							textWrap: 'balance',
						},
					},
				},
			}),
		},
	},
	plugins: [typographyPlugin],
} satisfies Config;
