const $zhConfig = require('../zh/config');
const $enConfig = require('../en/config');

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  dest: 'dist',
  locales: [
    $zhConfig,
    $enConfig,
  ]
}
