import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import {Icon} from 'vant'
// import Swiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Icon)
// Vue.use(Swiper)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
