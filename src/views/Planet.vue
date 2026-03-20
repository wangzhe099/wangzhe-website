<template>
  <div class="planet-page">
    <section class="page-hero">
      <div class="container">
        <h1>加入星球</h1>
        <p>深度内容首发地，与圈内高手零距离交流</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <!-- 星球介绍 -->
        <div class="planet-intro card">
          <div class="intro-left">
            <div class="planet-badge">⭐ 知识星球</div>
            <h2>王者的 AI 创富圈</h2>
            <p class="intro-desc">
              这是一个专注于 AI 赋能和价值变现的私密社群。在这里你可以获得：
            </p>
            <ul class="benefits-list">
              <li v-for="item in benefits" :key="item">
                <el-icon color="#28a745"><CircleCheckFilled /></el-icon>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="intro-right">
            <div class="join-card">
              <div class="price">
                <span class="price-label">年费会员</span>
                <span class="price-amount">¥199<span class="price-unit">/年</span></span>
              </div>
              <el-button type="primary" size="large" round class="join-btn" @click="handleJoin">
                立即加入
              </el-button>
              <p class="join-note">不满意 3 天内无理由退款</p>
            </div>
          </div>
        </div>

        <!-- 成员评价 -->
        <div class="reviews-section">
          <h2 class="section-title">成员怎么说</h2>
          <div class="reviews-grid">
            <div class="review-card card" v-for="review in reviews" :key="review.name">
              <div class="review-header">
                <div class="review-avatar">
                  <img :src="'https://api.dicebear.com/7.x/initials/svg?seed=' + review.name + '&backgroundColor=007bff&textColor=ffffff'" alt="" />
                </div>
                <div>
                  <div class="review-name">{{ review.name }}</div>
                  <div class="review-role">{{ review.role }}</div>
                </div>
              </div>
              <p class="review-content">"{{ review.content }}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CircleCheckFilled } from '@element-plus/icons-vue'

const benefits = [
  '每周至少 2 篇 AI 落地实战深度教程',
  '一对一问题解答和专属指导',
  '精选 AI 工具和资源包（持续更新）',
  '高质量人脉资源对接',
  '线下活动和闭门分享会优先参与权',
  '原创模板、提示词库、工作流文件'
]

const reviews = [
  {
    name: '张三',
    role: '自媒体博主',
    content: '加入星球一个月，学会了用AI批量生成内容，效率提升了至少5倍。值了！'
  },
  {
    name: '李四',
    role: '创业者',
    content: '在星球里认识了好几个合作伙伴，现在正在一起做AI+营销的项目。圈子太重要了。'
  },
  {
    name: '王五',
    role: '产品经理',
    content: '每次遇到AI相关的技术问题，在星球里提问都能得到很详细的解答。省了我大量研究时间。'
  }
]

const handleJoin = () => {
  // 将来替换为实际的知识星球链接
  window.open('#', '_blank')
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #e83e8c, #d63384);
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

.planet-intro {
  display: flex;
  gap: 40px;
  padding: 40px;
  margin-bottom: 60px;
  align-items: center;
}

.planet-badge {
  display: inline-block;
  background: #fff3cd;
  color: #856404;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
}

.intro-left {
  flex: 1;
}

.intro-left h2 {
  font-size: 28px;
  margin-bottom: 16px;
  color: #333;
}

.intro-desc {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.benefits-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #555;
}

.intro-right {
  flex-shrink: 0;
}

.join-card {
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 16px;
  padding: 40px;
  color: #fff;
  text-align: center;
  min-width: 240px;
  box-shadow: 0 8px 32px rgba(0, 123, 255, 0.3);
}

.price {
  margin-bottom: 24px;
}

.price-label {
  display: block;
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 8px;
}

.price-amount {
  font-size: 42px;
  font-weight: 800;
}

.price-unit {
  font-size: 16px;
  font-weight: 400;
}

.join-btn {
  width: 100%;
  font-size: 18px;
  padding: 14px 0;
  background: #fff !important;
  color: #007bff !important;
  border-color: #fff !important;
}

.join-note {
  margin-top: 12px;
  font-size: 12px;
  opacity: 0.7;
}

.reviews-section {
  text-align: center;
}

.reviews-section .section-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.review-card {
  text-align: left;
  padding: 24px;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.review-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
}

.review-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.review-role {
  font-size: 13px;
  color: #999;
}

.review-content {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  font-style: italic;
}

@media (max-width: 768px) {
  .planet-intro {
    flex-direction: column;
  }
}
</style>
