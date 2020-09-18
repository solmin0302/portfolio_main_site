module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-unused-vars': 1,
    'react/jsx-filename-extension': 0,
  },
  env: {
    browser: true,
  },
};
