module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'guard-for-in': 'warn',
    'max-len': 'warn',
    'no-else-return': 'warn',
    'no-lonely-if': 'warn',
    'no-restricted-syntax': 'warn',
  },
};
