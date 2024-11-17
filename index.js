import plugin from "tailwindcss/plugin";

function createAndAddVariant(addVariant, e, name, useClass, mediaQuery = "") {
  if (useClass) {
    addVariant(name, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const childSelector = e(`${name}${separator}${className}`);
        return `.${name} .${childSelector}`;
      });
    });
  } else {
    addVariant(name, mediaQuery);
  }
}

export default plugin(function({ addVariant, e, theme, config }) {
  let useClass = true;
  let configValue = config("accessibleVariants");
  if (configValue == "media") {
    useClass = false;
  } else if (configValue == "selector" || configValue == undefined) {
    useClass = true;
  } else {
    throw new Error(
      "Invalid strategy selected for accessibleVariants in TailwindCSS config. Please select either 'selector' or 'media'",
    );
  }

  createAndAddVariant(
    addVariant,
    e,
    "low-contrast",
    useClass,
    "@media (prefers-contrast: less)",
  );
  createAndAddVariant(
    addVariant,
    e,
    "high-contrast",
    useClass,
    "@media (prefers-contrast: more)",
  );
});
