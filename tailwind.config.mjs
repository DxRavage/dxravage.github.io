/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'var(--color-primary)',
				'secondary': 'var(--color-secondary)',
				'rose': 'var(--color-rose)',
				'zinc': 'var(--color-zinc)'
			},
			fontFamily: {
				jetbrains: ['JetBrains Mono', 'monospace'],
				levibrush: ['LeviReBrushed'],
				mechsuit: ['Mechsuit'],
				michroma: ['Michroma']
			}
		}
	}
};
