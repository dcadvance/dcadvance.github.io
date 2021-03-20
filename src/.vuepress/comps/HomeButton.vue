<template>
<v-toolbar-title class="d-flex">
  <v-btn
    large
    depressed
    exact
    :to="homeUrl"
  >
    <v-icon>{{ icons.mdiHome }}</v-icon>
    <span class="d-none d-md-block">首页</span>
  </v-btn>
</v-toolbar-title>
</template>

<script>
import {
  mdiHome
} from '@mdi/js'
import {
  getLangPath
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
    }
  }
}
</script>

<style lang="less">

</style>
