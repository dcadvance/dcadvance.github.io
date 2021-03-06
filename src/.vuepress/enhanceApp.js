import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import langZH from 'vuetify/es5/locale/zh-Hans'
import langDE from 'vuetify/es5/locale/de'
import './common/index'

// async function is also supported, too
export default ({
  // the version of Vue being used in the VuePress app
  Vue,
  // the options for the root Vue instance
  options,
  // the router instance for the app
  router,
  // site metadata
  siteData,
  // is this enhancement applied in server-rendering or client
  isServer
}) => {
  // ...apply enhancements to the app
  Vue.use(Vuetify)
  options.vuetify = new Vuetify({
    icons: {
      iconfont: 'mdiSvg'
    },
    lang: {
      locales: {
        zh: langZH,
        de: langDE
      },
      defaultLocale: 'zh',
      current: 'zh'
    }
  })
}
