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
        cream: {
          50: "#FDFAF6",
          100: "#FAF8F5", // primary background
          200: "#F3EFE8",
          300: "#EBE3D7",
          400: "#DECFC0",
        },
        forest: {
          50: "#F0F5F2",
          100: "#DEEBE4",
          200: "#BCD5C8",
          300: "#8FB7A5",
          600: "#2B5242",
          700: "#234336",
          800: "#1E3A2F", // primary forest
          900: "#162B23",
          950: "#0D1B16",
        },
        bronze: {
          50: "#FBF7ED",
          100: "#F5EDD5",
          200: "#EBD7A7",
          300: "#DEC076",
          400: "#CFAA4B",
          500: "#B8860B", // muted bronze/gold accent
          600: "#9E6D08",
          700: "#7E5209",
          800: "#67410D",
        },
        charcoal: {
          50: "#F6F7F7",
          100: "#EAECEC",
          200: "#D3D7D6",
          300: "#ACB5B2",
          500: "#5D6A65",
          700: "#3D4843",
          800: "#2C3531", // primary charcoal text
          900: "#1F2623",
        },
        parchment: "#F5EFE6",
        sepiaBorder: "#E3D7C5",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        heritage: "0 4px 20px -2px rgba(30, 58, 47, 0.08), 0 2px 6px -1px rgba(30, 58, 47, 0.04)",
        "heritage-lg": "0 10px 30px -4px rgba(30, 58, 47, 0.12), 0 4px 12px -2px rgba(30, 58, 47, 0.06)",
        vault: "0 20px 40px -8px rgba(30, 58, 47, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
