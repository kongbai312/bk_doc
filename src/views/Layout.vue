<template>
  <div>
    <!-- 导航 -->
    <NavBar></NavBar>
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue'
export default {
  name: 'Layout',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

</style>
