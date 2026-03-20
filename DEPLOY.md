# Vue 3 项目部署到 GitHub Pages + 自定义域名完整踩坑记录

## 项目概述

**项目名称**：个人 IP 网站（Vue 3 + Vite + Element Plus + TypeScript）

**技术栈**：
- Vue 3.5.13
- Vite 6.x
- Element Plus
- TypeScript
- Vue Router（hash 模式）

**部署目标**：
- GitHub Pages 静态托管
- 自定义域名：wangzhe099.xyz

---

## 部署流程

### 一、项目配置

#### 1. Vite 配置文件 `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',  // 关键：相对路径，适配 GitHub Pages
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('element-plus')) return 'element-plus'
          if (id.includes('vue') || id.includes('vue-router') || id.includes('pinia')) return 'vue-vendor'
        }
      }
    }
  }
})
```

**关键点**：
- `base: './'` - 使用相对路径，否则 GitHub Pages 会加载资源失败
- `manualChunks` - 代码分割，优化加载性能

#### 2. Vue Router 配置 `src/router/index.ts`

```typescript
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),  // 使用 hash 模式
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
```

**关键点**：
- 使用 `createWebHashHistory()` 而不是 `createWebHistory()`
- GitHub Pages 不支持 HTML5 History 模式，必须用 hash 模式（URL 带 #）

---

### 二、创建 GitHub Actions 工作流

#### 文件位置：`.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**关键点**：
- 使用 `actions/deploy-pages@v4` 官方 Actions
- 需要配置 `pages: write` 和 `id-token: write` 权限
- `workflow_dispatch` 允许手动触发部署

---

### 三、配置自定义域名

#### 步骤 1：创建 CNAME 文件

**文件位置**：`public/CNAME`

```
wangzhe099.xyz
```

**说明**：
- 文件放在 `public` 目录，构建时会自动复制到 `dist` 目录
- GitHub Pages 读取此文件识别自定义域名
- 只写根域名即可，不需要带 `www`

#### 步骤 2：配置 DNS 解析（阿里云）

**登录阿里云控制台 → 云解析 DNS → 找到域名 → 解析设置**

添加两条 CNAME 记录：

| 记录类型 | 主机记录 | 记录值 |
|---------|---------|-------|
| CNAME | @ | wangzhe099.github.io |
| CNAME | www | wangzhe099.github.io |

**重要**：
- 不能用 A 记录，必须用 CNAME
- `@` 表示根域名（wangzhe099.xyz）
- `www` 表示 www 子域名
- 记录值必须是 `你的 GitHub 用户名.github.io`

#### 步骤 3：在 GitHub Pages 设置中添加域名

**GitHub 仓库 → Settings → Pages → Custom domain**

1. 在 Custom domain 输入框输入：`wangzhe099.xyz`
2. 点击 Save
3. GitHub 会自动验证域名并申请 SSL 证书
4. 等待 DNS 检查通过（显示绿色对勾）
5. 等待 HTTPS 证书自动配置好（几分钟到几小时）

---

## 踩坑记录

### 坑 1：部署后网站空白

**现象**：访问 GitHub Pages 默认域名，页面一片空白

**原因**：
- Vite 默认 `base` 是 `/`，但在 GitHub Pages 上需要相对路径
- 静态资源路径错误，JS 和 CSS 加载失败

**解决方法**：
- 在 `vite.config.ts` 中设置 `base: './'`
- 使用相对路径加载资源

---

### 坑 2：路由刷新 404

**现象**：刷新页面或直接访问路由路径时出现 404

**原因**：
- GitHub Pages 不支持 HTML5 History 模式
- 使用 `createWebHistory()` 会导致路由丢失

**解决方法**：
- 改用 `createWebHashHistory()`
- URL 会变成 `/#/knowledge` 这种带 # 的形式

---

### 坑 3：Git 提交中文乱码

**现象**：`git commit` 时报错 `pathspec did not match any file`

**原因**：Windows PowerShell 中文编码问题

**解决方法**：
- 使用英文提交信息：`git commit -m "add cname"`
- 避免使用中文

---

### 坑 4：GitHub Actions 部署失败

**现象**：Actions 报错权限不足或部署失败

**原因**：未配置必要的权限

**解决方法**：
在 `.github/workflows/deploy.yml` 中添加：
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

---

### 坑 5：自定义域名 HTTPS 证书错误

**现象**：访问自定义域名显示证书无效

**原因**：
- GitHub Pages 自动申请 SSL 证书需要时间
- 或者 DNS 解析未生效

**解决方法**：
- 等待 DNS 生效（5-10 分钟）
- 在 GitHub Pages 设置中确认 Custom domain 已添加
- GitHub 会自动配置 HTTPS，等待几分钟到几小时
- 临时可以先用 HTTP 访问测试

