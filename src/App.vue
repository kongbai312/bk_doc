<template>
  <div class="container">
    <!-- 一级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  //默认字体大小
  #app {
    font-size: 0.16rem;
  }
  //设置 1rem = 100px
  html {
    font-size: 100px !important;
  }
</style>
