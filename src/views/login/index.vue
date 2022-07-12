<template>
  <div class="loginMain">
    <h1>智慧服务平台</h1>
    <div class="main-agileinfo">
      <h2>欢迎登录</h2>
      <el-form :model="LoginruleForm" :rules="rules" ref="from">
        <el-form-item prop="username">
          <div class="user">
            <el-input
              v-model.trim="LoginruleForm.username"
              placeholder="请输入账号"
              suffix-icon="el-icon-user-solid"
            >
            </el-input>
            <!-- <span class="el-input__suffix">
              <span class="el-input__suffix-inner">
                <i class="el-input__icon el-icon-s-goods"></i>
              </span>
            </span> -->
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <div class="pwd">
            <el-input
              v-model.tirm="LoginruleForm.password"
              placeholder="请输入密码"
              show-password
              suffix-icon="el-icon-s-goods"
            ></el-input>
            <!-- <span class="el-input__suffix">
              <span class="el-input__suffix-inner">
                <i class="el-input__icon el-icon-s-goods"></i>
              </span>
            </span> -->
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
            <img
              :src="ImgList"
              alt=""
              class="imgC"
              @click.stop="handleSelect"
            />
          </div>
        </el-form-item>
        <el-button
          type="danger"
          @click="handleUserSubmit"
          :loading="lodingStatus"
          >{{ lodingStatus ? "登录中..." : "登录成功" }}</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { captcha, login } from "../../api/user";
// import { mapActions } from "vuex";
export default {
  data() {
    return {
      // loding状态
      lodingStatus: false,
      // 验证码
      ImgList: "",
      // form表单数据
      LoginruleForm: {
        username: "duck",
        password: "admin888",
        code: "",
        token: "",
      },
      // rules表单校验
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.handleCodeShow();
  },
  methods: {
    /**
     * 调用验证码接口
     */
    async handleCodeShow() {
      const res = await captcha();
      // console.log(res);
      this.ImgList = res.data.captchaImg;
      this.LoginruleForm.token = res.data.token;
      // console.log(this.LoginruleForm.token);
    },
    /**
     * 验证码切换刷新
     */
    handleSelect() {
      this.LoginruleForm.code = "";
      this.handleCodeShow();
    },
    /**
     * 登录表单校验
     */
    async handleUserSubmit() {
      this.$refs.from.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin();
        }
      });
    },
    /**
     * 登录提交
     */
    async handleSubmitLogin() {
      try {
        const token = await login(this.LoginruleForm);
        // console.log(token);
        if (!token) return;
        this.$store.dispatch("setLogin", login);
        this.$notify({ title: "提示", message: "登录成功", type: "success" });
        this.lodingStatus = true;
        await this.$router.push("/");
      } catch (err) {
        console.log(err);
      } finally {
        this.lodingStatus = false;
      }
    },
    /**
     * 存到vuex
     */
    // ...mapActions({
    //   login: "/user/login",
    // }),
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.loginMain {
  .el-button {
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
    .el-form-item__content {
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
