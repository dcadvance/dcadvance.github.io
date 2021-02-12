module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    soureType: 'module'
  },
  plugins: [
    'vue'
  ],
  extends: [
    '@vue/standard',
    'plugin:vue/essential'
  ]
}
