/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headerTitle: 'Just Me Again Down Here, sans-serif',
        body: 'Istok Web, sans-serif',
      },
      fontSize: {
        '5.5xl': '3.5rem',
      },
      colors: {
        'naruto-blue': '#024DA1',
        'naruto-orange': '#F05321',
      },
      borderRadius: {
        button: '10px',
      },
    },
  },
  plugins: [],
}
