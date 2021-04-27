<template>
  <v-app-bar
    app
    elevate-on-scroll
    class="l-wrapper p-header"
    :style="styles"
  >
    <v-app-bar-nav-icon
      class="d-block d-md-none"
      @click="onNavIconClick"
    ></v-app-bar-nav-icon>
    <router-link :to="homeUrl" class="p-header-logo d-none d-md-flex">
      <v-img
        max-height="44"
        max-width="44"
        src="/imgs/android-chrome-512x512.png"
        class="image"
      ></v-img>
      <h3 class="title">DCFE</h3>
    </router-link>
    <HomeButton class="p-header-homebutton"/>
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
          v-model="selectedLocaleIndex"
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
  getLangPath,
  getLocationLang
} from '../util/kit'

export default {
  components: {
    HomeButton
  },
  data: () => ({
    drawer: null,
    selectedLocaleIndex: 0,
    icons: {
      mdiTranslate,
      mdiChevronDown
    },
    styles: {
      left: 'initial',
      right: 'initial'
    }
  }),
  computed: {
    homeUrl () {
      return getLangPath(this, '/')
    },
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
    selectedLocaleIndex (val) {
      this.changeLocaleIndex(val)
    }
  },
  methods: {
    setLocale (targetLang) {
      this.$vuetify.lang.current = targetLang
      localStorage.setItem('current-locale', targetLang)
    },
    changeLocaleIndex (val) {
      const {
        localeList
      } = this
      const curLang = this.$lang
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
      if (targetPath !== pathUrl) {
        this.$router.push(targetPath)
        this.setLocale(targetLang)
      }
    },
    initLocale () {
      const curLang = getLocationLang()
      this.setLocale(curLang)
      const {
        localeList
      } = this
      const localeArr = localeList.map(item => item.value)
      const index = localeArr.indexOf(curLang)
      this.selectedLocaleIndex = index
    },
    onNavIconClick () {
      this.$emit('navIconClick')
      this.drawer = !this.drawer
    }
  },
  mounted () {
    this.initLocale()
    console.log('this.$route.path', this.$route.path)
  }
}
</script>

<style lang="less">
.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child,
.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child{
  margin-right: 12px;
}

.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,
.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{
  padding-left: 0;
}

.p-header {
  width: 100%;
  &-logo{
    margin-right: 20px;
    display: flex;
  }
  .p-header &-logo{
    text-decoration: none;
  }
  &-logo .image{
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }
  &-logo .title{
    line-height: 44px;
    color: #316299;
  }
}

</style>
