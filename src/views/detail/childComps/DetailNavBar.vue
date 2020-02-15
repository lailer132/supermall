<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,i) in titles" :key="i" @click="titleClick(i)" :class="{active: i === currentIndex}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .title{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .active{
    color: #d81e06;
  }
  .back{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // text-align: center;
    // line-height: 44px;
  }
</style>
