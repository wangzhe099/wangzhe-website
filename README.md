# 王者个人IP网站

基于 Vue 3 + Vite + Element Plus + TypeScript 构建的个人品牌网站。

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue 3 | ^3.5.13 | 前端框架 |
| Vite | ^6.2.0 | 构建工具 |
| Element Plus | ^2.9.1 | UI 组件库 |
| TypeScript | ~5.7.2 | 类型安全 |
| Vue Router | ^4.5.0 | 路由管理 |

## 网站结构

### 导航栏（7页）

| 序号 | 页面 | 路由 | 说明 |
|------|------|------|------|
| 1 | 首页 | `/` | Hero区 + 核心栏目 + 最新动态 |
| 2 | 知识库 | `/knowledge` | 分类筛选 + 文章卡片列表 |
| 3 | 短文写作 | `/writing` | 时间轴样式短文展示 |
| 4 | AI落地实战 | `/ai-practice` | 案例统计 + 实战案例卡片 |
| 5 | 王者联盟 | `/alliance` | 社群介绍 + 核心价值 + 成员数据 |
| 6 | 加入星球 | `/planet` | 星球介绍 + 会员价格 + 成员评价 |
| 7 | 关于我 | `/about` | 个人介绍 + 专业领域 + 成长轨迹 |

### 底部区域

- **快速链接**：7个页面入口
- **成长日记**：Element Plus 表格，每页3条，支持翻页，点击行显示蓝色边框高亮
- **备案号**：陕ICP备2025081631号（链接到工信部备案查询）

## 设计规范

### 品牌色

- **主色调**：`#007bff`（蓝色）
- **辅助色**：`#28a745`（绿色）、`#fd7e14`（橙色）、`#6f42c1`（紫色）、`#e83e8c`（粉色）

### 交互细节

- 导航菜单：激活项显示蓝色文字 + 蓝色底边框
- 导航头像：圆形头像 + 蓝色边框
- 表格行点击：蓝色边框高亮（`#007bff`）
- 卡片悬停：上浮 + 阴影增强效果

### SEO & 数据统计

| 功能 | 配置 |
|------|------|
| 百度站长验证 | `<meta name="baidu-site-verification" content="codeva-lzjCopWcaS" />` |
| 百度统计 | `hm.js?03f50d020e5bff92778cc8737db19b57` |

## 项目文件结构

```
wangzhe-website/
├── public/
│   └── vite.svg              # 网站图标
├── src/
│   ├── components/
│   │   ├── Header.vue        # 顶部导航栏（含头像）
│   │   └── Footer.vue        # 底部（快速链接+成长日记+备案号）
│   ├── router/
│   │   └── index.ts          # 路由配置（Hash模式）
│   ├── views/
│   │   ├── Home.vue          # 首页
│   │   ├── Knowledge.vue     # 知识库
│   │   ├── Writing.vue       # 短文写作
│   │   ├── AiPractice.vue    # AI落地实战
│   │   ├── Alliance.vue      # 王者联盟
│   │   ├── Planet.vue        # 加入星球
│   │   └── About.vue         # 关于我
│   ├── App.vue               # 根组件
│   ├── main.ts               # 入口文件
│   ├── style.css             # 全局样式
│   └── env.d.ts              # TypeScript 类型声明
├── index.html                # HTML 入口（含百度统计代码）
├── package.json
├── tsconfig.json
├── vite.config.ts            # Vite 配置（esbuild压缩 + 代码分割）
└── README.md
```

## 构建优化

- **代码分割**：Element Plus 和 Vue 相关库独立打包
- **压缩方式**：esbuild（默认，避免 terser 安装问题）
- **构建目标**：ES2015（兼容性）
- **路由模式**：Hash 路由（适配 GitHub Pages）

## 开发命令

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署

GitHub 仓库：https://github.com/wangzhe099/wangzhe-website.git

部署方式：GitHub Pages（需在仓库 Settings 中开启）