---

### 坑 6：阿里云 DNS 配置界面问题

**现象**：在阿里云轻量应用服务器控制台只能添加 A 记录，找不到 CNAME 选项

**原因**：在错误的控制台页面

**解决方法**：
- 不要在「轻量应用服务器」→「域名」→「解析」那里配置
- 要去「云解析 DNS」控制台
- 搜索「云解析 DNS」进入专门的 DNS 管理页面

---

### 坑 7：Git push 被拒绝

**现象**：`git push origin main` 报错 `rejected: non-fast-forward`

**原因**：本地分支落后于远程分支

**解决方法**：
```bash
git pull --rebase origin main
git push origin main
```

---

### 坑 8：CNAME 文件位置错误

**现象**：GitHub Pages 无法识别自定义域名

**原因**：CNAME 文件放在了错误的位置

**解决方法**：
- CNAME 必须放在 `public/` 目录
- 这样 `npm run build` 后会自动复制到 `dist/` 目录
- GitHub Pages 从 `dist/` 读取文件

---

## 完整部署命令清单

```bash
# 1. 安装依赖
npm install

# 2. 本地构建测试
npm run build

# 3. 提交代码
git add .
git commit -m "update"

# 4. 推送到 GitHub（触发自动部署）
git push origin main

# 5. 如果本地落后，先拉取再推送
git pull --rebase origin main
git push origin main

# 6. 如果需要查看 Actions 部署状态
# 在 GitHub 仓库页面 → Actions 标签查看
```

---

## 验证部署成功的标志

### 1. GitHub Actions 状态
- 在仓库的 Actions 页面，最新的 workflow 显示 ✅ Success

### 2. GitHub Pages 状态
- Settings → Pages 页面显示：
  - Source: `GitHub Actions`
  - Custom domain: `wangzhe099.xyz`
  - DNS 检查：✅ 通过
  - HTTPS：✅ 已启用（可能需要等待）

### 3. 网站可访问
- `https://wangzhe099.xyz` 能正常打开
- 页面内容正常显示
- 导航栏点击能正常跳转
- 刷新页面不会 404

---

## 常见问题 FAQ

### Q1：更新网站后多久能看到变化？
A：推送到 GitHub 后，Actions 自动部署需要 1-2 分钟，然后等待 DNS 传播（几秒到几分钟）

### Q2：如何回滚到上一个版本？
A：在 GitHub 仓库找到之前的 commit，点击右侧的 `< > Code` 按钮，然后再次触发 Actions 部署

### Q3：可以绑定多个域名吗？
A：可以，CNAME 文件只能写一个，但可以通过多个域名 DNS 指向同一个 GitHub Pages

### Q4：为什么有时候打不开网站？
A：
- 检查 GitHub Actions 是否部署成功
- 检查 DNS 解析是否生效
- 清除浏览器缓存（Ctrl + F5）
- 等待 HTTPS 证书配置完成

### Q5：如何查看网站访问统计？
A：可以在代码中集成百度统计、Google Analytics 等（本项目中已集成百度统计）

---

## 项目结构

```
wangzhe-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 工作流
├── public/
│   ├── CNAME                   # 自定义域名配置
│   ├── .nojekyll               # 告诉 GitHub Pages 不要用 Jekyll 处理
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Knowledge.vue
│   │   ├── Writing.vue
│   │   ├── AiPractice.vue
│   │   ├── Alliance.vue
│   │   ├── Planet.vue
│   │   └── About.vue
│   ├── router/
│   │   └── index.ts            # 路由配置（hash 模式）
│   ├── App.vue
│   └── main.ts
├── index.html                  # 入口 HTML
├── package.json
├── vite.config.ts              # Vite 配置（base: './'）
├── tsconfig.json
└── DEPLOY.md                   # 本文档
```

---

## 参考资料

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vitejs.dev/guide/build.html)
- [Vue Router 4 文档](https://router.vuejs.org/)
- [阿里云 DNS 解析文档](https://help.aliyun.com/document_detail/29707.html)

---

## 总结

部署 Vue 3 项目到 GitHub Pages 并绑定自定义域名，关键要点：

1. ✅ Vite 配置 `base: './'` 使用相对路径
2. ✅ Vue Router 使用 hash 模式
3. ✅ GitHub Actions 自动化部署
4. ✅ public/CNAME 配置自定义域名
5. ✅ DNS 解析使用 CNAME 指向 `username.github.io`
6. ✅ GitHub Pages 设置中添加自定义域名
7. ✅ 等待 HTTPS 证书自动配置

整个过程虽然有一些坑，但按照本文档的步骤，就能顺利完成部署！🚀
