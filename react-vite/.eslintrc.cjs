module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "none", ignoreRestSiblings: false },
    ],
    "no-console": "warn",
    "no-undef": "off",
    "react/display-name": "off",
    "no-prototype-builtins": "off",
    "no-extra-boolean-cast": "off",
    "no-irregular-whitespace": "off",

    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
      },
    ],
  },
};
