import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PastOrdersView from '../views/PastOrdersView.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'ProductView',
    component: ProductsView
  },
  {
    path: '/past-orders',
    name: 'PastOrdersView',
    component: PastOrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
