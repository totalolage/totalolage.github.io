import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginPrettier.configs.recommended,
]
