import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, prettier: pluginPrettier },
    extends: ["js/recommended", prettier, "plugin:prettier/recommended"],
    languageOptions: { globals: globals.node },
  },
]);
