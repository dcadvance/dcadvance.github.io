<template>
<div class="l-layout"></div>
</template>

<script>
import $lodash from 'lodash'

export default {
  methods: {
    redirect () {
      const defaultLang = $lodash.get(this, '$page.frontmatter.defaultLang', 'zh')
      const defaultLangPath = `/${defaultLang}/`
      this.$router.replace(defaultLangPath)
    }
  },
  mounted () {
    this.redirect()
  }
}
</script>
