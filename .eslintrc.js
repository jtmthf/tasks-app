module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'jest', 'import', 'eslint-comments'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      files: [
        'packages/*/test/**/*.{ts,tsx}',
        'packages/*/src/**/*.spec.{ts,tsx}',
      ],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
    },
  ],
};
