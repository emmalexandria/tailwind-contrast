const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = plugin(function ({ addVariant, e, theme, config }) {
  addVariant("low-contrast", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const lowContrast = e(`low-contrast${separator}${className}`);
      return `.low-contrast .${lowContrast}`;
    });
  }),
    addVariant("high-contrast", ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const highContrast = e(`high-contrast${separator}${className}`);
        return `.high-contrast .${highContrast}`;
      });
    });
});
