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
      component: Home,
      meta : {
        title : 'Home - Mypets'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true,
        title : 'Login - Mypets'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        guest: true,
        title : 'Register - Mypets'
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
      component: About,
      meta : {
        title : 'About Us - Mypets'
      }
    },
    {
      path: '/care_training',
      name: 'care',
      component: Care,
      meta : {
        title : 'Care & Training - Mypets'
      }
    },
    {
      path: '/adoption',
      name: 'adoption',
      component: Adoption,
      meta : {
        title : 'Adoption - Mypets'
      }
    },
    {
      path: '/ageconversion',
      name: 'ageconversion',
      component: Ageconversion,
      meta : {
        title : 'Age Conversion - Mypets'
      }
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      meta : {
        title : 'Article - Mypets'
      }
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: Breeds
      ,
      meta : {
        title : 'Breeds - Mypets'
      }
    },
    {
      path : '/dogconversion',
      name: 'dogconversion',
      component: DogConversion
      ,
      meta : {
        title : 'Dog Age Conversion - Mypets'
      }
    },
    {
      path : '/catconversion',
      name: 'catconversion',
      component : CatConversion,
      meta : {
        title : 'Cat Age Conversion - Mypets'
      }
    },
    {
      path : '/breeds/cat',
      name: 'breedscat',
      component : BreedsCat,
      meta : {
        title : 'Cat Breeds - Mypets'
      }
      
    },
    {
      path : '/breeds/dog',
      name: 'breedsdog',
      component : BreedsDog,
      meta : {
        title : 'Dog Breeds - Mypets'
      }
    },
    {
      path : '/breeds/dog/:slug',
      name: 'dogdetail',
      component : DogDetail,
      meta : {
        title : 'Dog Information - Mypets'
      }
    },
    {
      path: '/breeds/cat/:slug',
      name: 'catdetail',
      component: CatDetail,
      meta : {
        title : 'Cat Information - Mypets'
      }
    },
    {
      path: '/adoption/:id_adoption/details',
      name: 'adoptiondetail',
      component: AdoptionDetail,
      meta : {
        title : 'Adoption Details - Mypets'
      }
    },
    {
      path: '/moment/:id_moment/details',
      name: 'momentdetail',
      component: MomentDetail,
      meta : {
        title : 'About Moment - Mypets'
      }
    },
    {
      path: '/care_training/:id_care/details',
      name: 'caredetail',
      component: CareDetail,
      meta : {
        title : 'Care & Training - Mypets'
      }
    },
    {
      path: '/article/:id_article/detail',
      name: 'articledetail',
      component: ArticleDetail,
      meta : {
        title : 'Article Information - Mypets'
      }
      
    },
    {
      path: '/uploadadoption',
      name: 'uploadadoption',
      component: UploadAdoption,
      meta: {
        requiresAuth: true,
        title : 'Upload Adoption - Mypets'
      }
    },
    {
      path: '/profile/:id/edit',
      name: 'updateprofile',
      component: UpdateProfile,
      meta: {
        requiresAuth: true,
        title : 'Update Profile Information - Mypets'
      }
    },
    {
      path: '/uploadmoment',
      name: 'uploadmoment',
      component: UploadMoment,
      meta: {
        requiresAuth: true,
        title : 'Upload Moment  - Mypets'
      }
    },
    {
      path: '/moment/:id/edit',
      name: 'updatemoment',
      component: UpdateMoment,
      meta: {
        requiresAuth: true,
        title : 'Update Moment  - Mypets'
      }
    },
    {
      path: '/adoption/:id_adoption/edit',
      name: 'updateadoption',
      component: UpdateAdoption,
      meta: {
        requiresAuth: true,
        title : 'Update Adoption  - Mypets'
      }
    },
    {
      path: '/uploadvaccine',
      name: 'uploadvaccine',
      component: UploadVaccine,
      meta: {
        requiresAuth: true,
        title : 'Upload Vaccine  - Mypets'
      }
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: EditProfile,
      meta: {
        requiresAuth: true,
        title : 'Edit Profile - Mypets'
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
        notFound: true,
        title : 'Page Not Found - Mypets'
      }  
  },
  {
    path: '/error', 
      component: Blank ,
      title : 'Page Not Found - Mypets'
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