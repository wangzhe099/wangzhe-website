<template>
  <footer class="site-footer">
    <div class="container">
      <!-- 快速链接 + 成长日记 -->
      <div class="footer-content">
        <div class="footer-section quick-links">
          <h4>快速链接</h4>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/knowledge">知识库</router-link></li>
            <li><router-link to="/writing">短文写作</router-link></li>
            <li><router-link to="/ai-practice">AI落地实战</router-link></li>
            <li><router-link to="/alliance">王者联盟</router-link></li>
            <li><router-link to="/planet">加入星球</router-link></li>
            <li><router-link to="/about">关于我</router-link></li>
          </ul>
        </div>

        <div class="footer-section growth-log">
          <h4>成长日记</h4>
          <el-table
            :data="currentPageData"
            :row-class-name="tableRowClassName"
            @row-click="handleRowClick"
            style="width: 100%"
            size="small"
            :header-cell-style="{ backgroundColor: '#007bff', color: '#fff', fontSize: '13px' }"
            :cell-style="{ fontSize: '13px' }"
          >
            <el-table-column prop="date" label="日期" width="110" />
            <el-table-column prop="title" label="标题" />
            <el-table-column prop="category" label="分类" width="80" />
          </el-table>
          <div class="pagination-wrap">
            <el-pagination
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="growthLogs.length"
              layout="prev, pager, next"
              small
            />
          </div>
        </div>
      </div>

      <!-- 备案号 -->
      <div class="footer-bottom">
        <p>© {{ currentYear }} 王者 · 版权所有</p>
        <p>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            陕ICP备2025081631号
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface GrowthLog {
  date: string
  title: string
  category: string
}

const currentYear = new Date().getFullYear()
const currentPage = ref(1)
const pageSize = 3
const selectedRowIndex = ref<number | null>(null)

const growthLogs = ref<GrowthLog[]>([
  { date: '2026-03-20', title: '个人IP网站正式上线', category: '里程碑' },
  { date: '2026-03-18', title: '完成网站架构设计与技术选型', category: '开发' },
  { date: '2026-03-15', title: '启动个人IP品牌化项目', category: '规划' },
  { date: '2026-03-10', title: 'AI落地实战专栏第一篇文章发布', category: '内容' },
  { date: '2026-03-05', title: '知识星球会员突破100人', category: '社区' },
  { date: '2026-03-01', title: '王者联盟社群正式成立', category: '社区' },
  { date: '2026-02-25', title: '完成AI+营销课程体系设计', category: '课程' },
  { date: '2026-02-20', title: '发布首篇深度技术文章', category: '内容' },
])

const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return growthLogs.value.slice(start, start + pageSize)
})

const tableRowClassName = ({ rowIndex }: { rowIndex: number }) => {
  if (rowIndex === selectedRowIndex.value) {
    return 'selected-row'
  }
  return ''
}

const handleRowClick = (row: GrowthLog) => {
  const index = growthLogs.value.indexOf(row)
  if (selectedRowIndex.value === index) {
    selectedRowIndex.value = null
  } else {
    selectedRowIndex.value = index
  }
}
</script>

<style scoped>
.site-footer {
  background: #1a1a2e;
  color: #ccc;
  padding: 40px 0 20px;
  margin-top: 60px;
}

.footer-content {
  display: flex;
  gap: 60px;
  margin-bottom: 30px;
}

.footer-section {
  flex: 1;
}

.footer-section h4 {
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
  display: inline-block;
}

.quick-links ul {
  list-style: none;
}

.quick-links li {
  margin-bottom: 10px;
}

.quick-links a {
  color: #ccc;
  transition: color 0.3s;
  font-size: 14px;
}

.quick-links a:hover {
  color: #007bff;
}

/* 成长日记表格样式 */
.growth-log :deep(.el-table) {
  background: transparent !important;
}

.growth-log :deep(.el-table th.el-table__cell) {
  background-color: #007bff !important;
  color: #fff !important;
  border-bottom: none;
}

.growth-log :deep(.el-table tr) {
  background-color: rgba(255, 255, 255, 0.05) !important;
  cursor: pointer;
}

.growth-log :deep(.el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell) {
  background-color: rgba(0, 123, 255, 0.15) !important;
}

.growth-log :deep(.el-table td.el-table__cell) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: #ccc;
}

.growth-log :deep(.selected-row td) {
  border: 2px solid #007bff !important;
  background-color: rgba(0, 123, 255, 0.2) !important;
  box-sizing: border-box;
}

.growth-log :deep(.selected-row) {
  outline: 2px solid #007bff;
}

.growth-log :deep(.el-table::before) {
  background-color: transparent !important;
}

.pagination-wrap {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.growth-log :deep(.el-pagination) {
  --el-pagination-bg-color: rgba(255, 255, 255, 0.05);
  --el-pagination-text-color: #ccc;
  --el-pagination-button-bg-color: rgba(255, 255, 255, 0.1);
  --el-pagination-hover-color: #007bff;
}

.growth-log :deep(.el-pager li.is-active) {
  color: #007bff !important;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 13px;
}

.footer-bottom p {
  margin-bottom: 5px;
}

.footer-bottom a {
  color: #999;
  transition: color 0.3s;
}

.footer-bottom a:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
