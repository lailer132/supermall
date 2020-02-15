import Mock from 'mockjs'
import {mockLink} from 'mock/Common'
import MockPatch from 'mock/Function'
Mock.Random.increment = MockPatch.increment;

const goodsData = Mock.mock({
  'goods|102':[{
    'image': mockLink + '/supermall/goods/@natural(1,15).jpg',
    'title|1': ['两件8折 @title(3)2019新款韩版','两件6折 @title(3)2019新款韩版','2019新款韩版爆款@title(5)'],
    'id|+1': 1,
    'price|80-500': 89,
    'cfav|0-9999': 0,
    'sales|10-9999': 0,
    'classId': parseInt(Math.random()*12),
    'banner|2-5': [{'image': "@Image('800x800','@color','Hello')"}],
    'itemInfo': {
      'oldPrice|599-800': 599,
      'discountBgColor|1': ['#FF8E1B','#FFC0CB'],
      'discountDesc|1': ['活动价','优惠价','促销价','双11','1212']
    },
    'detailInfo': {
      'desc|1': ['新款上市 @title(6)2019新款韩版','限定款 @title(5)2019新款韩版','2019新款爆款@title(5)'],
      'detailImage|23': [
        mockLink + '/supermall/goods/detailInfo/item-00001/@increment(1,23).jpg',
      ]
    },
    'itemParams': {
      'info': {
        'anchor': 'product_info',
        'key': '产品参数',
        'set|7': [{
          'key|+1': [
            '图案','颜色','尺码','衣长','版型','季节','材质','风格'
          ],
          'value|+1': [
            '宫廷复古图/民族复古','黑白拼接','XL,L,M,XXL','常规','宽松','春季','棉','原宿'
          ]
        }]
      },
      'rule': {
        'anchor': 'product_info',
        'desclaimer': '*以上尺寸为实物人工测量',
        'key': '尺码说明',
        'tables': [
          ['尺码','M','L','XL','XXL'],
          ['衣长','61.5','63','64.5','66'],
          ['胸围','98','104','110','116'],
          ['袖长','63','66','68.5','70.5']
        ]
      }
    },
    'rate': {
      'cRate': 125,
      'list': [{
        'content|+1': [
          '刚好合适，物美价廉，衣服面料很好，穿着很舒服，版型也好看，非常棒！',
          '第一次买，这个牌子衣服挺ok的，下次还来这里买~~~~~~',
          '衣服很合适，也没有多余线头，用来打底穿的很合适。',
        ],
        'created': (new Date()).valueOf(),
        'style|+1': ['颜色:上衣+裤子 尺码:M','颜色:上衣+裤子 尺码:L'],
        'user': {
          'avatar': "@Image('800x800','@color','@first')",
          'uname': '@name'
        },
        'images': [
          "@Image('800x800','@color','@first')",
          "@Image('800x800','@color','@first')",
          "@Image('800x800','@color','@first')"
        ]
      }]
    },
    'services|1-5': [
      {
        'icon|+1': [
          'http://img.alicdn.com/tps/i2/TB1XY_zGpXXXXbeXXXXAz6UFXXX-16-16.png',
          'http://img.alicdn.com/tfs/TB1wj5PQFXXXXX8apXXXXXXXXXX-16-16.png',
          'http://img.alicdn.com/tfs/TB1KTHfQFXXXXbnXFXXXXXXXXXX-16-16.png',
          'http://img.alicdn.com/tfs/TB1w6O3QFXXXXX4aXXXXXXXXXXX-16-16.png',
          'http://gtms04.alicdn.com/tps/i4/TB14MJXLVXXXXaraXXXAz6UFXXX-16-16.png'
        ],
        'name|+1': [
          '15天退货',
          '公益宝贝',
          '蚂蚁花呗',
          '信用卡支付',
          '订单险'
        ]
      }
    ]
  }],
  returnCode: "SUCCESS",
  success: true
})

const goodsClassData = Mock.mock({
  'goodsClass|12':[
    {
      'cid|+1': 0,
      'cname|+1': [
        'ONLY',
        'V&Mode',
        '韩都衣舍',
        '太平鸟',
        '乐町',
        'UR',
        '三彩',
        '伊芙丽',
        'ZARA',
        'H&M',
        '音儿',
        '茵曼',
        'Lily',
        '诗梵米亚'
      ],
      'titleImage|1': './category/imageHeader-@natural(1, 3).png',
      'classItem|6-12':[
        {
          'title|1':['连衣裙','卫衣','衬衫','短裙','时尚套装','休闲裤'],
          'imageSrc':'./category/class-@natural(1, 6).jpg'
        }
      ]
    }
  ],
  returnCode: "SUCCESS",
  success: true
})
export default {
  goodsData,
  goodsClassData
}
