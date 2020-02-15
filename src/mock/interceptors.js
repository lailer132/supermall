import Mock from 'mockjs'
import homeData from 'mock/HomeOut'
import contentData from 'mock/ContentOut'
import MockPatch from 'mock/Function'
export default function(){
  Mock.mock('/home/swipedata',/post|get/i,homeData.swipeData)

  Mock.mock('/home/recommendsdata',/post|get/i,homeData.recommendsData)

  Mock.mock('/home/goodsClass',/post|get/i,contentData.goodsClassData.goodsClass)

  Mock.mock('/home/goodsdata',/post|get/i, function(options){
    let query = JSON.parse(options.body)
    let params =
    query.type === 'pop' ? 'cfav' :
    query.type === 'new' ? 'id' : 'sales'
    let goodsData = MockPatch.ascfn(params, contentData.goodsData.goods)
    let resultData = MockPatch.goPage(goodsData, query.page, 10)
    return resultData;
  });

  Mock.mock('/detail/goodsdata',/post|get/i, contentData.goodsData.goods);

  Mock.mock('/detail',/post|get/i, function(options){
    let query = JSON.parse(options.body)
    let goodsData = MockPatch.getGoodsIdMs(contentData.goodsData.goods, query.id)
    return goodsData;
  });
}
