import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: '#FFF9E5',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFC933',
          500: '#FFB800',
          600: '#CC9300',
          700: '#996E00',
          800: '#664A00',
          900: '#332500',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
