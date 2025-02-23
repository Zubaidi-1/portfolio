/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "great-vibes": ['"Great Vibes"', "serif"],
      },
    },
  },
  plugins: [],
};
