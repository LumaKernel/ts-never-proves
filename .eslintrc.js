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
        "@typescript-eslint/ban-types": [
          "error",
          {
            "types": {
              "{}": false,
            },
            "extendDefaults": true,
          }
        ],
        "no-console": "error",
        "no-debugger": "error",
      },
    },
    {
      files: ["*.js"],
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
    {
      files: ["test/**/*.ts"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
  ],
  ignorePatterns: ["!.eslintrc.js"],
};
