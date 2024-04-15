<template>
  <el-container>
    <el-aside width="200px">
      <div class="el-aside__logo"></div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#232323"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        text-color="#fff"
        router
      >
        <el-menu-item index="/article/channel">
          <el-icon><i-ep-menu /></el-icon>
          <span>文章分类</span>
        </el-menu-item>
        <el-menu-item index="/article/manage">
          <el-icon><i-ep-document /></el-icon>
          <span>文章管理</span>
        </el-menu-item>
        <el-sub-menu index="/user">
          <template #title>
            <el-icon><i-ep-user-filled /></el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="/user/profile">
            <el-icon><i-ep-user /></el-icon>
            <span>基本资料</span>
          </el-menu-item>
          <el-menu-item index="/user/avatar">
            <el-icon><i-ep-avatar /></el-icon>
            <span>更换头像</span>
          </el-menu-item>
          <el-menu-item index="/user/password">
            <el-icon><i-ep-edit /></el-icon>
            <span>重置密码</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header> </el-header>
      <el-main>
        <el-card class="page-container">
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade" mode="out-in">
              <component :is="Component" :key="route.path" />
            </transition>
          </router-view>
        </el-card>
      </el-main>
      <el-footer>高峰的后台管理系统V3 ©2024 Created by gaofeng222</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-aside__logo {
  height: 120px;
  background: url('@/assets/images/logo-d1.png') no-repeat center/120px auto;
}
.el-container {
  .el-aside {
    background: #232323;
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    height: 60px;
    background: #fff;
  }
  .el-main {
    .page-container {
      min-height: 100%;
      box-sizing: border-box;
    }
  }
  .el-footer {
    text-align: center;
  }
}
</style>
