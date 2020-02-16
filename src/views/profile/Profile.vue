<template>
  <div id="profile">
    <!-- 头部登录 -->
    <div class="header">
      <div class="user_box_img">
        <img src="~assets/img/profile/user.svg" alt />
      </div>
      <span>登录/注册</span>
    </div>
    <!-- main -->
    <div class="main">
      <!-- 我的订单 -->
      <div class="DTextView">
        <div class="title">我的订单</div>
        <div class="details">
          <span>全部订单</span>
          <img src="~assets/img/profile/right.svg" alt />
        </div>
      </div>
      <!-- 订单处理 -->
      <div class="PayTextView">
        <div class="item">
          <img src="~assets/img/profile/payment.svg" alt />
          <p>待付款</p>
        </div>
        <div class="item">
          <img src="~assets/img/profile/received.svg" alt />
          <p>待收货</p>
        </div>
        <div class="item">
          <img src="~assets/img/profile/exchange.svg" alt />
          <p>退还修</p>
        </div>
      </div>
      <!-- 用户优惠 -->
      <div class="UsersTextView content-view">
        <div class="item">
          <div class="title">
            <img src="~assets/img/profile/vip.svg" alt />
            <span>会员福利</span>
          </div>
          <div class="details">
            <img src="~assets/img/profile/right.svg" alt />
          </div>
        </div>
        <div class="item">
          <div class="title">
            <img src="~assets/img/profile/discount.svg" alt />
            <span>我的优惠</span>
          </div>
          <div class="details">
            <img src="~assets/img/profile/right.svg" alt />
          </div>
        </div>
      </div>
      <!-- 服务中心 -->
      <div class="ServeTextView content-view">
        <div class="item">
          <div class="title">
            <img src="~assets/img/profile/serve.svg" alt />
            <span>服务中心</span>
          </div>
          <div class="details">
            <img src="~assets/img/profile/right.svg" alt />
          </div>
        </div>
        <div class="item">
          <div class="title">
            <img src="~assets/img/profile/shop.svg" alt />
            <span>线下商铺</span>
          </div>
          <div class="details">
            <img src="~assets/img/profile/right.svg" alt />
          </div>
        </div>
      </div>
      <!-- 设置及绿色通道 -->
      <div class="SettleTextView content-view">
        <div class="item">
          <div class="title">
            <img src="~assets/img/profile/green.svg" alt />
            <span>绿色通道</span>
          </div>
          <div class="details">
            <img src="~assets/img/profile/right.svg" alt />
          </div>
        </div>
        <div class="item">
          <div class="title">
            <img src="~assets/img/profile/setting.svg" alt />
            <span>设置</span>
          </div>
          <div class="details">
            <img src="~assets/img/profile/right.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {}
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
#profile {
  height: calc(100%);
  overflow: hidden;
  width: 100vw;
  line-height: 0;
  overflow-y: auto;
}
.header {
  background-color: #d81e06;
  width: 100%;
  height: 120px;
  display: flex;
  color: #fff;
  align-items: center;
  .user_box_img {
    margin: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    padding: 5px;
    border: #fff 3px solid;
    background-color: #f83e26;
    img {
      width: 100%;
    }
  }
}
.main {
  display: flex;
  flex-direction: column;
  padding-bottom: 58px;
  .DTextView {
    &:active {
      background-color: rgb(224, 227, 230);
    }
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height: 60px;
    color: #515151;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    .title {
      font-size: 16px;
    }
    .details {
      display: flex;
      align-items: center;
      height: 20px;
      font-size: 14px;
    }
    img {
      margin-left: 10px;
      width: 20px;
    }
  }
  .PayTextView {
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #8a8a8a;
    border-top: #eee 1px solid;
    border-bottom: #eee 1px solid;
    .item {
      margin-top: 10px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 0px;
      img {
        width: 40px;
      }
    }
  }
  .content-view {
    width: 100%;
    height: 120px;
    margin-bottom: 20px;
    border-top: #eee 1px solid;
    border-bottom: #eee 1px solid;
    .item {
      &:active {
        background-color: rgb(224, 227, 230);
      }
      box-sizing: border-box;
      padding: 20px;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      .title {
        display: flex;
        align-items: center;
        height: 20px;
        font-size: 14px;
        img {
          margin-right: 30px;
          width: 30px;
        }
      }
      .details {
        img {
          width: 20px;
        }
      }
    }
  }
  // .ServeTextView {
  //   background-color: #8090a0;
  //   width: 100%;
  //   height: 120px;
  //   margin-bottom: 20px;
  //   .item {
  //     .title {
  //       img {
  //         width: 30px;
  //       }
  //     }
  //   }
  // }
  // .SettleTextView {
  //   background-color: #8090a0;
  //   width: 100%;
  //   height: 120px;
  //   margin-bottom: 20px;
  // }
}
</style>
