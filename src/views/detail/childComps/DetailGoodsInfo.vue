<template>
  <div class="goods-info">
    <div class="desc">
      {{detailInfo.desc}}
    </div>
    <div class="info-list">
      <img v-for="(item,i) in detailInfo.detailImage" :key="i" @load="imgLoad" :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      if(++this.counter === this.imagesLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo() { // 监听detailInfo变化，防止传入空值
      this.imagesLength = this.detailInfo.detailImage.length
    }
  }
}
</script>

<style lang="scss" scoped>
  .desc{
    margin: 20px;
  }
  .info-list{
    img{
      width: 100%;
    }
  }
</style>
