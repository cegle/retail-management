<template>
  <div class="homepage">
    <div class="header">
      <div class="title">系统首页</div>
      <div class="refresh" @click="refresh">刷新</div>
    </div>
    <div class="content">
      <div class="part1">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content">
              <i class="left-icon1"></i>
              <div class="right">
                <p class="words">今日订单总数</p>
                <p class="num">200</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <i class="left-icon2"></i>
              <div class="right">
                <p class="words">今日销售总额</p>
                <p class="num">¥5000.00</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <i class="left-icon3"></i>
              <div class="right">
                <p class="words">昨日销售总额</p>
                <p class="num">¥5000.00</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <i class="left-icon4"></i>
              <div class="right">
                <p class="words">近7天销售总额</p>
                <p class="num">¥50000.00</p>
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
              <span>10</span> )
            </span>
          </div>
          <div>
            <p>已完成订单</p>
            <span>
              (
              <span>10</span> )
            </span>
          </div>
          <div>
            <p>待确认退货订单</p>
            <span>
              (
              <span>10</span> )
            </span>
          </div>
          <div>
            <p>待发货订单</p>
            <span>
              (
              <span>10</span> )
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
              <span>10</span> )
            </span>
          </div>
          <div>
            <p>已发货订单</p>
            <span>
              (
              <span>10</span> )
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
              <span>10</span> )
            </span>
          </div>
        </div>
      </div>
      <div class="part2 part3">
        <div class="title2">运营快捷入口</div>
      </div>
      <div class="part4"></div>
      <div class="part5"></div>
      <div class="part6"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    refresh() {}
  }
};
</script>

<style lang="scss" scoped>
.homepage {
  // min-width: 1100px;
  width: 100%;
  .header {
    background-color: #f2f2f2;
    height: 50px;
    line-height: 50px;
    color: #909399;
    position: relative;
    display: flex;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    .title {
      min-width: 1100px;
      border-left: 6px solid #5bc0bf;
      line-height: 21px;
      height: 21px;
      padding-left: 10px;
      position: relative;
      top: 14px;
    }
    .refresh {
      min-width: 80px;
      height: 30px;
      line-height: 30px;
      border: 1px solid rgba(228, 228, 228, 1);
      text-align: center;
      position: relative;
      top: 8px;
      left: 100px;
      background-color: #ffffff;
      cursor: pointer;
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }
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
          background-image: url("../assets/images/u2462.png");
        }
        .left-icon2 {
          background-image: url("../assets/images/u2501.png");
        }
        .left-icon3 {
          background-image: url("../assets/images/u2590.png");
        }
        .left-icon4 {
          background-image: url("../assets/images/u2452.png");
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
    }
  }
}
</style>

<style lang="scss">
</style>