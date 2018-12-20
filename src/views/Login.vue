<template>
  <div class="login">
    <div class="login_bg"></div>
    <div class="login_content">
      <el-form ref="ruleForm2">
        <h3 class="title">后台业务管理系统</h3>
        <el-form-item>
          <el-input type="text" v-model="form.loginName" placeholder="请输入用户名称" clearable>
            <i slot="prefix" class="icon-yonghu2"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form.loginPassword" placeholder="请输入登录密码" clearable>
            <i slot="prefix" class="icon-mima"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="font-size:20px;" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import CONFIG from "../utils/config.js";
export default {
  name: "login",
  data() {
    return {
      form: {
        loginName: "13932493200",
        loginPassword: "000000"
      },
      config: CONFIG
    };
  },
  methods: {
    login() {
      if (!this.form.loginName) {
        this.$msgWar("请输入手机号");
        return;
      }
      if (!CONFIG.reg.phone.test(this.form.loginName)) {
        this.$msgWar("请输入正确的手机号");
        return;
      }
      if (!this.form.loginPassword) {
        this.$msgWar("请输入密码");
        return;
      }
      this.$http
        .post("merchant/login", this.form, {
          type: "form"
        })
        .then(res => {
          this.$store.commit("SET_USERINFO", JSON.stringify(res));
          this.$msgSuc("登录成功");
          setTimeout(() => {
            this.$router.push("/home");
          }, 500);
        })
        .catch(err => {
          this.$msgErr(err.msg);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  .login_bg {
    width: 100%;
    height: 220px;
    background-color: rgba(26, 188, 156, 1);
    background-image: url("../assets/login/u2154_state0.png");
    position: fixed;
    top: 50%;
    left: 0;
    background-position: right top;
    background-attachment: scroll;
    background-repeat: no-repeat;
    overflow: hidden;
    margin-top: -110px;
  }
  .login_content {
    width: 350px;
    height: 420px;
    text-align: center;
    background-color: #ffffff;
    border-radius: 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -210px;
    box-shadow: 0px 0px 15px #bbbbbb;
    h3.title {
      margin-top: 104px;
      font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
      font-weight: 700;
      font-style: normal;
      font-size: 24px;
      color: #1abc9c;
      line-height: 28px;
    }
    i {
      position: relative;
      top: 4px;
      left: 24px;
    }
  }
}
</style>
<style lang="scss">
.el-input__inner,
.el-button--primary {
  width: 300px;
  height: 50px;
  position: relative;
}
.el-input__inner:focus {
  border: 2px solid #1abc9c;
}
.el-button--primary,
.el-button--primary:hover {
  background-color: #1abc9c;
  border-color: #1abc9c;
}
</style>