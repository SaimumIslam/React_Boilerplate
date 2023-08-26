module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "no-unused-vars": ["warn", { vars: "all", args: "none", ignoreRestSiblings: false }],
    "no-console": "warn",
    "no-undef": "off",
    "react/display-name": "off",
    "no-prototype-builtins": "off",
    "no-extra-boolean-cast": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "ignore",
        groups: ["builtin", "external", "internal", "parent", "sibling", "object"],
        pathGroups: [
          {
            pattern: ".*\\b(react|prop-types|redux)\\b.*",
            group: "external",
          },
          {
            pattern: "components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "layouts/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "routes",
            group: "internal",
            position: "after",
          },
          {
            pattern: "assets/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "themes/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "store/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "services/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "utils/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "data",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ["single", "multiple", "none", "all"],
      },
    ],
  },
};
