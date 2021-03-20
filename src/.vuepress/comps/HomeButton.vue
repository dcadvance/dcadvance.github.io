<template>
<v-toolbar-title class="d-flex">
  <v-btn
    large
    depressed
    outlined
    exact
    :to="homeUrl"
  >
    <v-icon>{{ icons.mdiHome }}</v-icon>
    <span class="d-none d-md-block" v-if="homeButtonText">{{homeButtonText}}</span>
  </v-btn>
</v-toolbar-title>
</template>

<script>
import {
  mdiHome
} from '@mdi/js'
import {
  getLangPath,
  getCurLangConfig
} from '../util/kit'

export default {
  data: () => ({
    icons: {
      mdiHome
    }
  }),
  computed: {
    homeUrl () {
      return getLangPath(this, '/')
    },
    homeButtonText () {
      const langConfig = getCurLangConfig(this)
      return langConfig.homeButtonText
    }
  }
}
</script>

<style lang="less">

</style>
