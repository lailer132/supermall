<template>
  <div class="recommend">
    <div class="recom-item" v-for="(item,i) in recommends" :key="i">
      <img :src="item.image" alt="" @load="imageLoad">
      <div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad){
        this.$emit('recommendsImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend{
  box-sizing: border-box;
  display: flex;
  flex-direction:row;
  width: 100%;
  text-align: center;
  padding: 2px 0 8px 0;
  border-bottom: 8px solid #eeeeee;
  overflow: hidden;
  .recom-item{
    font-size: 12px;
    flex: 1;
    img {
      margin: 10px;
      width: 80%;
    }
  }
}
</style>
