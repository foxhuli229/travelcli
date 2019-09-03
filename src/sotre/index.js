// vuex 库
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state' //设置state值
import mutations from './mutations' //设置mutations值
import actions from './actions' //设置actions值

Vue.use(Vuex)

//整合后
export default new Vuex.Store ({
  state: state,
  //组件之间的传值可以省略此步骤，不过建议不省略,则直接使用commit提交
  // actions: actions,
  mutations: mutations,
  // 类似计算属性
  getters: {
    doubleCity (state) {
      return state.city + " " + state.city;
    }
  }

})

// 整合前
// let defaultCity = "重庆"
// //用于一些浏览器，若不try/catch则会报错
// try {
//   if(localStorage.city) {
//     defaultCity = localStorage.city;
//   }
// } catch (error) {
//    // continue regardless of error
// }
// export default new Vues.Store ({
//   state: defaultCity,
//   //组件之间的传值可以省略此步骤，不过建议不省略,则直接使用commit提交
//   actions: {
//     changeCity (ctx, city) { //ctx:为点击组件
//       ctx.commit('changeCity', city);
//     }
//   },
//   mutations: {
//     changeCity (state,city) {
//       state.city = city;
//       try {
//         localStorage.city = city;
//       } catch (error) {
//          // continue regardless of error
//       }
//     }
//   }
// })