/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        accent: 'rgb(var(--accent))',
        black: 'rgb(var(--black))',
        gray: 'rgb(var(--gray))',
        'gray-light': 'rgb(var(--gray-light))',
        'gray-dark': 'rgb(var(--gray-dark))',
      },
      boxShadow: {
        'custom': 'var(--box-shadow)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
