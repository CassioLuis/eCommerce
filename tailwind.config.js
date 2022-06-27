module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    gridTemplateColumns: {
      "auto-fit": "repeat(auto-fit, minmax(240px, 240px))",
    },
    extend: {
      gridAutoColumns: {
        "2fr": "minmax(300px, 2fr)",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
