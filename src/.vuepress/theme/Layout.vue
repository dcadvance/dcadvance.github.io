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
    <v-container
      class="l-wrapper"
    >
      <v-row>
        <v-col
          cols="3"
        >
          <Sider/>
        </v-col>
        <v-col
          cols="9"
        >
          <Content/>
        </v-col>
      </v-row>
    </v-container>
    <BackToTop/>
  </v-main>
  <Footer></Footer>
</v-app>
</template>

<script>
import Header from '../comps/Header'
import Sider from '../comps/Sider'
import Footer from '../comps/Footer'
import BackToTop from '../comps/BackToTop'

export default {
  components: {
    Header,
    Sider,
    BackToTop,
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
