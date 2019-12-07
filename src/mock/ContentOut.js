import Mock from 'mockjs'
import MockPatch from 'mock/Function'
Mock.Random.increment = MockPatch.increment;

const goodsData = Mock.mock({
  'goods|101':[{
    'image': 'https://lailer132.github.io/history/supermall/goods/@natural(1,15).jpg',
    'title|1': ['两件8折 @title(3)2019新款韩版','两件6折 @title(3)2019新款韩版','2019新款韩版爆款@title(5)'],
    'id|+1': 1,
    'price|80-500': 89,
    'cfav|0-9999': 0,
    'sales|10-9999': 0
  }],
  returnCode: "SUCCESS",
  success: true
})
export default {
  goodsData
}
