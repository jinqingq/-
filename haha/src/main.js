import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Icon} from 'vant'
import {Swipe,SwipeItem} from 'vant'

Vue.config.productionTip = false

Vue.use(Icon)
Vue.use(Swipe).use(SwipeItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
