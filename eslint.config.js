import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginPrettier.configs.recommended,
]
