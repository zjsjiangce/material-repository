module.exports = {
    root: true,
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
        'eslint:recommended', 
        'plugin:vue/recommended',
        "plugin:vue/essential",
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    requireConfigFile: false,
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      parser: '@babel/eslint-parser'
    },
    rules: {}
}