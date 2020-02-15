import {
  ADD_COUNTER,
  ADD_TO_CART,
  UPDATA_CART_LIST,
  DELETE_CART_IITEM
} from './mutations_types'


export default {
  // 唯一的目的是修改state的状态，且功能单一
  [ADD_COUNTER](state, payload) {
    payload.oldProduct.count += payload.newCount
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  },
  [UPDATA_CART_LIST](state, payload) {
    state.cartList = payload
  },
  [DELETE_CART_IITEM](state, payload) {
    state.cartList.splice(payload, 1)
  }
}
