<template>
  <div class="header">
      城市选择
      <router-link to='/'>
            <div class="iconfont header-back">&#xe653;</div>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped> 
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';
.header {
    overflow hidden;
    height: $headerHeight;
    line-height $headerHeight;
    text-align center;
    color #ffffff;
    background $bgColor;
    font-size .32rem;
    position relative;

    .header-back {
        width .64rem;
        text-align center;
        font-size .4rem;   
        position absolute;
        left  0;
        top 0;
        color #fff;
    }
}

</style>