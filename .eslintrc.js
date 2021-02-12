module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    soureType: 'module',
  },
  extends: [
    'alloy',
    'plugin:vue/essential'
  ],
  plugins: [
    'vue'
  ]
};
