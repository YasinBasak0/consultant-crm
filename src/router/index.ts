import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import HomeView from '../views/HomeView.vue'
import CustomersView from '@/views/customers/CustomersView.vue'
import LeadsView from '@/views/leads/LeadsView.vue'
import ServicesView from '@/views/services/ServicesView.vue'
import ActiveServicesView from '@/views/active-services/ActiveServicesView.vue'
import CompaniesView from '@/views/companies/CompaniesView.vue'
import SalesView from '@/views/sales/SalesView.vue'
import PaymentsView from '@/views/payments/PaymentsView.vue'
import UsersView from '@/views/users/UsersView.vue'
import PermissionsView from '@/views/permissions/PermissionsView.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'customers',
          name: 'customers',
          component: CustomersView
        },
        {
          path: 'leads',
          name: 'leads',
          component: LeadsView
        },
        {
          path: 'services',
          name: 'services',
          component: ServicesView
        },
        {
          path: 'active-services',
          name: 'active-services',
          component: ActiveServicesView
        },
        {
          path: 'companies',
          name: 'companies',
          component: CompaniesView
        },
        {
          path: 'sales',
          name: 'sales',
          component: SalesView
        },
        {
          path: 'payments',
          name: 'payments',
          component: PaymentsView
        },
        {
          path: 'users',
          name: 'users',
          component: UsersView
        },
        {
          path: 'permissions',
          name: 'permissions',
          component: PermissionsView
        },
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView
        },
      ]
    }
  ]
})

export default router
