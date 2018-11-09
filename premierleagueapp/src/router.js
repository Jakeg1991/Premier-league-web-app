// THIS FILE CONTROLS NAVIGATION AROUND COMPONENTS AND SPECIFIES URLS

import Vue from 'vue'
import router from 'vue-router'
import matches from './views/matches.vue'
import table from './views/table.vue'
import chatLogin from './views/chatLogin.vue'

Vue.use(router)

export default new router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Matches',
      component: matches
      
    },
    {
      path: '/table',
      name: 'Table',
      component: table
    },
    {
      path: '/chatlogin',
      name: 'Chat Login',
      component: chatLogin
    }
  ]
})
