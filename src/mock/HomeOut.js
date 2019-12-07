import Mock from 'mockjs'
import MockPatch from 'mock/Function'
Mock.Random.increment = MockPatch.increment;
const swipeData = Mock.mock({
  'banner|3':[{
    'image': 'https://lailer132.github.io/history/supermall/swipe/@increment(1,3).jpg'
  }],
  returnCode: "SUCCESS",
  success: true
})
const recommendsData = Mock.mock({
  'recommends|4':[
    {
      'image': 'https://lailer132.github.io/history/supermall/recommends/@increment(1,4).png',
      'title|+1': [
        '十点抢券1','好物热卖','内购福利','初秋上新'
      ]
    }
  ],
  returnCode: "SUCCESS",
  success: true
})
export default {
  swipeData,
  recommendsData
}
