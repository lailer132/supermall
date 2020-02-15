<template>
  <div>
    <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">更多</div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>
          {{commentInfo.user.uname}}
        </span>
      </div>
      <div class="info-detail">
        <p>
          {{commentInfo.content}}
        </p>
        <div class="info-other">
          <span class="date">
            {{commentInfo.created | showDate}}
          </span>
          <span>
            {{commentInfo.style}}
          </span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, i) in commentInfo.images" :key="i" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {format} from "common/utils"
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      // 1. 将时间戳转化为 Date 对象
      const date = new Date(value)
      // 2. 将 date 进行格式化
      return format(date, "yyyy-MM-dd")

    }
  }
}
</script>

<style lang="scss" scoped>
 .comment-info {
   margin: 20px;
   box-sizing: border-box;
   border-bottom: 2px solid rgba(100,100,100,.1);
   .info-header {
     display: flex;
     justify-content: space-between;
     padding: 20px 0 20px 0;
     border-top: 5px solid rgba(100,100,100,.1);
   }
   .info-user {
     padding-top: 10px;
     border-top: 2px solid rgba(100,100,100,.1);
     display: flex;
     align-items: center;
     img {
       margin-right: 10px;
       width: 40px;
       height: 40px;
       border-radius: 20px;
     }
   }
   .info-detail {
     font-size: 14px;
     p {
       color: #666666;
     }
     span {
       color: #888888;
     }
     .info-imgs {
       margin: 10px 0 10px 0;
       img {
         margin-right: 5px;
         width:85px;
         height: 85px;
       }
     }
   }
 }
</style>
