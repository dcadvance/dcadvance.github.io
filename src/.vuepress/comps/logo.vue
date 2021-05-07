<template>
<router-link :to="homeUrl" class="w-logo">
  <v-img
    src="/imgs/android-chrome-512x512.png"
    class="image"
  ></v-img>
  <h3 class="title">DCFV</h3>
</router-link>
</template>

<script>
export default {
  computed: {
    homeUrl () {
      return this.$url('/')
    }
  }
}
</script>

<style lang="less">
.w-logo{
  margin-right: 20px;
  display: flex;
  text-decoration: none;

  .image{
    width: 44px;
    height: 44px;
    margin-right: 10px;
    flex: 0 0 auto;
  }
  .title{
    line-height: 44px;
    color: #316299;
  }
}
</style>
