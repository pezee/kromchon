import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MonitorView from '../views/MonitorView.vue'
import AccessoryView from '../views/AccessoryView.vue'
import AlarmView from '../views/AlarmView.vue'
import ReportView from '../views/ReportView.vue'
import SetupView from '../views/SetupView.vue'
import HelpView from '../views/HelpView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/monitor',
    name: 'monitor',
    component: MonitorView
  },
  {
    path: '/accessory',
    name: 'accessory',
    component: AccessoryView
  },
  {
    path: '/alarm',
    name: 'alarm',
    component: AlarmView
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView
  },
  {
    path: '/setup',
    name: 'setup',
    component: SetupView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
