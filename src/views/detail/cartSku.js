export default function (images, price) {
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  return {
    tree: [
      {
        k: "颜色", // skuKeyName：规格类目名称
        v: [
          {
            id: "101", // skuValueId：规格值 id
            name: "红色", // skuValueName：规格值名称
            imgUrl: images, // 规格类目图片，只有第一个规格类目可以定义图片
            previewImgUrl: images // 用于预览显示的规格类目图片
          },
          {
            id: "201",
            name: "蓝色",
            imgUrl: images,
            previewImgUrl: images
          }
        ],
        k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      },
      {
        k: "尺码", // skuKeyName：规格类目名称
        v: [
          {
            id: "100", // skuValueId：规格值 id
            name: "S", // skuValueName：规格值名称
          },
          {
            id: "200",
            name: "M"
          },
          {
            id: "300",
            name: "L"
          },
          {
            id: "400",
            name: "XL"
          }
        ],
        k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      }
    ],
    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
    list: [
      {
        id: 1, // skuId，下单时后端需要
        price: price*100, // 价格（单位分）
        s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "100", // 规格类目 k_s 为 s2 的对应规格值 id
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      {
        id: 2, // skuId，下单时后端需要
        price: price*100, // 价格（单位分）
        s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "200", // 规格类目 k_s 为 s2 的对应规格值 id
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      {
        id: 3, // skuId，下单时后端需要
        price: price*100, // 价格（单位分）
        s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "300", // 规格类目 k_s 为 s2 的对应规格值 id
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      {
        id: 4, // skuId，下单时后端需要
        price: price*100, // 价格（单位分）
        s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "400", // 规格类目 k_s 为 s2 的对应规格值 id
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      {
        id: 5, // skuId，下单时后端需要
        price: price*100, // 价格（单位分）
        s1: "201", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "100", // 规格类目 k_s 为 s2 的对应规格值 id
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      {
        id: 6, // skuId，下单时后端需要
        price: price*100, // 价格（单位分）
        s1: "201", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "200", // 规格类目 k_s 为 s2 的对应规格值 id
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      {
        id: 7, // skuId，下单时后端需要
        price: price*100, // 价格（单位分）
        s1: "201", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "300", // 规格类目 k_s 为 s2 的对应规格值 id
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      {
        id: 8, // skuId，下单时后端需要
        price: price*100, // 价格（单位分）
        s1: "201", // 规格类目 k_s 为 s1 的对应规格值 id
        s2: "400", // 规格类目 k_s 为 s2 的对应规格值 id
        stock_num: 110 // 当前 sku 组合对应的库存
      }
    ],
    price: price, // 默认价格（单位元）
    stock_num: 227, // 商品总库存
    collection_id: 6666, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
    none_sku: false, // 是否无规格商品
    hide_stock: false, // 是否隐藏剩余库存,
  }
}
