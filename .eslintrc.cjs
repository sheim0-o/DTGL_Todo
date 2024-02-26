module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-empty-pattern': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    "scss/emptyRules": "ignore"
  },
}
