<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe653;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe614;</span>
      输入城市/景点/游玩主题
    </div>

    <router-link to="/City">
      <div class="header-right">
        {{ city }}
        <span class="iconfont arrow-icon">&#xe771;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters, useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "HomeHeader",
  setup() {
    const store = useStore();
    const city = store.state.city;

    return { city };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles\varibles.styl';
// 1rem = html font-size = 50px
.header
  display flex
  line-height $headerHeight
  height $headerHeight
  background-color $bgColor
  color #ffffff
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex 1
    margin-top .12rem
    height .64rem
    line-height .64rem
    margin-left .2rem
    padding-left .2rem
    background-color #ffffff
    border-radius .1rem
    color: #ccc
  .header-right
    float right
    min-width 1.04rem
    padding 0 0.1rem
    text-align center
    color #fff
    .arrow-icon
      font-size .24rem
      margin-left -.04rem
</style>
