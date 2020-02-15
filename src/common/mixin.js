// 混用
import {debounce} from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImgListener = () => {
      newRefresh()
    }
  },
  updated() {
    this.itemImgListener()
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTopShow: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}
