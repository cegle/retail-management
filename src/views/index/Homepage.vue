<template>
  <div class="homepage">
    <sub-title :subTitle="'系统首页'"></sub-title>
    <div class="content">
      <div class="part1">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content">
              <i class="left-icon1"></i>
              <div class="right">
                <p class="words">今日订单总数</p>
                <p class="num">{{data.todayOrderNum}}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <i class="left-icon2"></i>
              <div class="right">
                <p class="words">今日销售总额</p>
                <p class="num">{{"¥"+data.todayOrderMoney}}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <i class="left-icon3"></i>
              <div class="right">
                <p class="words">昨日销售总额</p>
                <p class="num">{{"¥"+data.yesterdayOrderMoney}}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <i class="left-icon4"></i>
              <div class="right">
                <p class="words">近7天销售总额</p>
                <p class="num">{{"¥"+data.nearlySevenDaysOrderMoney}}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="part2">
        <div class="title2">待处理事务</div>
        <div class="content2">
          <div>
            <p>待付款订单</p>
            <span>
              (
              <span>{{data.dfk}}</span> )
            </span>
          </div>
          <div>
            <p>已完成订单</p>
            <span>
              (
              <span>{{data.ywc}}</span> )
            </span>
          </div>
          <div>
            <p>待确认退货订单</p>
            <span>
              (
              <span>{{data.dqrth}}</span> )
            </span>
          </div>
          <div>
            <p>待发货订单</p>
            <span>
              (
              <span>{{data.dfh}}</span> )
            </span>
          </div>
          <div>
            <p>新缺货登记</p>
            <span>
              (
              <span>10</span> )
            </span>
          </div>
          <div>
            <p>待处理退款申请</p>
            <span>
              (
              <span>{{data.dcltk}}</span> )
            </span>
          </div>
          <div>
            <p>已发货订单</p>
            <span>
              (
              <span>{{data.dsh}}</span> )
            </span>
          </div>
          <div>
            <p>待处理退货订单</p>
            <span>
              (
              <span>10</span> )
            </span>
          </div>
          <div>
            <p>广告位即将到期</p>
            <span>
              (
              <span>0</span> )
            </span>
          </div>
        </div>
      </div>
      <div class="part2 part3">
        <div class="title2">运营快捷入口</div>
        <ul class="list">
          <li
            class="flex-1"
            @click="linkUrl(item.path)"
            v-for="(item,index) in entryList"
            :key="index"
          >
            <img :src="item.icon" alt class="list-icon">
            <p class>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <div class="part2 part4">
        <div class="p-left">
          <div class="title2">商品总览</div>
          <div class="prod">
            <div>
              <p class="num">{{ goodsData.notpull || 0 }}</p>
              <p>已下架</p>
            </div>
            <div>
              <p class="num">{{ goodsData.put || 0 }}</p>
              <p>已上架</p>
            </div>
            <div>
              <p class="num">{{ goodsData.all || 0 }}</p>
              <p>全部商品</p>
            </div>
          </div>
        </div>
        <div class="p-right">
          <div class="title2">用户总览</div>
          <div class="user">
            <div>
              <p class="num">{{ userData.yesterdayAddUserCount || 0 }}</p>
              <p>昨日新增</p>
            </div>
            <div>
              <p class="num">{{ userData.monthAddUserCount || 0 }}</p>
              <p>本月新增</p>
            </div>
            <div>
              <p class="num">{{ userData.allUserCount || 0 }}</p>
              <p>会员总数</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import subTitle from "../../components/subTitle";
