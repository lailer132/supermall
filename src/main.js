import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$bus = new Vue()

import MockInt from 'mock/Interceptors'
MockInt()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
