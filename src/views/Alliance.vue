<template>
  <div class="alliance-page">
    <section class="page-hero">
      <div class="container">
        <h1>王者联盟</h1>
        <p>连接志同道合的伙伴，共建高质量社群</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <!-- 联盟介绍 -->
        <div class="intro-section">
          <div class="intro-card card">
            <h2>什么是王者联盟？</h2>
            <p>
              王者联盟是一个专注于AI时代个人成长和价值变现的高质量社群。
              在这里，我们不只是学习知识，更是连接资源、共创价值、互助成长。
            </p>
          </div>
        </div>

        <!-- 核心价值 -->
        <div class="values-section">
          <h2 class="section-title">核心价值</h2>
          <div class="values-grid">
            <div class="value-card card" v-for="item in values" :key="item.title">
              <el-icon :size="32" :color="item.color"><component :is="item.icon" /></el-icon>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 成员数据 -->
        <div class="member-section">
          <div class="member-stats card">
            <div class="member-stat">
              <div class="stat-num">500+</div>
              <div class="stat-desc">联盟成员</div>
            </div>
            <div class="member-stat">
              <div class="stat-num">50+</div>
              <div class="stat-desc">深度连接</div>
            </div>
            <div class="member-stat">
              <div class="stat-num">20+</div>
              <div class="stat-desc">合作项目</div>
            </div>
            <div class="member-stat">
              <div class="stat-num">98%</div>
              <div class="stat-desc">满意度</div>
            </div>
          </div>
        </div>

        <!-- 加入 CTA -->
        <div class="cta-section">
          <div class="cta-card card">
            <h2>加入王者联盟</h2>
            <p>如果你认同我们的价值观，欢迎加入我们一起成长</p>
            <el-button type="primary" size="large" round>
              <el-icon><Connection /></el-icon>
              申请加入
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { UserFilled, Trophy, TrendCharts, Connection } from '@element-plus/icons-vue'

const values = [
  {
    title: '深度连接',
    desc: '不只是点头之交，而是建立有价值的深度社交关系，实现资源互通。',
    icon: 'UserFilled',
    color: '#007bff'
  },
  {
    title: '共同成长',
    desc: '一个人走得快，一群人走得远。在群体力量下突破个人天花板。',
    icon: 'TrendCharts',
    color: '#28a745'
  },
  {
    title: '价值共创',
    desc: '从学习到实践，从实践到合作，真正实现个人价值的最大化。',
    icon: 'Trophy',
    color: '#fd7e14'
  },
  {
    title: '资源共享',
    desc: '工具、模板、渠道、人脉——联盟成员优先获取独家资源。',
    icon: 'Connection',
    color: '#6f42c1'
  }
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #6f42c1, #5a32a3);
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

.intro-section {
  margin-bottom: 60px;
}

.intro-card {
  text-align: center;
  padding: 40px;
}

.intro-card h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
}

.intro-card p {
  font-size: 16px;
  color: #666;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
}

.values-section {
  margin-bottom: 60px;
  text-align: center;
}

.values-section .section-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}

.value-card {
  text-align: center;
  padding: 30px 20px;
}

.value-card h3 {
  font-size: 18px;
  margin: 16px 0 10px;
  color: #333;
}

.value-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.member-section {
  margin-bottom: 60px;
}

.member-stats {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  text-align: center;
}

.member-stat .stat-num {
  font-size: 32px;
  font-weight: 800;
  color: #007bff;
}

.member-stat .stat-desc {
  font-size: 14px;
  color: #999;
  margin-top: 4px;
}

.cta-section {
  text-align: center;
}

.cta-card {
  padding: 50px 30px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
}

.cta-card h2 {
  font-size: 28px;
  margin-bottom: 12px;
  color: #fff;
}

.cta-card p {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .member-stats {
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
