<template>
  <div class="logs">
    <sub-title :subTitle="'登录日志'"></sub-title>
    <div class="body">
      <p>
        <img src="../../assets/index/icon-6.png" alt>数据列表
      </p>
      <table class="table-middle">
        <thead>
          <tr>
            <th>时间</th>
            <th>IP</th>
            <th>地区</th>
            <th>浏览器</th>
          </tr>
        </thead>
        <tbody id="didi-navigator">
          <tr v-for="tab in table" align="center">
            <td>{{tab.operateTime}}</td>
            <td>{{tab.ip}}</td>
            <td
              v-if="tab.description.data"
            >{{tab.description.data.country}}-{{tab.description.data.region}}-{{tab.description.data.city}}</td>
            <td v-else></td>
            <td>{{tab.pack}}</td>
          </tr>
        </tbody>
      </table>
      <pagination @next="next" :isBatch="false" :total="total"></pagination>
    </div>
  </div>
</template>
<script>
import subTitle from "../../components/subTitle";
import pagination from "../../components/pagination";
// import mixin from "@/utils/mixin";
// import axios from "axios";
export default {
  name: "systemInfo",
  components: {
    subTitle,
    pagination
  },
  data() {
    table: [];
    return {
      table: [],
      currentPage: 1,
      total: 0,
      pageSize: 10
    };
  },
  created: function() {
    this.getList(1);
    // var _this = this
    // this.$http.post('/merchant/get_merchant_login_info_list', {
    //           currentPage : 1,
    //           pageSize : this.pageSize,
    //           orderBy: 'operate_time desc'

    //   },{
    //         type : "form"
    //   }).then(function (response) {
    //         console.log(response.list[1].description.data)
    //         for(var i=0;i<response.list.length;i++){
    //             if(response.list[i].description!=''){
    //                 response.list[i].description = JSON.parse(response.list[i].description);
    //             }
    //         }
    //         _this.table = response.list
    //   })
    //   .catch(function (error) {
    //       console.log(error);
    //   });
  },
  methods: {
    getList(pageSize11) {
      var _this = this;
      this.$http
        .post(
          "/merchant/get_merchant_login_info_list",
          {
            currentPage: pageSize11,
            pageSize: this.pageSize,
            orderBy: "operate_time desc"
          },
          { type: "form" }
        )
        .then(
          response => {
            this.tableData = response.list;
            this.total = response.totalCount;
            for (var i = 0; i < response.list.length; i++) {
              if (response.list[i].description != "") {
                if (response.list[i].description != "成功") {
                  response.list[i].description = eval(
                    "(" + response.list[i].description + ")"
                  );
                }
              }
            }
            _this.table = response.list;
          },
          err => {}
        );
      // var  _this = this;
      // this.$http.post('/merchant/get_merchant_login_info_list', {
      //       type : "form",
      //       currentPage : pageSize11,
      //       pageSize : this.pageSize,
      //       orderBy: 'operate_time desc'
      // }).then(function (response) {
      //       for(var i=0;i<response.list.length;i++){
      //           if(response.list[i].description!=''){
      //               response.list[i].description = JSON.parse(response.list[i].description);
      //           }
      //       }
      //       _this.table = response.list
      // })
      // .catch(function (error) {
      //     console.log(error);
      // });
    },
    next(val) {
      this.getList(val);
    }
  }
};
</script>
<style scoped lang="scss">
.logs {
  width: 100%;
  .body {
    width: 70%;
    min-width: 600px;
    margin: 20px auto;
    p {
      img {
        width: 25px;
        margin-left: 10px;
        margin-bottom: -7px;
      }
      height: 50px;
      width: 100%;
      line-height: 50px;
      background: #efefef;
    }
    .el-pagination {
      text-align: right;
    }
    .table-middle {
      width: 100%;
      margin: 0 auto;
      border-right: 1px solid #b4b4b4;
      border-bottom: 1px solid #b4b4b4;
      border-collapse: collapse;
      tbody,
      thead {
        width: 100%;
      }
      tr {
        height: 50px;
        background-color: #fff;
      }
      td,
      th {
        padding: 0 20px;
        border-left: 1px solid #b4b4b4;
        border-top: 1px solid #b4b4b4;
        color: #5a5a5a;
      }
    }
  }
}
</style>