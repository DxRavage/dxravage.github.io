/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'zprim': 'var(--color-zprim)',
				'zsec': 'var(--color-zsec)',
				'rose': 'var(--color-rose)',
				'indigo': 'var(--color-indigo'
			},
			fontFamily: {
				jetbrains: ['JetBrains Mono', 'monospace'],
			}
		}
	}
};
