import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '王者 - 个人IP网站' }
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    component: () => import('@/views/Knowledge.vue'),
    meta: { title: '知识库 - 王者' }
  },
  {
    path: '/writing',
    name: 'Writing',
    component: () => import('@/views/Writing.vue'),
    meta: { title: '短文写作 - 王者' }
  },
  {
    path: '/ai-practice',
    name: 'AiPractice',
    component: () => import('@/views/AiPractice.vue'),
    meta: { title: 'AI落地实战 - 王者' }
  },
  {
    path: '/alliance',
    name: 'Alliance',
    component: () => import('@/views/Alliance.vue'),
    meta: { title: '王者联盟 - 王者' }
  },
  {
    path: '/planet',
    name: 'Planet',
    component: () => import('@/views/Planet.vue'),
    meta: { title: '加入星球 - 王者' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: '关于我 - 王者' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || '王者 - 个人IP网站'
  next()
})

export default router
