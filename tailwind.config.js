/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#FCE7ED",
          200: "#F8C5D1",
          300: "#F397B1",
          400: "#E96A92",
          500: "#E13C73",
          600: "#C62C60",
          700: "#9C234B",
          800: "#731A37",
          900: "#4A1122",
        },
        secondary: {
          100: "#FAF9F6",
          200: "#EDE9E0",
          300: "#E0D7C9",
          400: "#C6BAA5",
          500: "#A9937F",
          600: "#806D5C",
          700: "#5C4C3F",
          800: "#3A342B",
          900: "#1F1C16",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
