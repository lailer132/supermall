<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view :key="this.$route.path"/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar.vue'
export default {
  name: 'app',
  components: {
    MainTabBar,
  }
}
</script>

<style scoped lang="scss">
  @import "assets/css/base.css";
  #app{
    height: 100vh;
  }
</style>
