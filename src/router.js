import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Care from './views/Care.vue'
import Ageconversion from './views/Ageconversion.vue'
import Article from './views/Article.vue'
import Adoption from './views/Adoption.vue'
import Breeds from './views/Breeds.vue'
import Login from './components/Login.vue'
import Secure from './components/Secure.vue'
import Register from './components/Register.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/care',
      name: 'care',
      component: Care
    },
    {
      path: '/adoption',
      name: 'adoption',
      component: Adoption
    },
    {
      path: '/ageconversion',
      name: 'ageconversion',
      component: Ageconversion
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: Breeds
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router