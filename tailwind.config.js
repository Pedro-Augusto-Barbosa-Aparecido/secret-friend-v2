/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        register: '37.5rem',
      },
      fontFamily: {
        headerTitle: 'Just Me Again Down Here, sans-serif',
        body: 'Istok Web, sans-serif',
      },
      fontSize: {
        '5.5xl': '3.5rem',
      },
      gridTemplateColumns: {
        register: 'minmax(25.75rem, 50rem) 1fr minmax(18.75rem, 35rem)',
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
