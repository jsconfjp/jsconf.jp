import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import n from "eslint-plugin-n";

const eslintConfig = [
  {
    ignores: [
      "out/**",
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // `import` プラグインは eslint-config-next が登録済みなので、ここでは `n` のみ追加する
    plugins: {
      n,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-in modules
            "external", // npm packages
            "internal", // Internal modules
            ["parent", "sibling"], // Parent and sibling imports
            "index", // Index imports
          ],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "n/prefer-node-protocol": "error",
    },
  },
];

export default eslintConfig;
