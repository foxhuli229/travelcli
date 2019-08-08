import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'

import 'swiper/dist/css/swiper.css'
import './assets/styles/border.css' //1像素的处理
import './assets/styles/reset.css'
import './assets/styles/iconfont/iconfont.css'


Vue.config.productionTip = false

//@代表 src目录下
//用于解决移动端点击事件的延迟，通常会出现300ms左右的延迟 需安装 npm install fastclick --save
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.prototype.$ajax= axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: '<App/>'
// })
