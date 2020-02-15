import {request} from './request'

export function getDetail(id){
  return request({
    url: '/detail',
    method: 'post',
    data: {
      id
    }
  })
}

export function getDetailGoodsData(type,page) {
  return request({
    url: '/detail/goodsdata',
    method: 'post',
    data: {
      type,
      page
    }
  })
}

export class Goods {
  constructor(data) {
    this.title = data.title // 标题
    this.newPrice = data.price // 当前价格
    this.oldPrice = data.itemInfo.oldPrice // 原价格
    this.discountDesc = data.itemInfo.discountDesc // 活动
    this.cfav = data.cfav // 收藏
    this.sales = data.sales // 销量
    this.services = data.services // 相关服务
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.infos = info.set
    this.sizes = rule.tables
  }
}
