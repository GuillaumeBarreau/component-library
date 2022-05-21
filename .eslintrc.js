module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "linebreak-style": "off",
    "import/no-anonymous-default-export": "off",
    "max-len": ["warn", { code: 80 }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

// module.exports = {
//   extends: [
//     "airbnb-typescript",
//     "airbnb/hooks",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:jest/recommended",
//     "plugin:prettier/recommended",
//   ],
//   env: {
//     browser: true,
//     es6: true,
//     jest: true,
//   },
//   globals: {
//     Atomics: "readonly",
//     SharedArrayBuffer: "readonly",
//   },
//   parser: ["@typescript-eslint/parser", "babel/eslint-parser"],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 2018,
//     sourceType: "module",
//     project: "./tsconfig.json",
//   },
//   ignorePatterns: ["./dist/*"],
// };
