const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("important", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
