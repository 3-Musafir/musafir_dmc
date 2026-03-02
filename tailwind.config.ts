import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['var(--font-outfit)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: '#2B2D42',
        secondary: '#FFFBFA',
        accent: '#FA3E01',
      },
    },
  },
  plugins: [],
}

export default config
