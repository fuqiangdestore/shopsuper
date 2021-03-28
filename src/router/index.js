import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/home/Home.vue')
const Category = () => import('../view/category/Category.vue')
const Cart = () => import('../view/cart/Cart.vue')
const Profile = () => import('../view/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]


// export default router = new VueRouter({
//   mode: 'history',
//   routes
// })
// 3.创建路由对象

const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
