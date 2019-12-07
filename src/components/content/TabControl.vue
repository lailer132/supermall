<template>
  <div class="tab-control">
    <div v-for="(item,i) in titles" :key="i" @click="itemClick(item.tag, i)"
    :class="{active:i === select}">
      <span>
        {{item.n}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    },
    select: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(tag,i) {
      this.$emit('tabClick', tag, i)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-control{
    background-color: #fff;
    display: flex;
    text-align: center;
    font-size: 16px;
    div{
      flex:1;
      height: 40px;
      line-height: 40px;
      span{
        padding: 6px;
      }
    }
    .active{
      color: #d81e06;
      span{
        border-bottom: #d81e06 2px solid;
      }
    }
  }
</style>
