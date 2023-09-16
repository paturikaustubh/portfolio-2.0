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
        accent: {
          100: "#ffe7d8",
          200: "#ffcfb2",
          300: "#ffb78b",
          400: "#ff9f65",
          500: "#ff873e",
          600: "#cc6c32",
          700: "#995125",
          800: "#663619",
          900: "#331b0c",
        },
      },
    },
  },
  plugins: [],
};
