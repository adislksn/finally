module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'global-require': 'off',
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'class-methods-use-this': 'off',
    'react/style-prop-object': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': ['error', { variables: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
