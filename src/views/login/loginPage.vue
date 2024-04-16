<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form
        :model="formRegister"
        ref="formRegisterRef"
        size="large"
        autocomplete="off"
        :rules="rulesRegister"
        v-if="isRegister"
        @keyup.enter="registerHandler"
      >
        <el-form-item>
          <h2>注册</h2>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model.trim="formRegister.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <i-ep-user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="formRegister.password"
            placeholder="请输入密码"
            type="password"
            show-password
          >
            <template #prefix>
              <el-icon>
                <i-ep-lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            v-model.trim="formRegister.repassword"
            placeholder="请再次输入密码"
            type="password"
            show-password
          >
            <template #prefix>
              <el-icon>
                <i-ep-lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;" @click="registerHandler">注册</el-button>
        </el-form-item>
        <el-form-item>
          <p class="to-register" @click="goLogin">登录</p>
        </el-form-item>
      </el-form>
      <el-form
        v-else
        :model="formLogin"
        :rules="rulesRegister"
        ref="formLoginRef"
        size="large"
        autocomplete="off"
        @keyup.enter="loginHandler"
      >
        <el-form-item>
          <h2>登录</h2>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model.trim="formLogin.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <i-ep-user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model.trim="formLogin.password" placeholder="请输入登录密码">
            <template #prefix>
              <el-icon>
                <i-ep-lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="tips">
            <el-checkbox v-model="formLogin.remember">记住我</el-checkbox>
            <el-button type="primary" link>忘记密码</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;" @click="loginHandler">登录</el-button>
        </el-form-item>
        <el-form-item>
          <p class="to-register" @click="goRegister">注册</p>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
import { userRegister, userLogin } from "@/api";
import { useUserStore } from "@/store/modules";
let isRegister = ref(false);
let formLogin = ref({
  username: "",
  password: "",
  remember: false
});
const formRegister = ref({
  username: "",
  password: "",
  repassword: ""
});
const validateConfirmPassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== formRegister.value.password) {
    callback(new Error("两次输入的密码不一致"));
  } else {
    callback();
  }
};
const rulesRegister = reactive({
  username: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    { min: 5, max: 10, message: "用户名长度为5~10", trigger: "blur" }
  ],
  password: [
    {
      required: true,
      message: "用户密码不能为空",
      trigger: "blur"
    },
    {
      pattern: /^\S{6,15}$/,
      message: "用户名长度至少为6-15位的非空字符",
      trigger: "blur"
    }
  ],
  repassword: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    { validator: validateConfirmPassword, trigger: "blur" }
  ]
});
const goRegister = () => {
  isRegister.value = true;
};
const goLogin = () => {
  isRegister.value = false;
};
const formRegisterRef = ref(null);
const registerHandler = async () => {
  await formRegisterRef.value.validate();
  //提交注册

  const res = await userRegister(formRegister.value);
  ElMessage.success(res.data.message);
  isRegister.value = false;
};
const formLoginRef = ref(null);
const router = useRouter();
const userStore = useUserStore();
const loginHandler = async () => {
  await formLoginRef.value.validate();
  const res = await userLogin(formLogin.value);
  userStore.setToken(res.data.token);
  ElMessage.success(res.data.message);
  router.replace("/");
};
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background: url("@/assets/images/logo2.png") no-repeat 70% center/240px auto,
      url("@/assets/images/login_bg.jpg") no-repeat center/cover;
    border-radius: 0 20px 20px 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .tips {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .to-register {
      color: #999;
      cursor: pointer;
    }
  }
}
</style>


