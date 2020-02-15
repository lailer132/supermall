<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="content">
      <div class="left">
        <div class="sidebar-class">
          <sidebar v-model="activeKey">
            <sidebar-item v-for="(item,i) in goodsClass" :key="i" :title="item.cname" @click="backClick"/>
          </sidebar>
        </div>
      </div>
      <div class="main">
        <div style="height:100%; width:100%; text-align:center; margin-top:60px" v-if="!isLoad">
          <loading size="36px">加载中...</loading>
        </div>
        <scroll class="content-scroll" ref="scroll" :probe-type="3" v-show="isLoad">
          <div class="content-header">
            <img :src="goodsClass[activeKey].titleImage" alt="" @load="isLoadSuccsee">
          </div>
          <divider :style="{ color: '#323233', borderColor: '#323233', padding: '0 16px' }">类别</divider>
          <grid :clickable="true" :gutter="6" :column-num="3" :border="false">
            <grid-item v-for="(item,i) in goodsClass[activeKey].classItem" :key="i">
              <images :src="item.imageSrc" />
              <span>{{item.title}}</span>
            </grid-item>
          </grid>
          <divider :style="{ color: '#323233', borderColor: '#323233', padding: '0 16px' }">推荐</divider>
          <goods-list ref="recommend" class="goods-list" :goods="showGoods" />
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import NavBar from "components/common/navbar/NavBar";
import { Sidebar, SidebarItem } from "vant";
import { Grid, GridItem, Image } from "vant";
import { Divider, Loading } from "vant";
import GoodsList from "components/content/goods/GoodsList";

import { getDetailGoodsData } from "network/detail";
import { getGoodsClassData } from "network/category";
export default {
  name: "Category",
  data() {
    return {
      showGoods: [],
      goodsClass: [
        {classItem:null}
      ],
      activeKey: 0,
      isLoad: false
    };
  },
  components: {
    NavBar,
    Sidebar,
    SidebarItem,
    Grid,
    GridItem,
    Images: Image,
    GoodsList,
    Divider,
    Scroll,
    Loading
  },
  created() {
    getDetailGoodsData().then(res => {
      this.showGoods = res;
    });
    getGoodsClassData().then(res => {
      this.goodsClass = res;
    });
  },
  activated() {
    console.log("activated");
    this.$refs.scroll.refresh()
  },
  deactivated() {
    console.log("deactivated");
  },
  destroyed() {
    console.log("destroyed");
  },
  mounted() {},
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    isLoadSuccsee() {
      this.isLoad = true;
    }
  }
};
</script>

<style lang="scss" scoped>
#category {
  height: calc(100% - 44px);
  // padding: 44px 0 44px 0;
  overflow: hidden;
  padding-top: 44px;
}
.category-nav {
  background-color: #d81e06;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.content {
  display: flex;
  height: calc(100% - 49px);
  flex-direction: row;
  .left {
    height: 100%;
    width: 105px;
    background-color: #fafafa;
    overflow:hidden;
    .sidebar-class {
      height: 100%;
      width: calc(100% + 12px);
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  .main {
    width: 100%;
  }
  .content-scroll {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    .content-header {
      width: 100%;
      text-align: center;
      padding-top: 12px;
      img {
        width: 86%;
        border-radius: 10px;
      }
    }
  }
}
</style>
