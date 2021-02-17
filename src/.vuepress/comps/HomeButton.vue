<template>
<v-toolbar-title v-if="siteTitle">
  <v-icon>{{ icons.mdiHome }}</v-icon>
  <span class="d-none d-sm-inline-block">{{siteTitle}}</span>
</v-toolbar-title>
</template>

<script>
import {
  mdiHome
} from '@mdi/js'

export default {
  data: () => ({
    icons: {
      mdiHome
    }
  }),
  computed: {
    siteTitle () {
      const curLang = this.$vuetify.lang.current
      const langPath = `/${curLang}/`
      const langConfig = this.$site.locales[langPath]
      const title = langConfig.title || this.$site.title || ''
      return title
    }
  }
}
</script>
