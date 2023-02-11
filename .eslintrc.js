module.exports = {
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
  },
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "plugin:vue/essential", "plugin:vue/vue3-strongly-recommended", "plugin:vue/strongly-recommended", "plugin:vue/vue3-recommended" , "plugin:vue/recommended", "eslint:recommended", "prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      env: {
        jest: true,
        "vue/setup-compiler-macros": true,
      },
    },
  ],
};
