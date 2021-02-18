<template>
<v-toolbar-title class="d-flex">
  <v-btn
    large
    depressed
    exact
    :to="homeUrl"
  >
    <v-icon>{{ icons.mdiHome }}</v-icon>
    <span class="d-none d-sm-block" v-if="siteTitle">{{siteTitle}}</span>
  </v-btn>
</v-toolbar-title>
</template>

<script>
import {
  mdiHome
} from '@mdi/js'
import {
  getLangPath,
  getSiteTitle
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
    siteTitle () {
      return getSiteTitle(this)
    }
  }
}
</script>
