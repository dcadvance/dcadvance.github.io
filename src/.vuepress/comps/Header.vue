<template>
  <v-app-bar
    app
    elevate-on-scroll
    class="l-wrapper"
  >
    <v-app-bar-nav-icon @click="onNavIconClick"></v-app-bar-nav-icon>
    <HomeButton/>
    <v-spacer/>
    <v-menu
      open-on-hover
      bottom
      offset-y
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>{{ icons.mdiTranslate }}</v-icon>
          <v-icon x-small>{{ icons.mdiChevronDown }}</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group
          mandatory
          v-model="selectedLocale"
          color="primary"
        >
          <v-list-item
            v-for="(item, index) in localeList"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import HomeButton from './HomeButton'
import {
  mdiTranslate,
  mdiChevronDown
} from '@mdi/js'
import {
  getLocationLang,
  getCurLang
} from '../util/kit'

export default {
  components: {
    HomeButton
  },
  data: () => ({
    drawer: null,
    selectedLocale: 0,
    icons: {
      mdiTranslate,
      mdiChevronDown
    }
  }),
  computed: {
    localeList () {
      const {
        locales
      } = this.$site
      const list = Object.values(locales).map((locale) => {
        const item = {}
        item.title = locale.selectText
        item.value = locale.lang
        return item
      })
      return list
    }
  },
  watch: {
    selectedLocale (val) {
      this.setLocale(val)
    }
  },
  methods: {
    setLocale (val) {
      const {
        localeList
      } = this
      const curLang = getCurLang(this)
      const lang = localeList[val]
      const targetLang = lang.value
      const {
        protocol,
        host,
        href
      } = window.location
      const regPrefix = new RegExp(`^${protocol}//${host}`)
      const pathUrl = href.replace(regPrefix, '')
      const regLang = new RegExp(`^/${curLang}/`)
      const targetPath = pathUrl.replace(regLang, `/${targetLang}/`)
      this.$router.push(targetPath)
      this.$vuetify.lang.current = targetLang
    },
    initLocale () {
      const curLang = getLocationLang()
      this.$vuetify.lang.current = curLang
      const {
        localeList
      } = this
      const localeArr = localeList.map(item => item.value)
      const index = localeArr.indexOf(curLang)
      this.selectedLocale = index
    },
    onNavIconClick () {
      this.$emit('navIconClick')
      this.drawer = !this.drawer
    }
  },
  mounted () {
    this.initLocale()
  }
}
</script>
