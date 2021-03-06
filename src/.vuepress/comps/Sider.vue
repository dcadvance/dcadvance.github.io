<template>
<v-card>
  <v-list>
    <v-list-item-group
      color="primary"
    >
      <v-list-item
        v-for="(item, index) in sideLinks"
        :key="index"
        :to="item.url"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
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
