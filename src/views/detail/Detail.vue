<template>
  <div>
    <div v-show="Object.keys(goods).length === 0">
      <skeleton title :row="8" />
    </div>
    <div id="detail" v-show="Object.keys(goods).length !== 0">
      <detail-nav-bar ref="nav" @titleClick="titleClick" class="nav-bar" />
      <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
        <detail-swipe :banners="banners" />
        <detail-base-info :goods="goods" />
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
        <detail-goods-params ref="params" :param-info="paramInfo" />
        <detail-comment-info ref="comment" :comment-info="commentInfo" />
        <goods-list ref="recommend" class="goods-list" :goods="showGoods" />
      </scroll>
      <detail-bottom-bar @addCart="addToCart" />
      <sku
        v-model="cartShow"
        :sku="cartSku"
        :goods="cartGoods"
        :goods-id="id"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
      <back-top @click.native="backClick" v-show="isBackTopShow" />
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwipe from "./childComps/DetailSwipe";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParams from "./childComps/DetailGoodsParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import GoodsList from "components/content/goods/GoodsList";

import { Sku, Skeleton } from "vant";

import {
  getDetail,
  getDetailGoodsData,
  Goods,
  GoodsParam
} from "network/detail";

import { itemListenerMixin, backTopMixin } from "common/mixin";
import { debounce } from "common/utils";

import { mapActions } from "vuex";

import getCartSku from "./cartSku";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailBaseInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
    Sku,
    Skeleton
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      id: null,
      goods: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      showGoods: [],
      themeScrollTo: [0, 0, 0, 0],
      debounceTST: null,
      currentIndex: 0,
      cartShow: false,
      cartSku: {},
      cartGoods: {
        // 商品标题
        title: "",
        // 默认商品 sku 缩略图
        picture: ""
      }
    };
  },
  activated() {
    console.log("detail activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  destroyed() {
    console.log("destroyed");
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  created() {
    // 方法四：themeScrollTo 初始化防抖 debounceTST 函数，让图片每次加载监听
    this.debounceTST = debounce(() => {
      // console.log('debounceTST')
      this.themeScrollTo = [];
      this.themeScrollTo.push(0);
      this.themeScrollTo.push(this.$refs.params.$el.offsetTop - 44);
      this.themeScrollTo.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeScrollTo.push(this.$refs.recommend.$el.offsetTop - 44);
      this.themeScrollTo.push(999999);
      // console.log(this.themeScrollTo)
      // console.log(this.$refs.scroll.$el.offsetTop)
      // console.log(this.$refs.params.$el.offsetTop)
    }, 200);
    // 接收路由跳转传过来的参数 id
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
      // console.log(res)

      // 获取轮播图数据
      this.banners = res.banner;
      // 穿插轮播图封面 添加测试效果
      this.banners.unshift({ image: res.image });

      // 创建商品的对象
      this.goods = new Goods(res);

      // 取出详情的信息
      this.detailInfo = res.detailInfo;

      // 取出参数的信息
      this.paramInfo = new GoodsParam(res.itemParams.info, res.itemParams.rule);
      console.log(this.paramInfo);

      //取出评论的信息
      if (res.rate.cRate !== 0) {
        this.commentInfo = res.rate.list[0];
      }

      /* this.$nextTick(() => { // 方法三 图片未能缓存问题
        this.themeScrollTo = []
        this.themeScrollTo.push(0)
        this.themeScrollTo.push(this.$refs.params.$el.offsetTop-44)
        this.themeScrollTo.push(this.$refs.comment.$el.offsetTop-44)
        this.themeScrollTo.push(this.$refs.recommend.$el.offsetTop-44)
      }) */

      this.cartSku = getCartSku(this.banners[0].image, this.goods.newPrice);
      this.cartGoods.title = this.goods.title;
      this.cartGoods.picture = this.banners[0].image;
    });

    // 取出推荐的信息
    getDetailGoodsData().then(res => {
      this.showGoods = res;
    });
  },

  mounted() {
    /* // 方法一 没来得及渲染就取值 失败
    this.themeScrollTo.push(0)
    this.themeScrollTo.push(this.$refs.params.$el.offsetTop)
    this.themeScrollTo.push(this.$refs.comment.$el.offsetTop)
    this.themeScrollTo.push(this.$refs.recommend.$el.offsetTop)
     */

    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },

  updated() {
    this.debounceTST();
    /* // 方法二 数据更新就渲染一次
    this.themeScrollTo = []
    this.themeScrollTo.push(0)
    this.themeScrollTo.push(this.$refs.params.$el.offsetTop-44)
    this.themeScrollTo.push(this.$refs.comment.$el.offsetTop-44)
    this.themeScrollTo.push(this.$refs.recommend.$el.offsetTop-44) */
  },

  methods: {
    ...mapActions({
      addCart: "addCart"
    }),
    imageLoad() {
      console.log("images end");
      this.$refs.scroll.refresh();
    },
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeScrollTo[index]);
    },
    contentScroll(position) {
      let positionY = -position.y;
      for (let i = 0; i < 4; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeScrollTo[i] &&
          positionY < this.themeScrollTo[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 判断BackTop是否显示
      this.isBackTopShow = -position.y > 1000 ? true : false;
    },
    /**
     * 提交购物车
     */
    addToCart() {
      this.cartShow = true;
      /* this.$store.dispatch('addCart', product).then(res => {
        window.console.log(res)
      }) */
    },
    onBuyClicked() {
      this.$toast("未登录");
    },
    onAddCartClicked(data) {
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.banners[0].image;
      product.title = this.goods.title;
      product.desc = this.detailInfo.desc;
      product.newPrice = this.goods.newPrice;
      product.oldPrice = this.goods.oldPrice;
      product.discountDesc = this.goods.discountDesc;
      product.checked = true;
      product.pid = this.id;
      product.count = data.selectedNum;
      product.color = this.getS_v(0, data.selectedSkuComb.s1);
      product.size = this.getS_v(1, data.selectedSkuComb.s2);
      // 将商品添加到购物车
      this.addCart(product).then(res => {
        this.$toast(res);
        this.cartShow = false;
      });
    },
    getS_v(index, num) {
      return this.cartSku.tree[index].v.find(item => {
        return item.id === num;
      }).name;
    }
  }
  /* watch: {
    $route () {
      this.$router.go(0)
    }
  } */
};
</script>

<style lang="scss" scoped>
#detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
}
.nav-bar {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.content {
  overflow: hidden;
  width: 100%;
  height: calc(100% - 44px - 49px);
  margin: 44px 0 49px 0;
}
</style>
