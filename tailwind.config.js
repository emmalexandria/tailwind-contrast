import accessibleVariants from "./index";

/** @type {import('tailwindcss').Config} */
module.exports = {
  accessibleVariants: "media",
  content: ["./src/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [accessibleVariants],
};