export default {
  name: "homepage",
  components: { "sub-title": subTitle },
  data() {
    return {
      userData: {},
      goodsData: {},
      data: {
        todayOrderNum: 0,
        todayOrderMoney: 0,
        yesterdayOrderMoney: 0,
        nearlySevenDaysOrderMoney: 0
      },
      aUnpaid: 0, //待处理
      complate: 0, //已完成
      pending: 0, //待确认退货
      back_orders: 0, //代发货
      order: "",
      all_wei: "", //待处理退款
      all_shipped: "", //已发货
      todayOrderNum: 0,
      todayOrderMoney: 0,
      yesterdayOrderMoney: 0,
      nearlySevenDaysOrderMoney: 0,
      goods: "",
      entryList: [
        {
          icon: require("@/assets/index/icon-5.png"),
          text: "添加商品",
          path: "/goods/add"
        },
        {
          icon: require("@/assets/index/icon-6.png"),
          text: "订单列表",
          path: "/order/list"
        },
        {
          icon: require("@/assets/index/icon-7.png"),
          text: "用户管理",
          path: "/user/list"
        },
        {
          icon: require("@/assets/index/icon-8.png"),
          text: "交易统计",
          path: "/statistics/deal"
        },
        {
          icon: require("@/assets/index/icon-10.png"),
          text: "广告管理",
          path: "/operate/advertising"
        }
      ]
    };
  },
  mounted() {
    this.$http
      .post("merchant_order/getOrderAllCount", {
        merchantId: JSON.parse(this.$store.getters.userInfo).merchantId
      })
      .then(res => {
        this.data = res;
      })
      .catch(err => console.log(err));
    this.$http
      .post("merchant/merchant_index")
      .then(res => {
        this.userData = res;
      })
      .catch(err => console.log(err));
    this.$http
      .post("merchantGoods/goodsCountStatistics")
      .then(res => {
        this.goodsData = res;
      })
      .catch(err => console.log(err));
  },
  methods: {
    linkUrl(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  // min-width: 1100px;
  width: 100%;

  .content {
    margin: 0 auto;
    width: 1060px;
    .part1 {
      margin: 20px auto;
      .grid-content {
        height: 100px;
        border: 1px solid rgba(228, 228, 228, 1);
        display: flex;
        justify-content: space-around;
        padding-top: 24px;
        box-sizing: border-box;
        .left-icon1,
        .left-icon2,
        .left-icon3,
        .left-icon4 {
          display: inline-block;
          width: 50px;
          height: 52px;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .left-icon1 {
          background-image: url("../../assets/images/u2462.png");
        }
        .left-icon2 {
          background-image: url("../../assets/images/u2501.png");
        }
        .left-icon3 {
          background-image: url("../../assets/images/u2590.png");
        }
        .left-icon4 {
          background-image: url("../../assets/images/u2452.png");
        }
        .right {
          width: 149px;
          height: 56px;
          .words {
            height: 21px;
            line-height: 21px;
            font-size: 16px;
            color: #999999;
          }
          .num {
            height: 26px;
            line-height: 34px;
            font-size: 20px;
          }
        }
      }
    }
    .part2 {
      width: 1060px;
      height: 200px;
      border: 1px solid rgba(228, 228, 228, 1);
      .title2 {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-weight: bold;
        border-bottom: inherit;
        background-color: rgba(243, 243, 243, 1);
        box-sizing: border-box;
        padding-left: 20px;
      }
      .content2 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 20px;
        div {
          display: inline-flex;
          justify-content: space-between;
          width: 300px;
          height: 36px;
          line-height: 36px;
          border-bottom: 1px solid rgba(243, 243, 243, 1);
          text-align: left;
          padding: 0 20px;
          box-sizing: border-box;
          p {
            cursor: pointer;
          }
          span {
            span {
              color: rgb(240, 72, 68);
              font-size: 14px;
            }
          }
          p:hover,
          span:hover {
            color: rgb(26, 188, 156);
            span {
              color: rgb(26, 188, 156);
            }
          }
        }
      }
    }
    .part3 {
      margin-top: 20px;
      .list {
        // padding: 20px 0 35px;
        // border: 1px solid #b4b4b4;
        // margin-bottom: 30px;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        li:hover > p {
          cursor: pointer;
          color: #5ac2c0;
        }
        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
    .part4 {
      border: none;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .p-left,
      .p-right {
        width: 500px;
        height: 160px;
        border: 1px solid rgba(228, 228, 228, 1);
        .prod,
        .user {
          display: flex;
          justify-content: space-around;
          margin-top: 35px;
          font-size: 16px;
          text-align: center;
          div {
            .num {
              font-size: 18px;
              color: #d23029;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
</style>