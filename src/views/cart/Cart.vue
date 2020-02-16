<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <div class="isNull" v-show="cartLength === 0">
        <img src="~assets/img/cart/cartIsNull.png" />
        <h3>购物车竟然是空的</h3>
        <p>再忙，也要记得买点什么犒劳自己~</p>
        <vant-button plain hairline type="warning" to="/category">去逛逛</vant-button>
      </div>
      <div class="product-item" v-for="(item, index) in cartList" :key="index">
        <checkbox
          name="a"
          checked-color="#d81e06"
          v-model="item.checked"
          @click.stop="updataCartList"
        ></checkbox>
        <card
          :tag="item.discountDesc"
          :price="item.newPrice"
          :desc="item.desc"
          :title="item.title"
          :thumb="item.image"
          :origin-price="item.oldPrice"
          @click="itemClick(item.pid)"
        >
          <div slot="tags" class="cart-tags" @click.stop>
            <div>
              <tag plain type="danger" size="medium">{{item.color}}</tag>
              <tag plain type="danger" size="medium">{{item.size}}</tag>
            </div>
            <stepper
              v-model="item.count"
              input-width="40px"
              button-size="25px"
              max="999"
              integer
              :disable-input="true"
            />
          </div>
          <div slot="footer">
            <vant-button round size="mini" @click.stop="deleteCartItem(index)">删除</vant-button>
          </div>
        </card>
      </div>
    </scroll>
    <submit-bar
      :price="totalPrice*100"
      button-text="提交订单"
      :style="isFullDispaly"
      @submit="onSubmit"
    >
      <checkbox v-model="isAllSelect" checked-color="#d81e06" @click="checkClick">全选</checkbox>
    </submit-bar>
  </div>
</template>

<script>
import { itemListenerMixin, backTopMixin } from "common/mixin";

import Scroll from "components/common/scroll/Scroll";

import NavBar from "components/common/navbar/NavBar";
import { Card, Tag, Button, Stepper } from "vant";
import { Checkbox, SubmitBar, Dialog } from "vant";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    Card,
    Scroll,
    Checkbox,
    SubmitBar,
    VantButton: Button,
    Tag,
    Stepper
  },
  mixins: [itemListenerMixin, backTopMixin],
  methods: {
    itemClick(pid) {
      this.$router.push("/detail/" + pid);
    },
    onSubmit() {
      Dialog.alert({
        message: "未登录"
      }).then(() => {
        // on close
      });
    },
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
    updataCartList() {
      setTimeout(() => {
        this.$store.commit("updata_cart_list", this.cartList);
      });
    },
    /**
     * 选中所有或取消
     */
    checkClick() {
      /* if (this.isAllSelect) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      } */
      let checkedSet = !this.isAllSelect;
      this.cartList.forEach(item => (item.checked = checkedSet));
    },
    /**
     * 删除购物车某个元素
     */
    deleteCartItem(index) {
      Dialog.confirm({
        title: "确认删除？"
        // message: "弹窗内容"
      })
        .then(() => {
          this.$store.commit("delete_cart_item", index);
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  computed: {
    ...mapGetters({
      cartLength: "cartLength",
      cartList: "cartList"
    }),
    /**
     * 监听全选状态
     */
    isAllSelect: {
      get() {
        if (this.cartLength === 0) return false;
        return !this.cartList.find(item => !item.checked);
      },
      set() {}
    },
    /**
     * 统计价格
     */
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.newPrice * item.count;
        }, 0);
    },
    /**
     * 适配高度增强用户体验
     */
    isFullDispaly() {
      return window.screen.height / window.screen.width > 16.8 / 9
        ? { bottom: "58px" }
        : { bottom: "49px" };
    }
  }
};
</script>

<style lang="scss" scoped>
#cart {
  height: calc(100% - 44px);
  // padding: 44px 0 44px 0;
  overflow: hidden;
  padding-top: 44px;
}
.cart-nav {
  background-color: #d81e06;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.content {
  overflow: hidden;
  width: 100%;
  height: calc(100% - 49px - 49px);
  margin: 0 0 49px 0;
}
.product-item {
  box-sizing: border-box;
  display: flex;
  width: 100%;
}
.van-checkbox {
  margin: 10px;
}
.van-card {
  padding: 8px 8px;
  background-color: #fcfcfc;
  box-sizing: border-box;
  border-radius: 12px;
  width: 85%;
  z-index: 9;
  .van-tag {
    margin-right: 6px;
  }
  .cart-tags {
    display: flex;
    justify-content: space-between;
  }
}
.submit-bar {
  background-color: #fcfcfc;
}
.isNull {
  img {
    width: 160px;
    border-radius: 160px;
  }
  margin-top: 30px;
  text-align: center;
}
</style>
