import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'styles/base.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/*解决移动端点击事件300ms延迟*/
fastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
