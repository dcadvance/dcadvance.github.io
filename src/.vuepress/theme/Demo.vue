<template>
<div class="l-layout">
  <Content/>
</div>
</template>

<script>
export default {
  mounted () {
    console.log('$site', this.$site)
    console.log('$page', this.$page)
  }
}
</script>
