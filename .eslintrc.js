module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./config', './database', './app', './user', './task'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 12,
        project: ['./tsconfig.json'],
      },
    },
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
