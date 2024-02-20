import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

// Layouts
import { AuthLayout, MainLayout } from '@/layout'

// Components
const HomeView = () => import('@/views/Home/HomeView.vue')
const LoginView = () => import('@/views/Login/LoginView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: MainLayout,
      requiresAuth: false,
      onlyGuestAllowed: false
    }
  },
  {
    path: '/meal-plan-generator',
    name: 'meal',
    component: HomeView,
    meta: {
      layout: MainLayout,
      requiresAuth: false,
      onlyGuestAllowed: false
    }
  },
  {
    path: '/workout-plan-generator',
    name: 'workout',
    component: HomeView,
    meta: {
      layout: MainLayout,
      requiresAuth: false,
      onlyGuestAllowed: false
    }
  },
  {
    path: '/bmr-calculator',
    name: 'bmr',
    component: HomeView,
    meta: {
      layout: MainLayout,
      requiresAuth: false,
      onlyGuestAllowed: false
    }
  },
  {
    path: '/login',
    component: LoginView,
    meta: {
      layout: AuthLayout,
      requiresAuth: false,
      onlyGuestAllowed: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

const isAuthenticated = false

// @ts-expect-error from is unused
router.beforeEach((to, from, next) => {
  const { requiresAuth, onlyGuestAllowed } = to.meta

  if (!isAuthenticated && requiresAuth) next('/login')
  else if (isAuthenticated && onlyGuestAllowed) next('/guide')
  else next()
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
