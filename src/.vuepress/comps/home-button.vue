<template>
<v-toolbar-title class="w-homebtn">
  <v-btn
    large
    depressed
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

export default {
  data: () => ({
    icons: {
      mdiHome
    }
  }),
  computed: {
    homeUrl () {
      return this.$url('/')
    },
    homeButtonText () {
      const conf = this.$config()
      return conf.homeButtonText
    }
  }
}
</script>

<style lang="less">
.w-homebtn{
  .v-btn.v-btn--has-bg{
    background-color: rgba(0,0,0,0.05);
  }
}
</style>
