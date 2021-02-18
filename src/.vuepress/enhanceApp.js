import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import langZH from 'vuetify/es5/locale/zh-Hans'
import langDE from 'vuetify/es5/locale/de'
import './common/index'

// async function is also supported, too
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
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
