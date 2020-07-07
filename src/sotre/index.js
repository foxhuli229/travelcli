import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state' //设置state值
import mutations from './modules/mutations' //设置mutations值
import actions from './modules/actions' //设置actions值

Vue.use(Vuex)

//整合后
export default new Vuex.Store ({
  state: state,
  //组件之间的传值可以省略此步骤，不过建议不省略,则直接使用commit提交
  actions: actions,
  mutations: mutations,
  // 类似计算属性
  getters: {
    doubleCity (state) {
      return state.city + " " + state.city;
    }
  }

})
