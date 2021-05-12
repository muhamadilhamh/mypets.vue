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
import UploadAdoption from './components/UploadAdoption.vue'
import UploadMoment from './components/UploadMoment.vue'
import UploadVaccine from './components/UploadVaccine.vue'
import EditProfile from './components/EditProfile.vue'
import Register from './components/Register.vue'
import DogConversion from './views/DogConversion.vue'
import CatConversion from './views/CatConversion.vue'
import BreedsCat from './views/BreedsCat.vue'
import BreedsDog from './views/BreedsDog.vue'
import DogDetail from './views/DogDetail.vue'
import CatDetail from './views/CatDetail.vue'
import AdoptionDetail from './views/AdoptionDetail.vue'
import CareDetail from './views/CareDetail.vue'
import ArticleDetail from './views/ArticleDetail.vue'
import Profile from './views/Profile.vue'


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
    {
      path : '/dogconversion',
      name: 'dogconversion',
      component: DogConversion
    },
    {
      path : '/catconversion',
      name: 'catconversion',
      component : CatConversion
    },
    {
      path : '/breedscat',
      name: 'breedscat',
      component : BreedsCat
    },
    {
      path : '/breedsdog',
      name: 'breedsdog',
      component : BreedsDog
    },
    {
      path : '/breeds/dog/:slug',
      name: 'dogdetail',
      component : DogDetail
    },
    {
      path: '/catdetail',
      name: 'catdetail',
      component: CatDetail
    },
    {
      path: '/adoptiondetail',
      name: 'adoptiondetail',
      component: AdoptionDetail
    },
    {
      path: '/caredetail',
      name: 'caredetail',
      component: CareDetail,
    },
    {
      path: '/articledetail',
      name: 'articledetail',
      component: ArticleDetail,
    },
    {
      path: '/uploadadoption',
      name: 'uploadadoption',
      component: UploadAdoption,
    },
    {
      path: '/uploadmoment',
      name: 'uploadmoment',
      component: UploadMoment,
    },
    {
      path: '/uploadvaccine',
      name: 'uploadvaccine',
      component: UploadVaccine,
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: EditProfile,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
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