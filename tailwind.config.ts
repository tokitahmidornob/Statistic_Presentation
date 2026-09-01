import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFBFC",
        foreground: "#0E1116",
        primary: {
          DEFAULT: "#1F4FFF",
          light: "#E8EDFF", // subtle background for primary highlights
        },
        secondary: {
          DEFAULT: "#00C2A8", // positive
          light: "#E5F9F6",
        },
        tertiary: {
          DEFAULT: "#FF5A5F", // negative
          light: "#FFF0F0",
        },
        neutral: {
          900: "#0E1116", // headings
          600: "#5B6470", // body text
          100: "#FAFBFC", // background
          white: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
export default config;
