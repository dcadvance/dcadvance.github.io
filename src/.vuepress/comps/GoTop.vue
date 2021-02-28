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
  Easing,
  Tween,
  autoPlay
} from 'es6-tween'
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
      const scroll = {
        y: window.scrollY
      }

      autoPlay(true)
      const tween = new Tween(scroll)
        .easing(Easing.Quartic.Out)
        .to({ y: 0 }, 600)
        .on('update', ({ y }) => {
          window.scrollTo(0, y)
        })
      tween.start()
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
