import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout.vue'),
    children: [
      // 重置路径
      {
        path: '/',
        redirect: '/home'
      },
      // 首页
      {
        path: '/home',
        component: () => import('@/views/home')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
