import { createRouter, createWebHashHistory } from 'vue-router'
import Product from '@/views/Product.vue'


const routes = [
  {
    path: '/',
    name: 'product',
    component: Product
    
  },
  {
    path: '/alldevices',
    name: 'AllDevices',
    component: () => import('../views/AllDevices.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
