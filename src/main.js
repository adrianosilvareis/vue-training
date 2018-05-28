import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import 'bootstrap/dist/css/bootstrap.min.css'

const render = (h) => h(App);

const instance = new Vue({
  router,
  store,
  render
})

instance.$mount('#app')