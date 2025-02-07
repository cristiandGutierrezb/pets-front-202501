import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#161622",
        secondary: {
          DEFAULT: "#ff9C01",
          100: '#ff9001',
          200: '#ff8e01',
        },
        black: {
          DEFAULT: "#000",
          100: "#1e1e2d",
          200: "#232533",
        },
        danger: {
          DEFAULT: '#FA1508',
          100: '#F94F3F',
          200: '#FA756E'
        },
        gray: {
          100: "#cdcd30"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
