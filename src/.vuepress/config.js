const $zhConfig = require('../zh/config')
const $deConfig = require('../de/config')

const localeList = [
  $zhConfig,
  $deConfig
]

const locales = {}
localeList.forEach(conf => {
  if (conf.home) {
    locales[conf.home] = conf
  }
})

module.exports = {
  title: 'DCFE',
  description: 'Deutsch-chinesischer kultureller und künstlerischer Austausch, Integration und Förderung.',
  dest: 'dist',
  locales,
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
  less: {
    javascriptEnabled: true
  },
  // chainWebpack (config) {
  //   config.module
  //     .rule('less')
  //     .oneOf('normal')
  //     .use('less-loader')
  //     .options({
  //       javascriptEnabled: true
  //     })
  //     .end()
  //     .end()
  //     .oneOf('modules')
  //     .use('less-loader')
  //     .options({
  //       javascriptEnabled: true
  //     })
  // },
  evergreen: false
}
