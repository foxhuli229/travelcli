import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/axios2-2',
            name: 'axios请求方法',
            component: ()=> import('@/components/home/views/axios2-2.vue') //懒加载，只有访问改页面，才加载组件
        },
        {
            path: '/city',
            name: '城市列表',
            component: () => import("@/components/city/City.vue")
        }
    ]
})