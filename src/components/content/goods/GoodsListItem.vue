<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.image" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>
      {{goodsItem.title}}
      </p>
      <span class="price">
        {{"￥"+goodsItem.price}}
      </span>
      <span class="collect">
        {{goodsItem.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      // console.log('imageLoad')
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      console.log('跳转详情页')
      this.$router.push('/detail/' + this.goodsItem.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    img{
      width: 100%;
      border-radius: 8px;
    }
    .goods-info{
      font-size: 12px;
      position: absolute;
      bottom: 5px;
      left: 0;
      right: 0;
      overflow: hidden;
      text-align: center;
      p{
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
      }
      .price{
        font-weight: 800;
        font-size: 14px;
        color: red;
        margin-right: 20px;
        left: 0;
      }
      .collect{
        padding-left: 20px;
        font-size: 12px;
        height: 14px;
        line-height: 14px;
        background: url("~assets/img/common/gift.svg") 0 0px/14px 14px no-repeat;
      }
    }
  }
</style>
