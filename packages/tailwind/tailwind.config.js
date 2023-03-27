module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
