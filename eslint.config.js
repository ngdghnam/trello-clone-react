import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // React Rules
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-unstable-nested-components": "warn", // Recommended for React 19
      "react/hook-use-state": "warn", // Ensures correct useState usage

      // React Hooks Rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // General Code Style Rules
      "no-console": "warn",
      "no-lonely-if": "warn",
      "no-unused-vars": "warn",
      "no-trailing-spaces": "warn",
      "no-multi-spaces": "warn",
      "no-multiple-empty-lines": "warn",
      "space-before-blocks": ["error", "always"],
      "object-curly-spacing": ["warn", "always"],
      indent: ["warn", 2],
      semi: ["warn", "never"],
      quotes: ["error", "single"],
      "array-bracket-spacing": "warn",
      "linebreak-style": "off",
      "no-unexpected-multiline": "warn",
      "keyword-spacing": "warn",
      "comma-dangle": "warn",
      "comma-spacing": "warn",
      "arrow-spacing": "warn",

      // "no-restricted-imports": [
      //   "error",
      //   {
      //     patterns: ["@mui/*/*/*"],
      //   },
      // ],
    },
  },
];
