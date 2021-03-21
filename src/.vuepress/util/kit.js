import urlJoin from 'url-join'

// 设置默认语言
const defaultLocale = 'zh'

// 从 url 推断语言
// 初始化 i18n 配置时使用
export function getLocationLang (pathname) {
  let lang = defaultLocale
  if (typeof window !== 'undefined') {
    pathname = pathname || window.location.pathname
    const arr = pathname.split('/')
    lang = arr[1] || defaultLocale
  }
  return lang
}

export function getLangPath (instance, path) {
  const curLang = instance.$lang
  const langPath = `/${curLang}`
  return urlJoin(langPath, path)
}

export function getLangConfig (instance) {
  const curLang = instance.$lang
  const langPath = `/${curLang}/`
  const langConfig = instance.$site.locales[langPath]
  return langConfig
}

export function getSiteTitle (instance) {
  const langConfig = getLangConfig(instance)
  const title = langConfig.title || instance.$site.title || ''
  return title
}
