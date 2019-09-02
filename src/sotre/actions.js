export default {
  changeCity (ctx, city) { //ctx:为点击组件
    ctx.commit('changeCity', city);
  }
}