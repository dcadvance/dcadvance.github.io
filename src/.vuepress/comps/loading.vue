<template>
<div class="w-loading" title="2">
  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
    xml:space="preserve">
    <path fill="#000"
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
    </path>
  </svg>
</div>
</template>

<script>
export default {}
</script>

<style lang="less">
.w-loading{
  margin: 0 auto;
  width: 100%;
  height: 100px;
  text-align: center;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  line-height: 100px;

  svg{
    display: inline-block;
    vertical-align: middle;
    animation-name: fx-loading;
    animation-duration: 600ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  svg path,
  svg rect{
    fill: #5c6bc0;
  }
}

@keyframes fx-loading{
  0% {
    transform:  rotate(0deg) ;
  }
  100% {
    transform:  rotate(360deg) ;
  }
}
</style>
