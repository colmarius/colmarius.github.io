/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					500: '#6366f1', // indigo-500
					600: '#4f46e5', // indigo-600
					700: '#3730a3', // indigo-700
				},
			},
		},
	},
	plugins: [],
};
