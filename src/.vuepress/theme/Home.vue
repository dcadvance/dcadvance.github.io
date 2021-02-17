<template>
<v-app class="l-wrapper">
  <v-navigation-drawer
    app
    v-model="drawer"
    class="l-wrapper"
  >
    <Sider/>
  </v-navigation-drawer>
  <v-app-bar
    app
    class="l-wrapper"
  >
    <v-app-bar-nav-icon @click="onNavIconClick"></v-app-bar-nav-icon>
    <HomeButton/>
    <Header/>
  </v-app-bar>
  <v-main>
    <v-container>
      <Content/>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import HomeButton from '../comps/HomeButton'

export default {
  components: {
    HomeButton
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    onNavIconClick () {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="less">

</style>
