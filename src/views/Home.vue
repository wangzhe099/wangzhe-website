<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1>你好，我是<span class="highlight">王者</span></h1>
          <p class="hero-subtitle">AI 赋能 · 实战落地 · 个人品牌打造</p>
          <p class="hero-desc">
            专注AI技术与商业落地的深度实践者。通过知识分享和实战经验，
            帮助更多人拥抱AI时代，实现个人价值增长。
          </p>
          <div class="hero-actions">
            <el-button type="primary" size="large" round @click="$router.push('/knowledge')">
              <el-icon><Reading /></el-icon>
              探索知识库
            </el-button>
            <el-button size="large" round @click="$router.push('/about')">
              <el-icon><User /></el-icon>
              了解更多
            </el-button>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-avatar-wrapper">
            <div class="hero-avatar-ring"></div>
            <img
              src="https://api.dicebear.com/7.x/initials/svg?seed=WZ&backgroundColor=007bff&textColor=ffffff&fontSize=80"
              alt="王者"
              class="hero-avatar"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 特色栏目 -->
    <section class="features">
      <div class="container">
        <div class="section-title">
          <h2>核心栏目</h2>
          <p>聚焦AI落地实战，持续输出高质量内容</p>
        </div>
        <div class="features-grid">
          <div class="feature-card card" v-for="item in features" :key="item.title" @click="$router.push(item.link)">
            <div class="feature-icon" :style="{ backgroundColor: item.color + '15', color: item.color }">
              <el-icon :size="28"><component :is="item.icon" /></el-icon>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <span class="card-link">了解更多 →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新动态 -->
    <section class="latest-section">
      <div class="container">
        <div class="section-title">
          <h2>最新动态</h2>
          <p>保持学习，持续成长</p>
        </div>
        <div class="latest-grid">
          <div class="latest-card card" v-for="item in latestPosts" :key="item.title">
            <div class="latest-tag" :style="{ backgroundColor: item.color }">{{ item.tag }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <div class="latest-meta">
              <span><el-icon><Calendar /></el-icon> {{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Reading, User, Notebook, Edit, Monitor, Connection, Star } from '@element-plus/icons-vue'

const features = [
  {
    title: '知识库',
    desc: '系统化整理AI、营销、个人品牌等领域核心知识，打造你的专属知识体系。',
    icon: 'Notebook',
    color: '#007bff',
    link: '/knowledge'
  },
  {
    title: '短文写作',
    desc: '用简短的文字记录思考与洞察，碎片化阅读也能获得深度启发。',
    icon: 'Edit',
    color: '#28a745',
    link: '/writing'
  },
  {
    title: 'AI落地实战',
    desc: '从理论到实践，分享AI工具的真实应用案例和可复制的落地方法。',
    icon: 'Monitor',
    color: '#fd7e14',
    link: '/ai-practice'
  },
  {
    title: '王者联盟',
    desc: '连接志同道合的伙伴，共建高质量社群，一起成长、一起赚钱。',
    icon: 'Connection',
    color: '#6f42c1',
    link: '/alliance'
  },
  {
    title: '加入星球',
    desc: '深度内容首发地，与圈内高手交流，获取独家资料和一对一指导。',
    icon: 'Star',
    color: '#e83e8c',
    link: '/planet'
  }
]

const latestPosts = [
  {
    title: '2026年AI应用落地最值得关注的5个方向',
    desc: '从大模型到AI Agent，从自动化营销到智能客服，哪些方向最值得投入时间和精力？',
    tag: 'AI实战',
    date: '2026-03-18',
    color: '#fd7e14'
  },
  {
    title: '个人IP打造的底层逻辑',
    desc: '为什么有的人做自媒体一飞冲天，有的人折腾半年毫无起色？底层逻辑是关键。',
    tag: '个人品牌',
    date: '2026-03-15',
    color: '#007bff'
  },
  {
    title: '普通人如何用AI提升10倍工作效率',
    desc: '不需要懂编程，掌握这几个AI工具和工作流，你的效率可以翻10倍。',
    tag: '效率工具',
    date: '2026-03-10',
    color: '#28a745'
  }
]
</script>

<style scoped>
/* Hero */
.hero {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 50%, #003d80 100%);
  color: #fff;
  padding: 80px 0;
}

.hero-inner {
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
}

.highlight {
  color: #ffd700;
}

.hero-subtitle {
  font-size: 22px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.8;
  opacity: 0.8;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.hero-image {
  flex-shrink: 0;
}

.hero-avatar-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
}

.hero-avatar-ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 3px dashed rgba(255, 255, 255, 0.3);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.3);
}

/* Features */
.features {
  padding: var(--section-padding);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.feature-card {
  text-align: center;
  cursor: pointer;
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.feature-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.feature-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.card-link {
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
}

/* Latest Section */
.latest-section {
  padding: var(--section-padding);
  background: #fff;
}

.latest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.latest-card {
  position: relative;
  overflow: hidden;
}

.latest-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 14px;
}

.latest-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.4;
}

.latest-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.latest-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #999;
}

@media (max-width: 768px) {
  .hero-inner {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-text h1 {
    font-size: 28px;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-avatar-wrapper {
    width: 140px;
    height: 140px;
  }

  .hero-avatar {
    width: 140px;
    height: 140px;
  }
}
</style>
