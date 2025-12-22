import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import boundaries from "eslint-plugin-boundaries";

export default tseslint.config(
  { ignores: ["dist", "node_modules", "dist-electron", "release"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "boundaries": boundaries,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]", argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "boundaries/no-private": ["error", { "allowUnancestored": true }],
      "boundaries/entry-point": [
        "error",
        {
          "default": "index",
          "rules": [
            { "target": "shared", "allow": "*.(ts|tsx)" },
            { "target": "app", "allow": "index.css" }
          ]
        }
      ],
      "boundaries/element-types": [
        "error",
        {
          "default": "allow",
          "rules": [
            {
              "from": "shared",
              "disallow": ["app", "pages", "widgets", "features", "entities"],
              "message": "Shared layer cannot import from higher layers."
            },
            {
              "from": "entities",
              "disallow": ["app", "pages", "widgets", "features"],
              "message": "Entities layer cannot import from higher layers."
            },
            {
              "from": "features",
              "disallow": ["app", "pages", "widgets"],
              "message": "Features layer cannot import from higher layers."
            },
            {
              "from": "widgets",
              "disallow": ["app", "pages"],
              "message": "Widgets layer cannot import from higher layers."
            },
            {
              "from": "pages",
              "disallow": ["app"],
              "message": "Pages layer cannot import from App layer."
            }
          ]
        }
      ]
    },
    settings: {
      "boundaries/include": ["src/**/*"],
      "boundaries/elements": [
        { "type": "app", "pattern": "src/app" },
        { "type": "pages", "pattern": "src/pages" },
        { "type": "widgets", "pattern": "src/widgets" },
        { "type": "features", "pattern": "src/features" },
        { "type": "entities", "pattern": "src/entities" },
        { "type": "shared", "pattern": "src/shared" }
      ]
    }
  }
);
