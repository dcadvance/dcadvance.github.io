<template>
<v-fab-transition>
  <v-btn
    v-show="!hidden"
    v-scroll="onScroll"
    class="mx-2 v-gotop"
    fab
    dark
    color="indigo"
    @click="onClick"
  >
    <v-icon dark>
      {{icons.mdiChevronUp}}
    </v-icon>
  </v-btn>
</v-fab-transition>
</template>

<script>
import {
  mdiChevronUp
} from '@mdi/js'

export default {
  data: () => ({
    hidden: true,
    icons: {
      mdiChevronUp
    }
  }),
  methods: {
    onScroll () {
      this.hidden = window.scrollY <= 0
    },
    onClick () {
      this.$vuetify.goTo(0, {
        duration: 1000,
        easing: 'easeOutCubic'
      })
    }
  },
  mounted () {
    this.onScroll()
  }
}
</script>

<style lang="less">
.v-gotop{
  position: fixed;
  right: 20px;
  bottom: 40px;
  z-index: 100;
}
</style>
