<template>
  <div class="ai-practice-page">
    <section class="page-hero">
      <div class="container">
        <h1>AI落地实战</h1>
        <p>从理论到实践，真实案例与可复制的方法</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <!-- 案例统计 -->
        <div class="stats-bar">
          <div class="stat-item">
            <div class="stat-number">20+</div>
            <div class="stat-label">实战案例</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">工具测评</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5</div>
            <div class="stat-label">完整工作流</div>
          </div>
        </div>

        <!-- 案例列表 -->
        <div class="cases-grid">
          <div class="case-card card" v-for="item in cases" :key="item.title">
            <div class="case-header">
              <el-tag :type="item.difficulty === '入门' ? 'success' : item.difficulty === '进阶' ? 'warning' : 'danger'" effect="dark">
                {{ item.difficulty }}
              </el-tag>
              <span class="case-tool">{{ item.tool }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="case-footer">
              <span class="case-date">{{ item.date }}</span>
              <el-button type="primary" text size="small">查看详情 →</el-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Case {
  title: string
  desc: string
  tool: string
  difficulty: string
  date: string
}

const cases = ref<Case[]>([
  {
    title: '用 ChatGPT 批量生成小红书爆款文案',
    desc: '通过精心设计的提示词模板，5分钟生成10篇高质量小红书笔记文案，实测涨粉效果显著。',
    tool: 'ChatGPT',
    difficulty: '入门',
    date: '2026-03-18'
  },
  {
    title: '搭建AI智能客服，解放80%人工时间',
    desc: '基于大模型API搭建企业智能客服系统，实现7×24小时自动回复，准确率超过90%。',
    tool: 'GPT-4 + Dify',
    difficulty: '进阶',
    date: '2026-03-12'
  },
  {
    title: 'AI+自动化：从数据采集到报告生成全流程',
    desc: '用 Python + AI 大模型实现数据自动采集、分析和报告生成，将3小时的工作缩短到15分钟。',
    tool: 'Python + LangChain',
    difficulty: '进阶',
    date: '2026-03-05'
  },
  {
    title: '用 Midjourney 打造产品展示图',
    desc: '从零学会 Midjourney 提示词，批量生成专业级产品展示图，节省数万元拍摄费用。',
    tool: 'Midjourney',
    difficulty: '入门',
    date: '2026-02-28'
  },
  {
    title: '构建个人知识库 AI 搜索系统',
    desc: '将个人积累的文档、笔记向量化存储，搭建专属AI搜索引擎，秒级找到任何知识。',
    tool: 'RAG + 向量数据库',
    difficulty: '高级',
    date: '2026-02-20'
  }
])
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #fd7e14, #e8590c);
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

.stats-bar {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 50px;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 800;
  color: #007bff;
}

.stat-label {
  font-size: 14px;
  color: #999;
  margin-top: 4px;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.case-card {
  position: relative;
}

.case-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.case-tool {
  font-size: 13px;
  color: #999;
  background: #f5f5f5;
  padding: 2px 10px;
  border-radius: 12px;
}

.case-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.4;
}

.case-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.case-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.case-date {
  font-size: 13px;
  color: #999;
}

@media (max-width: 768px) {
  .stats-bar {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
