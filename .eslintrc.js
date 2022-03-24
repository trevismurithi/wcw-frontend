module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:nuxt/base'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
