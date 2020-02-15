<template>
  <div class="tabbar" :style="isFullDispaly">
    <slot />
  </div>
</template>

<script>
export default {
  name:"TabBar",
  computed: {
    isFullDispaly() {
      return window.screen.height / window.screen.width > 16.8/9 ?
       {padding: '3px 12px 6px 12px'} : '';
    }
  }
}
</script>

<style scoped lang="scss">
  .tabbar{
    display: flex;
    flex-direction:row;
    background-color: #fefefe;
    position: fixed;
    z-index: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow:0 -1px 6px rgba(100,100,100,0.1);
  }
</style>
