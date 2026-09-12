import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import UsersView from '../views/UsersView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/forgot-password',
      component: ForgotPasswordView,
    },
    {
      path: '/reset-password',
      component: ResetPasswordView,
    },
    {
      path: '/dashboard',
      component: DashboardView,
    },
    {
      path: '/register',
      component: RegisterView,
  },
    {
      path: '/users',
      component: UsersView,
    },
  ],
})


router.beforeEach(async (to) => {
  const token = localStorage.getItem('access_token')

  const protectedRoutes = ['/dashboard', '/users']

  if (!protectedRoutes.includes(to.path)) {
    return
  }

  if (!token) {
    return '/login'
  }

  const API_URL = import.meta.env.VITE_API_URL

  const response = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    localStorage.removeItem('access_token')
    return '/login'
  }
})


export default router
