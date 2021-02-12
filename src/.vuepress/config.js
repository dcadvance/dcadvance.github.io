const $zhConfig = require('../zh/config');
const $enConfig = require('../en/config');

const localeList = [
  $zhConfig,
  $enConfig,
]

const locales = {}
localeList.forEach(conf => {
  if (conf.home) {
    locales[conf.home] = conf;
  }
})

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  dest: 'dist',
  evergreen: true,
  locales: [
    $zhConfig,
    $enConfig,
  ]
}
