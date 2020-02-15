<template>
  <swipe class="detail-swipe" :autoplay="3000" indicator-color="white">
    <swipe-item class="detail-swipe-item" v-for="(item,i) in banners" :key="i">
      <img :src="item.image" alt="" @load="imageLoad">
    </swipe-item>
  </swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: "DetailSwipe",
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    imageLoad() {
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-swipe{
    .detail-swipe-item{
      img{
        width: 100%;
      }
    }
  }
</style>
