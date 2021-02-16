const $zhConfig = require('../zh/config')
const $enConfig = require('../de/config')

const localeList = [
  $zhConfig,
  $enConfig
]

const locales = {}
localeList.forEach(conf => {
  if (conf.home) {
    locales[conf.home] = conf
  }
})

module.exports = {
  title: 'DCADVANCE',
  description: 'DCADVANCE',
  dest: 'dist',
  evergreen: false,
  head: [
    ['meta', {
      name: 'viewport',
      content: [
        'width=device-width',
        'initial-scale=1',
        'maximum-scale=1',
        'minimum-scale=1',
        'user-scalable=no',
        'viewport-fit=cover'
      ].join(', ')
    }],
    ['meta', {
      name: 'format-detection',
      content: 'telephone=no'
    }],
    ['meta', {
      name: 'HandheldFriendly',
      content: 'true'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-title',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '//512x512.png'
    }],
    ['link', {
      rel: 'icon',
      size: '192x192',
      href: '//192x192.png'
    }],
    ['link', {
      rel: 'shortcut icon',
      href: '//48x48.ico'
    }],
    ['link', {
      rel: 'dns-prefetch',
      href: '//domain'
    }]
  ],
  locales
}
