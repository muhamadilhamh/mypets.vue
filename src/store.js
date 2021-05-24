import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: null,
        isLoggedIn: false, 
    },plugins: [createPersistedState()],
    mutations: {
        set_user (state, data) {
            state.user = data
            state.isLoggedIn = true
          }, 
          reset_user (state) {
            state.user = null
            state.isLoggedIn = false
          },
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
        get_breeds(state,payload){
            state.breeds = payload
        }
    },
    actions: {
        login({ dispatch, commit }, data) {
            return new Promise((resolve, reject) => { 
              axios.post('http://localhost:8000/api/login', data)
               .then(response => {
                 const token = response.data.access_token  
                 localStorage.setItem('token', token) 
                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                 dispatch('get_user')
                 resolve(response)
               })
               .catch(err => {
                 commit('reset_user')  
                 localStorage.removeItem('token')
                 reject(err)
              })
            })
          },
          async get_user({commit}){ 
            if(!localStorage.getItem('token')){
              return
            }
            try{ 
              let response = await axios.get('http://localhost:8000/api/user')
                commit('set_user', response.data)
            } catch (error){
                commit('reset_user') 
                delete axios.defaults.headers.common['Authorization']
                localStorage.removeItem('token')
                return error
            } 
          },
        register({
            commit
        }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({
                        url: 'http://localhost:8000/api/signup',
                        data: user,
                        method: 'POST'
                    })
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
             commit('reset_user')
             localStorage.removeItem('token')
             delete axios.defaults.headers.common['Authorization']
             resolve()
            })
        }
    },
    getters: {
        isLoggedIn (state){
            return state.isLoggedIn
          },
          user (state) {
            if(state.user != null){
            return state.user
            }else {
                return 'guest'
            }
          }
        /*isLoggedIn: state => !!state.token,
        authStatus: state => state.status,*/
    }
})