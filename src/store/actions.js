import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_types'
export default {
  addCart(context, payload) {
    return new Promise((resolve) => {
      // payload新添加的商品
      // 1. 查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => {
        return item.pid === payload.pid && item.color === payload.color && item.size === payload.size
      })
      // 2. 判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNTER, {oldProduct, newCount:payload.count})
        resolve('已增添到购物车')
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve('已添加到购物车')
      }
    })
  }
}
