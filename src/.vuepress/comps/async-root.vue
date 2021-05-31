<template>
<div></div>
</template>

<script>
import Stickyfill from 'stickyfilljs'

export default {
  mounted () {
    setTimeout(() => {
      const els = document.querySelectorAll('.sticky')
      Stickyfill.add(els)
    })
  }
}
</script>

<style lang="less">

</style>
