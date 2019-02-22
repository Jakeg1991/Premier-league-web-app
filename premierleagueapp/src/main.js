// THIS FILE RENDERS APP AND MOUNTS IT TO THE DOM
window.$ = window.jQuery = require('jquery');
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from "firebase/app"
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import store from './store'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBN48UcyG0dyP02TGDzbxZolnW_c1lbj7A",
  authDomain: "testchatdatabase-57dbd.firebaseapp.com",
  databaseURL: "https://testchatdatabase-57dbd.firebaseio.com",
  projectId: "testchatdatabase-57dbd",
  storageBucket: "testchatdatabase-57dbd.appspot.com",
  messagingSenderId: "46065127875"
};
firebase.initializeApp(config);

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')