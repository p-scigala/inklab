import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: {
          100: "#FEE00D",
          300: "#FFCD08",
          500: "#FEB412",
          700: "#FF9A0D",
          900: "#DD8008",
        },
        secondary: {
          100: "#9F1D35",
          300: "#801D35",
          500: "#611D35",
          700: "#421D35",
          900: "#231D35",
        },
        foreground: {
          100: "#FFFFFF",
          300: "#EEEEEE",
          500: "#DDDDDD",
          700: "#CCCCCC",
          900: "#BBBBBB",
        },
        background: {
          100: "#060606",
          300: "#101010",
          500: "#1A1A1A",
          700: "#262626",
          900: "#323232",
        },
      },
      animation: {
        'move-and-hide': 'moveAndHide 10s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
