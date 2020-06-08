module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.tsx']}],
    'prettier/prettier': 'error',
    'react/jsx-closing-bracket-location': [
      1,
      {selfClosing: 'line-aligned', nonEmpty: 'after-props'},
    ],
  },
};
