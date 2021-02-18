import urlJoin from 'url-join'

export function getLangPath (instance, path) {
  const curLang = instance.$vuetify.lang.current
  const langPath = `/${curLang}`
  return urlJoin(langPath, path)
}

export function getLangConfig (instance) {
  const curLang = instance.$vuetify.lang.current
  const langPath = `/${curLang}/`
  const langConfig = instance.$site.locales[langPath]
  return langConfig
}

export function getSiteTitle (instance) {
  const langConfig = getLangConfig(instance)
  const title = langConfig.title || instance.$site.title || ''
  return title
}
