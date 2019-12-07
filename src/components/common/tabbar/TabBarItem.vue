<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-icon" />
    </div>
    <div v-show="isActive">
      <slot name="item-icon-active" />
    </div>
    <div :style="activeStyle">
      <slot name="item-text" />
    </div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : ''
    }
  },
  methods: {
    itemClick() {
      this.$route.path === this.path ? '' :
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped lang="scss">
.tabbar-item {
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color:#888888;
  // font-weight: 500;
  img {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }
}
</style>
