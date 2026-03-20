<template>
  <div class="writing-page">
    <section class="page-hero">
      <div class="container">
        <h1>短文写作</h1>
        <p>用简短的文字，记录思考与洞察</p>
      </div>
    </section>

    <section class="page-content">
      <div class="container">
        <div class="writing-list">
          <div class="writing-item card" v-for="item in writings" :key="item.title">
            <div class="writing-date">
              <div class="date-day">{{ item.day }}</div>
              <div class="date-month">{{ item.month }}</div>
            </div>
            <div class="writing-body">
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
              <div class="writing-tags">
                <el-tag v-for="tag in item.tags" :key="tag" size="small" type="info">{{ tag }}</el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Writing {
  day: string
  month: string
  title: string
  content: string
  tags: string[]
}

const writings = ref<Writing[]>([
  {
    day: '20',
    month: '3月',
    title: '关于坚持这件小事',
    content: '很多人问我怎么做到持续输出的，其实答案很简单——把它变成习惯，而不是任务。当你不再纠结"今天写不写"的时候，坚持就自然发生了。',
    tags: ['思考', '成长']
  },
  {
    day: '18',
    month: '3月',
    title: 'AI不会取代你，但会用AI的人会',
    content: '这句话说了很久了，但真正付诸行动的人还是少数。关键不是学多少工具，而是改变思维方式——遇到问题先想：AI能不能帮我更快地完成？',
    tags: ['AI', '认知']
  },
  {
    day: '15',
    month: '3月',
    title: '个人品牌的本质是信任',
    content: '你不需要完美，你需要真实。人们追随的不是一个人设，而是一个活生生的、有温度的人。分享你的成功，也分享你的失败。',
    tags: ['个人品牌', '认知']
  },
  {
    day: '10',
    month: '3月',
    title: '做减法的智慧',
    content: '知识太多，工具太多，机会太多——反而让人焦虑。试着砍掉80%的信息源，专注在20%真正重要的事情上。你会发现效率反而提升了。',
    tags: ['效率', '思考']
  },
  {
    day: '05',
    month: '3月',
    title: '社群的本质是连接',
    content: '一个好的社群，不是有多少人，而是有多少人真正产生了连接。质量永远大于数量。花时间经营深度关系，比追求粉丝数有价值得多。',
    tags: ['社群', '认知']
  }
])
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #28a745, #1e7e34);
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

.writing-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.writing-item {
  display: flex;
  gap: 24px;
  padding: 24px;
}

.writing-date {
  flex-shrink: 0;
  width: 60px;
  text-align: center;
  border-right: 2px solid #007bff;
  padding-right: 20px;
}

.date-day {
  font-size: 28px;
  font-weight: 800;
  color: #007bff;
  line-height: 1;
}

.date-month {
  font-size: 13px;
  color: #999;
  margin-top: 4px;
}

.writing-body {
  flex: 1;
}

.writing-body h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.writing-body p {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 12px;
}

.writing-tags {
  display: flex;
  gap: 8px;
}

@media (max-width: 768px) {
  .writing-item {
    flex-direction: column;
    gap: 12px;
  }

  .writing-date {
    border-right: none;
    border-bottom: 2px solid #007bff;
    padding-right: 0;
    padding-bottom: 10px;
    display: flex;
    gap: 8px;
    align-items: baseline;
    width: auto;
  }
}
</style>
