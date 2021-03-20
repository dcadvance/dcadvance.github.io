import urlJoin from 'url-join'

// 设置默认语言
const defaultLocale = 'zh'

export function getLocationLang () {
  let lang = defaultLocale
  if (typeof window !== 'undefined') {
    const { pathname } = window.location
    const arr = pathname.split('/')
    lang = arr[1] || defaultLocale
  }
  return lang
}

export function getCurLang (instance) {
  let lang = defaultLocale
  const { path } = instance.$route
  const arr = path.split('/')
  lang = arr[1] || defaultLocale
  return lang
}

export function getLangPath (instance, path) {
  const curLang = getCurLang(instance)
  const langPath = `/${curLang}`
  return urlJoin(langPath, path)
}

export function getLangConfig (instance) {
  const curLang = getCurLang(instance)
  const langPath = `/${curLang}/`
  const langConfig = instance.$site.locales[langPath]
  return langConfig
}

export function getCurLangConfig (instance) {
  const curLang = getCurLang(instance)
  const langConfig = getLangConfig(instance, curLang)
  return langConfig
}

export function getSiteTitle (instance) {
  const langConfig = getCurLangConfig(instance)
  const title = langConfig.title || instance.$site.title || ''
  return title
}
