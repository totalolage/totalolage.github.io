/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    tailwindcss: {
      callees: ["classnames", "clsx", "tailwindMerge", "twMerge", "tw", "cn"],
    },
  },
  rules: {
    "tailwindcss/no-custom-classname": [
      "warn",
      {
        whitelist: ["markdown-body"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
