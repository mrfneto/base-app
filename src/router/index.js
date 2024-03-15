import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './auth.routes'
import adminRoutes from './admin.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Home' }
    },
    ...authRoutes,
    ...adminRoutes
  ]
})
router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} | Base App`

  next()
})

export default router
