// THIS FILE CONTROLS NAVIGATION AROUND COMPONENTS AND SPECIFIES URLS

import Vue from 'vue'
import router from 'vue-router'
import matches from './views/Matches.vue'
import table from './views/Table.vue'
import chatLogin from './views/ChatLogin.vue'

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

        // path: '/allteams',
        // name: 'allteams',
        // // route level code-splitting
        // // this generates a separate chunk (about.[hash].js) for this route
        // // which is lazy-loaded when the route is visited.
        // component: () => import('./views/AllTeams.vue')
  
  
    },
    {
      path: '/chatlogin',
      name: 'ChatLogin',
      component: chatLogin
    }
  ]
})
