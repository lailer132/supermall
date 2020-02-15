<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">
      {{goods.title}}
    </div>
    <div class="info-price">
      <span class="n-price">{{'￥'+goods.newPrice+'.00'}}</span>
      <span class="o-price">{{'￥'+goods.oldPrice}}</span>
      <span class="discount">{{goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{'销量 '+goods.cfav}}</span>
      <span>{{'收藏 '+goods.sales}}</span>
      <span>退货补运费</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for="(item, i) in goods.services" :key="i">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-info{
  border-bottom:#EEEEEE 5px solid;
  .info-title{
    font-size: 18px;
    margin: 10px;
  }
  .info-price{
    display:flex;
    flex-direction: row;
    align-items: baseline;
    height: 30px;
    margin: 10px;
    .n-price{
      color: red;
      font-size: 22px;
      font-weight: bold;
      margin-right: 2px;
    }
    .o-price{
      text-decoration:line-through;
      font-size: 14px;
      color: #999999;
      margin-right: 10px;
    }
    .discount{
      margin-top: 5px;
      align-self:flex-start;
      font-size: 12px;
      height: 14px;
      color: white;
      background-color: #ff8198;
      padding: 2px 4px 2px 4px;
      border-radius: 8px;
    }
  }
  .info-other{
    font-size: 14px;
    color: #999999;
    display:flex;
    flex-direction: row;
    margin: 10px 20px 10px 20px;
    justify-content: space-between;
  }
  .info-service{
    height: 55px;
    font-size: 14px;
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 10px 20px 10px 20px;
    .info-service-item{
      display:flex;
      height: 20px;
      img{
        height: 16px;
      }
      span{
        height: 18px;
        line-height: 18px;
        margin-left: 5px;
        margin-right: 10px;
      }
    }
  }
}
</style>
