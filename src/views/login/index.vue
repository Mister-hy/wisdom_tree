<template>
  <div class="loginMain">
    <h1>智慧服务平台</h1>
    <div class="main-agileinfo">
      <h2>欢迎登录</h2>
      <el-form :model="LoginruleForm">
        <el-form-item prop="username">
          <div class="user">
            <el-input v-model="LoginruleForm.username" placeholder="请输入账号">
            </el-input>
            <span class="el-input__suffix">
              <span class="el-input__suffix-inner">
                <i class="el-input__icon el-icon-s-goods"></i>
              </span>
            </span>
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <div class="pwd">
            <el-input
              v-model="LoginruleForm.password"
              placeholder="请输入密码"
            ></el-input>
            <span class="el-input__suffix">
              <span class="el-input__suffix-inner">
                <i class="el-input__icon el-icon-s-goods"></i>
              </span>
            </span>
          </div>
        </el-form-item>
        <el-form-item prop="code">
          <div class="el-input--suffix">
            <el-input
              v-model="LoginruleForm.code"
              placeholder="请输入验证码"
              class="codeC"
            ></el-input>
            <!-- <el-image
              :src="ImgList"
              style="
                width: 200px;
                height: 40px;
                border-radius: 5px;
                margin-left: 10px;
                cursor: pointer;
              "
            /> -->
            <img :src="ImgList" alt="" class="imgC" @click="codeSelct">
          </div>
        </el-form-item>
        <el-button type="danger">立即登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { captcha } from "../../api/user";
export default {
  data() {
    return {
      ImgList: "",
      LoginruleForm: {
        username: "duck",
        password: "admin888",
        code: "",
        token: "",
      },
    };
  },
  mounted() {
    this.codeSelct();
  },
  methods: {
    async codeSelct() {
      const { data } = await captcha(this.LoginruleForm);
      console.log(data);
      this.ImgList = data.captchaImg;
      this.LoginruleForm.token = data.token;
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.loginMain {
  .el-button{
    width: 100%;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Verdana;
  background: url(../../assets/1.jpg) no-repeat 0 0;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
  h1 {
    text-align: center;
    font-size: 42px;
    margin-top: 50px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
  .main-agileinfo {
    margin: 10% auto 13%;
    width: 20%;
    h2 {
      color: #fff;
      font-size: 30px;
      margin-bottom: 30px;
    }
    .user {
      width: 100%;
      padding: 2px 2px 2px 2px;
      border-radius: 5px;
      background: hsla(0, 0%, 100%, 0.15);
      background: #fff;
      border: none;
      outline: none;
      font-size: 14px;
      margin-bottom: 20px;
      background: #fff url("../../assets/user-fill.png") no-repeat 412px 11px;
      .el-input__suffix {
        right: 5px;
        transition: all 0.3s;
        pointer-events: none;
        top: -8px;
        .el-input__suffix-inner {
          pointer-events: all;
        }
        .el-input__icon el-icon-s-goods {
          height: 100%;
          width: 25px;
          text-align: center;
          transition: all 0.3s;
          // line-height: 40px;
        }
      }
    }
    .pwd {
      width: 100%;
      padding: 2px 2px 2px 2px;
      border-radius: 5px;
      background: hsla(0, 0%, 100%, 0.15);
      background: #fff;
      border: none;
      outline: none;
      font-size: 14px;
      margin-bottom: 20px;
      background: #fff url("../../assets/密码（关）.png") no-repeat 412px 11px;
      .el-input__suffix {
        right: 5px;
        transition: all 0.3s;
        pointer-events: none;
        top: -8px;
        .el-input__suffix-inner {
          pointer-events: all;
        }
        .el-input__icon el-icon-s-goods {
          height: 100%;
          width: 25px;
          text-align: center;
          transition: all 0.3s;
          // line-height: 40px;
        }
      }
    }
    .el-form-item__content{
      overflow: hidden;
    }
    .codeC {
      width: 160px !important;
    }
    .imgC {
      width: 108px !important;
      float: right;
      height: 40px;
    }
  }
}
</style>
