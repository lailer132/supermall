<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <img src="~assets/img/detail/service.svg" alt />
        <span>客服</span>
      </div>
      <div class="in-cart" @click="goCart">
        <img src="~assets/img/tabbar/cart.svg" alt />
        <span>购物车</span>
        <div class="num" v-show="cartLengthFilter.length != ''">{{cartLengthFilter}}</div>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="addToCart">购买</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addCart");
    },
    goCart() {
      this.$router.push("/cart");
    }
  },
  computed: {
    ...mapGetters({
      cartLength: "cartLength"
    }),
    cartLengthFilter() {
      let num = ''
      if (this.cartLength > 0 && this.cartLength < 100) num = this.cartLength
      if (this.cartLength > 100) num = '99+'
      return num
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  box-shadow: 0 -1px 6px rgba(100, 100, 100, 0.1);
  height: 49px;
  position: fixed;
  background-color: #fff;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 2px 12px 2px 12px;
  .bar-item {
    width: 180px;
    display: flex;
  }
  .bar-left {
    flex: 1;
    padding: 0 20px 0 20px;
    div {
      position: relative;
      flex: 1;
      text-align: center;
      height: 49px;
      font-size: 14px;
      color: #888888;
      img {
        margin-top: 3px;
        width: 24px;
        height: 24px;
      }
      span {
        font-size: 12px;
        display: block;
      }
    }
    .in-cart > .num{
      box-sizing: border-box;
      position: absolute;
      border-radius: 20px;
      height: 20px;
      min-width: 20px;
      font-size: 12px;
      padding-top: 2px;
      color: #fff;
      background-color: red;
      color: 0;
      right: 0;
      top: 0;
    }
  }
  .bar-right {
    flex: 1.5;
    text-align: center;
    font-size: 12px;
    line-height: 37px;
    margin: 4px 10px 8px 0;
    display: flex;
    color: #fff;
    .cart {
      flex: 1;
      box-sizing: border-box;
      border-radius: 37px 0 0 37px;
      background-color: #d81e06;
    }
    .buy {
      flex: 1;
      line-height: 35px;
      color: #e5511d;
      border-radius: 0 37px 37px 0;
      border: #f0cab6 1px solid;
      border-left: none;
      background-color: #ffe4d0;
    }
  }
}
</style>
