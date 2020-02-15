<template>
  <div class="param-info">
    <table class="info-size">
      <tr v-for="(tr,index) in paramInfo.sizes" :key="index">
        <td v-for="(td, indey) in tr" :key="indey">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">
          {{info.key}}
        </td>
        <td class="info-param-value">
          {{info.value}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .param-info{
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    font-size: 16px;
    table {
      width: 100%;
      border-collapse: collapse;
      border-top: 2px solid rgba(100,100,100,.1);
      tr {
        height: 42px;
      }
      td {
        border-bottom: 1px solid rgba(100,100,100,.1);
      }
    }
    .info-param{
      .info-param-key{
        min-width: 38px;
      }
      .info-param-value{
        color: #eb4868;
      }
    }
  }
</style>
