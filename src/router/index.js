import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'

Vue.use(VueRouter)

const routes = [{
  name:'login',
  path:'/login',
  component:Login
},
{
  name:'home',
  path:'/',
  component:Home
}]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
