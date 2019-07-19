<template>
   <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe653;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe614;</span>
      输入城市/景点/游玩主题
      </div>
    <div class="header-right">城市
      <span class="iconfont arrow-icon">&#xe771;</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
// 1rem = html font-size = 50px
@import '~@/assets/styles\varibles.styl';
.header
  display flex
  line-height .86rem
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
    width 1.24rem
    text-align center
    .arrow-icon
      font-size .24rem
      margin-left -.04rem
</style>


