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
        <v-list-item
          v-for="(item, index) in localeList"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
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

export default {
  components: {
    HomeButton
  },
  data: () => ({
    drawer: null,
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
        return item
      })
      return list
    }
  },
  methods: {
    onNavIconClick () {
      this.$emit('navIconClick')
      this.drawer = !this.drawer
    }
  }
}
</script>
