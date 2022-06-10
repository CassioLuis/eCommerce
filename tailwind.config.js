module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridAutoColumns: {
        "2fr": "minmax(300px, 2fr)",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
