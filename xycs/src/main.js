import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import VueLazyload from 'vue-lazyload'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(Swiper)
Vue.use(VueLazyload,{
  preLoad:1.3,
  loading:require('./img/timg.gif'),
  attempt:1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
