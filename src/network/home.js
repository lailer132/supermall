import {request} from './request'

export function getHomeMultiData() {
  return request({
    url: '/home/swipedata'
  })
}
export function getHomeRecommendsData() {
  return request({
    url: '/home/recommendsdata'
  })
}
export function getHomeGoodsData(type,page) {
  return request({
    url: '/home/goodsdata',
    method: 'post',
    data: {
      type,
      page
    }
  })
}
