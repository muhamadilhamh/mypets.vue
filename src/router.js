import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
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
import UpdateMoment from './components/UpdateMoment.vue'
import Blank from './views/Blank.vue'

import UpdateAdoption from './components/UpdateAdoption.vue'
import UpdateProfile from './components/UpdateProfile.vue'
import EditProfile from './components/EditProfile.vue'
import Register from './components/Register.vue'
import DogConversion from './views/DogConversion.vue'
import CatConversion from './views/CatConversion.vue'
import BreedsCat from './views/BreedsCat.vue'
import BreedsDog from './views/BreedsDog.vue'
import DogDetail from './views/DogDetail.vue'
import CatDetail from './views/CatDetail.vue'
import AdoptionDetail from './views/AdoptionDetail.vue'
import MomentDetail from './views/MomentDetail.vue'
import CareDetail from './views/CareDetail.vue'
import ArticleDetail from './views/ArticleDetail.vue'
import Profile from './views/Profile.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true
      }
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
      path: '/blank',
      name: 'blank',
      component: Blank
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
      path : '/breeds/cat',
      name: 'breedscat',
      component : BreedsCat
    },
    {
      path : '/breeds/dog',
      name: 'breedsdog',
      component : BreedsDog
    },
    {
      path : '/breeds/dog/:slug',
      name: 'dogdetail',
      component : DogDetail
    },
    {
      path: '/breeds/cat/:slug',
      name: 'catdetail',
      component: CatDetail
    },
    {
      path: '/adoption/:id_adoption/details',
      name: 'adoptiondetail',
      component: AdoptionDetail
    },
    {
      path: '/moment/:id_moment/details',
      name: 'momentdetail',
      component: MomentDetail
    },
    {
      path: '/caredetail',
      name: 'caredetail',
      component: CareDetail,
    },
    {
      path: '/article/:id_article/detail',
      name: 'articledetail',
      component: ArticleDetail,
      
    },
    {
      path: '/uploadadoption',
      name: 'uploadadoption',
      component: UploadAdoption,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/:id/edit',
      name: 'updateprofile',
      component: UpdateProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/uploadmoment',
      name: 'uploadmoment',
      component: UploadMoment,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/moment/:id/edit',
      name: 'updatemoment',
      component: UpdateMoment,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/adoption/:id_adoption/edit',
      name: 'updateadoption',
      component: UpdateAdoption,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/uploadvaccine',
      name: 'uploadvaccine',
      component: UploadVaccine,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: EditProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: Profile,
    },
    { path: '/*', 
      component: Blank ,
      meta: {
        notFound: true
      }  
  },
  {
    path: '/error', 
      component: Blank ,
  }
  ]
})


router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn && store.getters.user) {
      next()
      return
    }
    console.log(store.getters.user)
    next('/login')
  }
 

  if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  }

  next()
})
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


export default router