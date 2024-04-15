<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <el-form
        :model="formRegister"
        ref="formRegisterRef"
        size="large"
        autocomplete="off"
        v-if="isRegister"
      >
        <el-form-item>
          <h2>注册</h2>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formRegister.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <i-ep-user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formRegister.password" placeholder="请输入密码">
            <template #prefix>
              <el-icon>
                <i-ep-lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formRegister.repassword" placeholder="请再次输入密码">
            <template #prefix>
              <el-icon>
                <i-ep-lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;">注册</el-button>
        </el-form-item>
        <el-form-item>
          <p class="to-register" @click="goLogin">登录</p>
        </el-form-item>
      </el-form>
      <el-form v-else :model="formLogin" ref="formRef" size="large" autocomplete="off">
        <el-form-item>
          <h2>登录</h2>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formLogin.username" placeholder="请输入用户名" prop="username">
            <template #prefix>
              <el-icon>
                <i-ep-user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formLogin.password" placeholder="请输入登录密码" prop="password">
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
          <el-button type="primary" style="width: 100%;">登录</el-button>
        </el-form-item>
        <el-form-item>
          <p class="to-register" @click="goRegister">注册</p>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script setup>
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
const goRegister = () => {
  isRegister.value = true;
};
const goLogin = () => {
  isRegister.value = false;
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

