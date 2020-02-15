import {request} from './request'

export function getGoodsClassData(){
  return request({
    url: '/home/goodsClass'
  })
}
