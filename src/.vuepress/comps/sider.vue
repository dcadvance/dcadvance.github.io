<template>
<v-card class="p-sider">
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
import {
  getLangConfig,
  getLangPath
} from '../util/kit'

export default {
  data: () => ({
    selectedItem: null
  }),
  computed: {
    sideLinks () {
      const langConfig = getLangConfig(this)
      const navList = langConfig.navList || []
      const linkList = navList.map(item => {
        const link = {}
        link.title = item.title
        link.url = getLangPath(this, item.url)
        return link
      })
      return linkList
    }
  }
}
</script>

<style lang="less">
.p-sider{
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
