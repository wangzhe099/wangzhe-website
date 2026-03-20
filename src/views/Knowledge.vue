<template>
  <div class="knowledge-page">
    <section class="page-hero">
      <div class="container">
        <h1>知识库</h1>
        <p>系统化整理核心知识，打造你的专属知识体系</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <!-- 分类标签 -->
        <div class="category-tabs">
          <el-radio-group v-model="activeCategory" size="default">
            <el-radio-button label="all">全部</el-radio-button>
            <el-radio-button label="ai">AI 技术</el-radio-button>
            <el-radio-button label="marketing">营销增长</el-radio-button>
            <el-radio-button label="brand">个人品牌</el-radio-button>
            <el-radio-button label="tools">效率工具</el-radio-button>
          </el-radio-group>
        </div>

        <!-- 文章列表 -->
        <div class="articles-grid">
          <div class="article-card card" v-for="article in filteredArticles" :key="article.title">
            <div class="article-tag" :style="{ backgroundColor: article.tagColor }">{{ article.tag }}</div>
            <h3>{{ article.title }}</h3>
            <p>{{ article.desc }}</p>
            <div class="article-meta">
              <span>{{ article.date }}</span>
              <span>{{ article.readTime }}</span>
            </div>
          </div>
        </div>

        <!-- 加载更多 -->
        <div class="load-more">
          <el-button type="primary" plain round>加载更多</el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Article {
  title: string
  desc: string
  tag: string
  tagColor: string
  category: string
  date: string
  readTime: string
}

const activeCategory = ref('all')

const articles = ref<Article[]>([
  {
    title: 'ChatGPT 高级提示词工程完全指南',
    desc: '从零掌握 Prompt Engineering 的核心技巧，让你的AI输出质量提升10倍。涵盖角色设定、思维链、少样本学习等高级技巧。',
    tag: 'AI 技术',
    tagColor: '#007bff',
    category: 'ai',
    date: '2026-03-18',
    readTime: '15 分钟'
  },
  {
    title: 'SEO 优化的 20 个实战技巧',
    desc: '从关键词研究到内容优化，从外链建设到技术SEO，20个经过验证的优化策略帮助你提升搜索排名。',
    tag: '营销增长',
    tagColor: '#28a745',
    category: 'marketing',
    date: '2026-03-15',
    readTime: '12 分钟'
  },
  {
    title: '个人IP定位的5步法则',
    desc: '明确你的差异化优势，找到你的目标受众，建立你的内容矩阵。5步帮你完成个人品牌定位。',
    tag: '个人品牌',
    tagColor: '#6f42c1',
    category: 'brand',
    date: '2026-03-12',
    readTime: '10 分钟'
  },
  {
    title: 'Notion + AI 打造高效工作流',
    desc: '如何用 Notion 搭配 AI 工具实现自动化知识管理、项目跟踪和内容创作。',
    tag: '效率工具',
    tagColor: '#fd7e14',
    category: 'tools',
    date: '2026-03-08',
    readTime: '8 分钟'
  },
  {
    title: 'AI Agent 开发入门到实战',
    desc: '从 AutoGPT 到 LangChain，系统学习AI Agent开发，打造属于你的智能助手。',
    tag: 'AI 技术',
    tagColor: '#007bff',
    category: 'ai',
    date: '2026-03-05',
    readTime: '20 分钟'
  },
  {
    title: '内容营销的黄金公式',
    desc: '标题吸引 + 开头留人 + 中间提供价值 + 结尾引导行动 = 一篇爆款内容的完整框架。',
    tag: '营销增长',
    tagColor: '#28a745',
    category: 'marketing',
    date: '2026-03-01',
    readTime: '10 分钟'
  }
])

const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') return articles.value
  return articles.value.filter(a => a.category === activeCategory.value)
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
  padding: 60px 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 12px;
}

.page-hero p {
  font-size: 18px;
  opacity: 0.85;
}

.page-content {
  padding: 60px 0;
}

.category-tabs {
  text-align: center;
  margin-bottom: 40px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.article-card {
  position: relative;
}

.article-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 14px;
}

.article-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.4;
}

.article-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.article-meta {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: #999;
}

.load-more {
  text-align: center;
  margin-top: 40px;
}
</style>
