module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      rules: {
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-console": "error",
        "no-debugger": "error",
      },
    },
    {
      files: ["*.js"],
      parser: "babel-eslint",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      extends: ["eslint:recommended"],
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      rules: {
        "no-console": "error",
        "no-debugger": "error",
      },
    },
  ],
  ignorePatterns: ["!.eslintrc.js"],
};
