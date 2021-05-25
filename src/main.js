import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify';
import VueAxios from 'vue-axios'
import Notifications  from 'vue-notification'
import VueToastr from '@deveodk/vue-toastr'
import VueSweetalert2 from 'vue-sweetalert2';

import 'vue-loading-overlay/dist/vue-loading.css';
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueToastr)
Axios.interceptors.request.use(function (config) {
  store.commit("set_loading", true) //vuex mutation set loading state to true
  return config;
  }, function (error) {
  return Promise.reject(error);
  });
  Axios.interceptors.response.use(function (config) {
    store.commit("set_loading", false) //vuex mutation set loading state to false
    return config;
    }, function (error) {
    store.commit("set_loading", false) 
    return Promise.reject(error);
    });

Vue.prototype.$http = Axios;
Vue.prototype.$image_url = 'http://localhost:8000/storage/'
Vue.use(Notifications );
Vue.use(VueAxios,Axios);
Vue.use(Vuelidate);
Vue.use(VueSweetalert2);

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
store.dispatch('get_user', token)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  
  render: h => h(App)
}).$mount('#app')