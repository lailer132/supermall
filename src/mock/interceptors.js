import Mock from 'mockjs'
import homeData from 'mock/HomeOut'
import contentData from 'mock/ContentOut'
import MockPatch from 'mock/Function'
export default function(){
  Mock.mock('/home/swipedata',/post|get/i,homeData.swipeData)

  Mock.mock('/home/recommendsdata',/post|get/i,homeData.recommendsData)

  Mock.mock('/home/goodsdata',/post|get/i, function(options){
    let queryType = JSON.parse(options.body)
    let params =
    queryType.type === 'pop' ? 'cfav' :
    queryType.type === 'new' ? 'id' : 'sales'
    let goodsData = MockPatch.ascfn(params, contentData.goodsData.goods)
    let resultData = MockPatch.goPage(goodsData, queryType.page, 10)
    return resultData;
  });
}
