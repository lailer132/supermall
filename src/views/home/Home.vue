<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :select="tabControlSelect" :titles="[{n:'流行',tag:'pop'},{n:'新款',tag:'new'},{n:'精选',tag:'sell'}]"
      @tabClick="tabClick" ref="tabControl" class="tabControl" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" @pullingUp="loadMore">
      <home-swipe :banners="banners" @swiperImageLoad="ImagesLoad"></home-swipe>
      <recommend-view :recommends="recommends" @recommendsImageLoad="ImagesLoad"/>
      <feature-view/>
      <tab-control :select="tabControlSelect" :titles="[{n:'流行',tag:'pop'},{n:'新款',tag:'new'},{n:'精选',tag:'sell'}]"
      @tabClick="tabClick" ref="tabControl"/>
      <goods-list class="goods-list" :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTopShow"/>
  </div>
</template>

<script>
import {debounce} from 'common/utils'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwipe from './childComps/HomeSwipe'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultiData} from 'network/home'
import {getHomeRecommendsData} from 'network/home'
import {getHomeGoodsData} from 'network/home'
export default {
  name:"Home",
  components: {
    NavBar,
    HomeSwipe,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isBackTopShow: false,
      tabOffserTop: 0,
      isTabFixed: false,
      tabControlSelect: 0,
      saveY: 0
    }
  },
  created() {
    // 请求数据
    this.getHomeMultiData();
    this.getHomeRecommendsData();
    this.getHomeGoodsData('pop');
    this.getHomeGoodsData('new');
    this.getHomeGoodsData('sell');
  },
  destroyed() {
    console.log('this component is over')
  },
  activated() {
    // console.log('activated')
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    // console.log('deactivated')
    // save当前页面坐标
    this.saveY = this.$refs.scroll.getScrollY();
  },
  mounted(){
    // 监听item img load
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('itemImageLoad',() => {
      refresh()
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(tag, i) {
      this.currentType = tag
      this.tabControlSelect = i
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position){
      // 判断BackTop是否显示
      this.isBackTopShow = -position.y > 1000 ? true : false
      // console.log(-position.y+':'+this.tabOffserTop)
      // 悬挂tabControl
      this.isTabFixed = (-position.y) > this.tabOffserTop
    },
    loadMore() {
      this.getHomeGoodsData(this.currentType)
    },
    ImagesLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffserTop = this.$refs.tabControl.$el.offsetTop-44
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.banner;
      });
    },
    getHomeRecommendsData(){
      getHomeRecommendsData().then(res => {
        this.recommends = res.recommends;
      });
    },
    getHomeGoodsData(type){
      const page = this.goods[type].page + 1
      getHomeGoodsData(type, page).then(res => {
        // console.log(res.length);
        this.goods[type].list.push(...res);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  #home {
    height: calc(100% - 44px);
    // padding: 44px 0 44px 0;
    overflow: hidden;
    padding-top: 44px;
  }
  .home-nav {
    background-color: #d81e06;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  /* .tab-control{
    position:sticky;
    top:44px;
    z-index: 998;
  } */
  .tabControl {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 998;
  }
  .goods-list {
    padding-bottom: 20px;
  }
  .content {
    overflow: hidden;
    width: 100%;
    height: calc(100% - 44px);
    margin: 0 0 44px 0;
  }
</style>
