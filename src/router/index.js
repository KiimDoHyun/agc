import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import treeView from '../components/treeView.vue'
import logIn from '../views/logIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: logIn
  },
  {
    path: '/treeView',
    name: 'TreeView',
    component: treeView
  },
  {
    path: '/treePage',
    name: 'TreePage',
    component: () => import('@/components/treeView.vue')
  },
  {
    path: '/gridView',
    name: 'gridView',
    component: () => import('@/components/gridView.vue')
  },
  {
    path: '/detail/:name',
    name: 'detail',
    component: () => import('@/components/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
