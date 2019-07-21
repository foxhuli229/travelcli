<template>
  <div class="weeksearch lazy-load">
    <div class="search-title">
      <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="本周热门榜单">
      <span class="mp-title">本周热门榜单</span>
      <a class="mp-title-more" href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=重庆">
        全部榜单
        <span class="iconfont">&#xe678;</span>
      </a>
    </div>

    <div class="swiper-container">
      <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>I'm Slide 1</swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide>
          <swiper-slide>I'm Slide 5</swiper-slide>
          <swiper-slide>I'm Slide 6</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-scrollbar"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekSearch',
  data() {
    return {
      swiperOption: {
        scrollbar:'.swiper-scrollbar',
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.weeksearch
  background-color #ffffff
  border 1px solid #000
  height 4.02rem
.weeksearch:not(:first-child)
  margin-top: .2rem;
  .search-title
    height 0.94rem
    line-height 1
    position relative
    padding .24rem 0 .26rem
    .mp-title-img
      height .3rem
      width .3rem
      display inline-block
      overflow hidden
      margin-left .2rem
      vertical-align top
    .mp-title
      display inline-block
      margin-left .08rem
      height .44rem
      color #212121
      font-size .32rem
      line-height .44rem
  .search-title .mp-title-more
    position absolute
    top .36rem
    right .32rem
    color #616161
    font-size .24rem
    line-height .28rem
  .mp-group-title .mp-more-icon 
    margin-left .04rem

</style>


