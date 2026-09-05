import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import UsersView from '../views/UsersView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

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

export default router
