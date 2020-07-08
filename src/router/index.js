
import {createRouter, createWebHashHistory} from 'vue-router'


export default createRouter({
    history: createWebHashHistory(),
    
    routes: [
        {
            path: '/',
            name: 'Home',
            component: import("@/views/home/Home")
        },
        {
            path: '/city',
            name: '城市列表',
            component: () => import("@/views/city/City")
        },
        {
            path: '/detail/:id', //动态路由：detail为常量，:id 为变量
            name: "列表详情",
            component: () => import("@/views/detail/Detail")
        }
    ],
    // 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})