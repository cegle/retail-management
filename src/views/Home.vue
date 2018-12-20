<template>
  <div class="container">
    <header>
      <div class="logo">LOGO</div>
      <div class="nav">
        <div
          @click="switchNav(item.path)"
          :class="index == activeNav ? 'active': ''"
          class="nav-item"
          v-for="(item,index) in nav"
          :key="index"
        >{{item.title}}</div>
      </div>
      <div class="flex-1">
        <div class="user">
          <i class="icon-yonghu2"></i>
          <span>admin</span>
        </div>
        <i class="icon-shouye" title="回到首页" @click="linkIndex"></i>
        <i class="icon-yujing"></i>
        <i class="icon-exit" @click="loginOut" title="退出"></i>
      </div>
    </header>
    <div class="main">
      <div class="aside">
        <el-menu
          background-color="#eaedf1"
          text-color="#666666"
          active-text-color="rgba(26, 188, 156, 0.8)"
          router="true"
          v-for="(item,index) in menu"
          :key="index"
        >
          <el-menu-item-group>
            <template slot="title">{{item.sub}}</template>
            <el-menu-item v-for="(child,idx) in item.menu" :key="idx" :index="child.path">
              <template slot="title">{{'• '+child.name}}</template>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import nav from "../utils/nav.js";
import { mapState } from "vuex";
export default {
  name: "home",
  computed: {
    activeNav() {
      return this.$store.getters.activeNav;
    },
    menu() {
      return nav[this.$store.getters.activeNav].child;
    },
    userInfo() {
      return JSON.parse(this.$store.getters.userInfo);
    }
  },
  data() {
    return {
      nav: nav,
      loginData: [{}, {}]
    };
  },
  mounted() {
    this.$http
      .post(
        "merchant/get_merchant_login_info_list",
        {
          currentPage: 1,
          pageSize: 10,
          orderBy: "operate_time desc"
        },
        {
          type: "form"
        }
      )
      .then(res => {
        this.loginData = res.list;
      });
  },
  methods: {
    switchNav(path) {
      this.$router.push(path);
    },
    loginOut() {
      this.$router.push("/");
      this.$store.commit("CLEAR_USERINFO");
    },
    linkIndex() {
      this.$route.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
$header-bg-color: rgba(70, 76, 91, 0.898039215686275);
$aside-bg-color: rgba(234, 237, 241, 1);
header {
  min-width: 1240px;
  width: 100%;
  background-color: $header-bg-color;
  height: 50px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  .logo {
    font-size: 36px;
    margin-left: 168px;
    margin-top: 4px;
  }
  .nav {
    display: flex;
    margin-left: 59px;
    .nav-item {
      width: 60px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
    }
    .nav-item:hover {
      color: #ccc;
    }
  }
  .flex-1 {
    display: flex;
    margin-left: 200px;
    i {
      font-size: 29px;
    }
    .user {
      display: flex;
      margin-right: 30px;
      .icon-yonghu2 {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 2px solid white;
        border-radius: 50%;
        margin-right: 20px;
        margin-top: 7px;
      }
      span {
        margin-top: 15px;
      }
    }
    .icon-shouye,
    .icon-yujing {
      margin: 10px 40px 0;
    }
    .icon-shouye {
      cursor: pointer;
    }
    .icon-exit {
      width: 30px;
      height: 30px;
      background-image: url("../assets/header/icon-exit.png");
      background-repeat: no-repeat;
      margin-top: 10px;
      margin-left: 30px;
      cursor: pointer;
    }
  }
}
.main {
  width: 100%;
  padding-top: 50px;
  display: flex;
  .aside {
    width: 180px;
    position: absolute;
    top: 50px;
    bottom: 0;
    background-color: $aside-bg-color;
    text-align: center;
  }
  .content {
    width: 100%;
    padding-left: 180px;
    display: flex;
    justify-content: center;
  }
}
</style>
<style lang="scss">
.main {
  .aside {
    .el-menu {
      .el-menu-item-group {
        ul {
          .el-menu-item {
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            border-top: 1px solid rgba(228, 228, 228, 1);
            padding-left: 30px;
          }
          .el-menu-item:hover,
          .el-menu-item:focus {
            // background-color: red;
          }
        }
        .el-menu-item-group__title {
          padding: 0 20px;
          font-size: 16px;
          height: 50px;
          line-height: 50px;
          background-color: rgba(242, 242, 242, 1);
        }
      }
    }
  }
}
</style>