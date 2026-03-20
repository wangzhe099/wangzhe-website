<template>
  <div class="about-page">
    <section class="page-hero">
      <div class="container">
        <div class="about-avatar">
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=WZ&backgroundColor=007bff&textColor=ffffff&fontSize=80"
            alt="王者"
          />
        </div>
        <h1>王者</h1>
        <p class="hero-tagline">AI赋能者 · 个人品牌教练 · 终身学习者</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <!-- 个人介绍 -->
        <div class="about-intro card">
          <h2>关于我</h2>
          <div class="intro-content">
            <p>
              你好，我是王者。一个在AI时代积极探索、持续实践的行动派。
            </p>
            <p>
              我相信，AI不是来取代人的，而是来帮助人释放更大潜力的。我的使命是帮助更多人理解AI、善用AI，在AI时代找到自己的定位，实现个人价值最大化。
            </p>
            <p>
              我的内容覆盖AI技术实战、个人品牌打造、营销增长策略等领域。所有内容都来自真实的实践经验，拒绝纸上谈兵。
            </p>
          </div>
        </div>

        <!-- 专业领域 -->
        <div class="skills-section">
          <h2 class="section-title">专业领域</h2>
          <div class="skills-grid">
            <div class="skill-card card" v-for="skill in skills" :key="skill.title">
              <el-icon :size="32" :color="skill.color"><component :is="skill.icon" /></el-icon>
              <h3>{{ skill.title }}</h3>
              <el-progress :percentage="skill.level" :color="skill.color" :stroke-width="8" />
            </div>
          </div>
        </div>

        <!-- 时间线 -->
        <div class="timeline-section">
          <h2 class="section-title">成长轨迹</h2>
          <div class="timeline">
            <div class="timeline-item" v-for="item in timeline" :key="item.year">
              <div class="timeline-dot"></div>
              <div class="timeline-content card">
                <div class="timeline-year">{{ item.year }}</div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 联系方式 -->
        <div class="contact-section card">
          <h2>联系我</h2>
          <p class="contact-desc">欢迎通过以下方式与我取得联系</p>
          <div class="contact-links">
            <div class="contact-item">
              <el-icon :size="20"><Message /></el-icon>
              <span>微信：wangzhe_099</span>
            </div>
            <div class="contact-item">
              <el-icon :size="20"><Promotion /></el-icon>
              <span>邮箱：hello@wangzhe.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Cpu, Promotion, DataLine, MagicStick, Message, TrendCharts } from '@element-plus/icons-vue'

const skills = [
  { title: 'AI 大模型应用', level: 90, color: '#007bff', icon: 'Cpu' },
  { title: '内容营销', level: 85, color: '#28a745', icon: 'Promotion' },
  { title: '数据分析', level: 80, color: '#fd7e14', icon: 'DataLine' },
  { title: '个人品牌', level: 88, color: '#e83e8c', icon: 'MagicStick' },
  { title: '社群运营', level: 82, color: '#6f42c1', icon: 'TrendCharts' }
]

const timeline = [
  { year: '2026', title: '个人IP网站上线', desc: '启动个人品牌网站建设，系统化输出知识内容。' },
  { year: '2025', title: 'AI创业实践', desc: '深入AI应用领域，帮助多个企业完成AI落地项目。' },
  { year: '2024', title: '知识付费探索', desc: '开设知识星球，积累首批核心粉丝，验证知识付费模式。' },
  { year: '2023', title: 'AI技术深耕', desc: '系统学习大模型、Prompt Engineering 等前沿技术。' },
  { year: '2022', title: '内容创作起步', desc: '开始在各大平台发布AI和营销相关内容。' }
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
  padding: 80px 0;
  text-align: center;
}

.about-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
}

.about-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero h1 {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
}

.hero-tagline {
  font-size: 18px;
  opacity: 0.85;
}

.page-content {
  padding: 60px 0;
}

.about-intro {
  padding: 40px;
  margin-bottom: 60px;
}

.about-intro h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.intro-content p {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 16px;
}

.skills-section {
  margin-bottom: 60px;
  text-align: center;
}

.skills-section .section-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
}

.skill-card {
  text-align: center;
  padding: 24px 16px;
}

.skill-card h3 {
  font-size: 16px;
  margin: 12px 0 16px;
  color: #333;
}

/* 时间线 */
.timeline-section {
  margin-bottom: 60px;
  text-align: center;
}

.timeline-section .section-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
}

.timeline {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #007bff;
}

.timeline-item {
  position: relative;
  margin-bottom: 24px;
}

.timeline-dot {
  position: absolute;
  left: -26px;
  top: 20px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #007bff;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #007bff;
}

.timeline-content {
  text-align: left;
  padding: 20px;
}

.timeline-year {
  font-size: 14px;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 8px;
}

.timeline-content h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
}

.timeline-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* 联系方式 */
.contact-section {
  text-align: center;
  padding: 40px;
}

.contact-section h2 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #333;
}

.contact-desc {
  font-size: 15px;
  color: #999;
  margin-bottom: 24px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #555;
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 28px;
  }
}
</style>
