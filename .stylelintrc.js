module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: [
    "stylelint-css-modules",
    "stylelint-prettier",
    "stylelint-high-performance-animation",
  ],
  rules: {
    "css-modules/composed-class-names": true,
    "css-modules/css-variables": true,
    "prettier/prettier": true,
    "plugin/no-low-performance-animation-properties": true,
  },
};
