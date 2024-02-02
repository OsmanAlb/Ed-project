/** @type {import('tailwindcss').Config} */
export default {
	content: ['index.html', 'src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				lilitaOne: 'Lilita One'
			},
			colors: {
				background: '#F9F9F9',
				accent: '#4C6ED7',
				secondary: '#4F4F4F'
			}
		}
	},
	plugins: []
}
