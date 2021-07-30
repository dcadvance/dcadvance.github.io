<template>
<v-app class="l-wrapper">
  <div class="w-layout-async">
    <script>
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?e752f3484a16f1da6c1669cb998d98e3";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
    <no-ssr>
      <AsyncRoot/>
    </no-ssr>
  </div>
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
      <div v-show="!ready" class="w-layout-loading">
        <Loading/>
      </div>
      <v-row v-show="ready">
        <v-col
          cols="3"
          class="d-none d-md-block"
        >
          <Sider/>
        </v-col>
        <v-col
          :cols="contentCols"
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
import Loading from '../comps/loading'

const components = {
  Header,
  Sider,
  Loading,
  BackToTop,
  Footer
}

if (typeof window !== 'undefined') {
  components.AsyncRoot = () => import('../comps/async-root')
}

export default {
  components,
  data: () => ({
    ready: false,
    drawer: null,
    contentStyles: {
      'padding-left': 0
    }
  }),
  computed: {
    contentCols () {
      let cols = 12
      const { width } = this.$vuetify.breakpoint
      if (width >= 960) {
        cols = 9
      }
      return cols
    }
  },
  methods: {
    onNavIconClick () {
      this.drawer = !this.drawer
    }
  },
  mounted () {
    this.ready = true
  }
}
</script>

<style lang="less">
.p-main{
  width: 100%;
  position: relative;
}
.w-layout-loading{
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
  svg{
    width: 80px;
    height: 80px;
  }
}
.w-layout-async{
  display: none;
}
@media (min-width: 960px) {
  .container {
    max-width: 100%;
  }
}
</style>
