import Vue, { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import fastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import store from './sotre'

import 'swiper/dist/css/swiper.css'
import './assets/styles/border.css' //1像素的处理
import './assets/styles/reset.css'
import './assets/styles/iconfont/iconfont.css'

Vue.prototype.$axios = axios

createApp(App).use(router).use(store).use(VueAwesomeSwiper).use(fastClick).use(axios).mount('#app')
