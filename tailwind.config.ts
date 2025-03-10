import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { join } from 'path';
import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import plugin from 'tailwindcss/plugin';
import { sockTheme } from './sock-theme'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [sockTheme]
			}
		}),
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					'bg-shadow': (color: any) => {
						return {
							'background-image': `linear-gradient(to bottom, ${color}, 70%, rgba(0, 0, 0, 0.8))`
						};
					}
				},
				{ values: flattenColorPalette(theme('colors')), type: ['color', 'any'] }
			);
		})
	]
} satisfies Config;
