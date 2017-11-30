// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './element-ui'
import axios from '@/config/axios'
import VueAxios from 'vue-axios'
import KalixBase from 'kalix-base'

Vue.use(VueAxios, axios)
Vue.use(KalixBase)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
