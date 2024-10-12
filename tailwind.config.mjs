/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      sans: [
        'Roboto',
        '-apple-system',
        '"BlinkMacSystemFont"',
        '"Segoe UI"',
        'Roboto',
        '"Oxygen-Sans"',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    container: {
      screens: {
        lg: '1024px',
        xl: '1200px',
      },
    },
		extend: {
      boxShadow: {
        'header_shadow': '0 0 6px rgba(0, 0, 0, 0.15)',
      }
    },
	},
	plugins: [],
}
