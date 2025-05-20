module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'tailwindcss'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'cn', 'cva'],
      config: './tailwind.config.js',
    },
  },
};
