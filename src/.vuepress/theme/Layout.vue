<template>
<v-app class="l-wrapper">
  <v-navigation-drawer
    app
    v-model="drawer"
    class="l-wrapper"
  >
    <Sider/>
  </v-navigation-drawer>
  <Header @navIconClick="onNavIconClick"/>
  <v-main>
    <v-container>
      <Content/>
    </v-container>
    <GoTop/>
  </v-main>
  <Footer></Footer>
</v-app>
</template>

<script>
import Header from '../comps/Header'
import Sider from '../comps/Sider'
import Footer from '../comps/Footer'
import GoTop from '../comps/GoTop'

export default {
  components: {
    Header,
    Sider,
    GoTop,
    Footer
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
