<template>
<v-card class="p-sider">
  <div class="d-block d-md-none">
    <div class="p-sider-head">
      <Logo/>
    </div>
    <v-divider></v-divider>
  </div>
  <v-list>
    <v-list-item-group
      color="primary"
      v-model="selectedItem"
    >
      <v-list-item
        v-for="(item, index) in sideLinks"
        :key="index"
        :to="item.url"
      >
        <v-list-item-content>{{item.title}}</v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-card>
</template>

<script>
import Logo from './logo'

export default {
  components: {
    Logo
  },
  data: () => ({
    selectedItem: null
  }),
  computed: {
    sideLinks () {
      const conf = this.$config()
      const navList = conf.navList || []
      const linkList = navList.map(item => {
        const link = {}
        link.title = item.title
        link.url = this.$url(item.url)
        return link
      })
      return linkList
    }
  }
}
</script>

<style lang="less">
.p-sider{
  &-head{
    padding: 12px 16px;
  }
  .v-list-item__content{
    padding: 0;
  }
  .v-btn__content{
    justify-content: initial;
  }
  .v-list-item{
    .v-btn,
    .v-btn:hover{
      background-color: initial;
    }
  }
}
</style>
