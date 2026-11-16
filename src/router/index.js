import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cim',
      component: () => import('@/views/Content.vue'),
    },
    {
      path: '/commu_management',
      name: 'community',
      component: () => import('@/views/CommunityManagement.vue'),
    },
    {
      path: '/security_monitoring',
      name: 'security',
      component: () => import('@/views/SecurityMonitoring.vue'),
    },
    {
      path: '/energy_detection',
      name: 'energy',
      component: () => import('@/views/EnergyDetection.vue'),
    },
    {
      path: '/energy_save',
      name: 'energy-saving',
      component: () => import('@/views/EnergySaving.vue'),
    },
  ],
})

export default router
