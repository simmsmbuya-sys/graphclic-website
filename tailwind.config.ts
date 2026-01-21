import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      colors: {
        graphclic: {
          red: '#991B1E',
          'red-dark': '#7a1518',
          black: '#000000',
          gold: '#D4AF37',
          grey: '#4A4A4A',
          light: '#F8F8F8',
        },
      },
    },
  },
  plugins: [],
};
export default config;
