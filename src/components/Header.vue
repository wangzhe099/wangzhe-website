<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo" @click="$router.push('/')">
        <div class="avatar">
          <img src="https://api.dicebear.com/7.x/initials/svg?seed=WZ&backgroundColor=007bff&textColor=ffffff&fontSize=40" alt="王者" />
        </div>
        <span class="logo-text">王者</span>
      </div>
      <el-menu
        :default-active="activeMenu"
        mode="horizontal"
        :ellipsis="false"
        class="nav-menu"
        @select="handleSelect"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/knowledge">知识库</el-menu-item>
        <el-menu-item index="/writing">短文写作</el-menu-item>
        <el-menu-item index="/ai-practice">AI落地实战</el-menu-item>
        <el-menu-item index="/alliance">王者联盟</el-menu-item>
        <el-menu-item index="/planet">加入星球</el-menu-item>
        <el-menu-item index="/about">关于我</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const activeMenu = computed(() => route.path)

const handleSelect = (index: string) => {
  router.push(index)
}
</script>

<style scoped>
.site-header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  flex-shrink: 0;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #007bff;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.nav-menu {
  border-bottom: none !important;
}

.nav-menu .el-menu-item {
  font-size: 15px;
  color: #333 !important;
  border-bottom: 2px solid transparent !important;
  height: 64px;
  line-height: 64px;
}

.nav-menu .el-menu-item.is-active {
  color: #007bff !important;
  border-bottom: 2px solid #007bff !important;
  font-weight: 600;
}

.nav-menu .el-menu-item:hover {
  color: #007bff !important;
  background-color: transparent !important;
}

@media (max-width: 900px) {
  .nav-menu .el-menu-item {
    font-size: 13px;
    padding: 0 10px;
  }
}
</style>
