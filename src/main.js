import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
//全局公共样式
import '@/assets/css/reset.css'

import MyServerHttp from './plugins/http.js'
Vue.use(MyServerHttp)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
