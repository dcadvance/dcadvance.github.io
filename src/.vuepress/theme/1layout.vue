<template>
<v-app class="l-wrapper">
  <v-navigation-drawer
    app
    v-model="drawer"
    class="l-wrapper d-md-none"
  >
    <Sider/>
  </v-navigation-drawer>
  <Header @navIconClick="onNavIconClick"/>
  <v-main class="l-wrapper p-main" :style="contentStyles">
    <v-container>
      <v-row>
        <v-col
          cols="3"
          class="d-none d-md-block"
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
import Header from '../comps/header'
import Sider from '../comps/sider'
import Footer from '../comps/footer'
import BackToTop from '../comps/back-to-top'

export default {
  components: {
    Header,
    Sider,
    BackToTop,
    Footer
  },
  data: () => ({
    drawer: null,
    contentStyles: {
      'padding-left': 0
    }
  }),
  methods: {
    onNavIconClick () {
      this.drawer = !this.drawer
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.p-main{
  width: 100%;
}
@media (min-width: 960px) {
  .container {
    max-width: 100%;
  }
}
</style>
