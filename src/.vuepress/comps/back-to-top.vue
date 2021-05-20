<template>
<v-fab-transition>
  <v-btn
    v-show="!hidden"
    v-scroll="onScroll"
    class="mx-2 w-gotop"
    fab
    @click="onClick"
  >
    <v-icon large>
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
.w-gotop{
  position: fixed;
  right: 20px;
  bottom: 40px;
  z-index: 100;
}
.l-wrapper .v-main .w-gotop{
  background-color: #fff;
  background-image: url(https://img-1304915546.file.myqcloud.com/images/20210520-plate.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  color: #000;
}
</style>
