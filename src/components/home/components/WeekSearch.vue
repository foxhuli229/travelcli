<template>
  <div class="weeksearch lazy-load">
    <div class="search-title">
      <img
        class="mp-title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
        alt="本周热门榜单"
      />
      <span class="mp-title">本周热门榜单</span>
      <a
        class="mp-title-more"
        href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=重庆"
      >
        全部榜单
        <span class="iconfont">&#xe678;</span>
      </a>
    </div>

    <div class="swiper-container">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of list" :key="index">
          <a class="cont" :href="item.linkUrl">
            <!-- 排名 -->
            <div class="cont-top image-ready" v-if="index < 3">
              <img 
                :src="item.topimgUrl"
                :alt="item.title"
              />
            </div>
            <!-- 图片 -->
            <div class="cont-img image-ready">
              <img
                :src="item.imgUrl"
                :alt="item.title"
              />
            </div>
            <!-- 名称 -->
            <div class="cont-title">{{item.title}}</div>
            <!-- 价格 -->
            <div class="cont-price">
              <span class="price-unit">
                <em class="price-num">{{item.pirce}}</em>
              </span>起
            </div>
          </a>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekSearch",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumnFill : 'row',
        slidesOffsetAfter : 100,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true
        }
      },
    };
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/mixins.styl"

.weeksearch {
  background-color: #ffffff;
  height: 4.02rem;
}

.weeksearch:not(:first-child) {
  margin-top: 0.2rem;

  .search-title {
    height: 0.5rem;
    line-height: 1;
    position: relative;
    padding: 0.24rem 0 0.26rem;

    .mp-title-img {
      height: 0.3rem;
      width: 0.3rem;
      display: inline-block;
      overflow: hidden;
      margin-left: 0.2rem;
      vertical-align: top;
    }

    .mp-title {
      display: inline-block;
      margin-left: 0.08rem;
      height: 0.44rem;
      color: #212121;
      font-size: 0.32rem;
      line-height: 0.44rem;
    }
  }

  .search-title .mp-title-more {
    position: absolute;
    top: 0.36rem;
    right: 0.32rem;
    color: #616161;
    font-size: 0.24rem;
    line-height: 0.28rem;
  }

  .mp-group-title .mp-more-icon {
    margin-left: 0.04rem;
  }
}

.weeksearch .swiper-container {
  height: 3rem;
  overflow: hidden;
  padding: 0 0.24rem;
}

.swiper-container >>> .swiper-slide {
  width: 2.12rem !important;
}

.weeksearch .swiper-container .cont {
  display: block;
  width: 100%;
  height: 100%;

  .cont-top {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    width: 0.84rem;
    height: 0.4rem;
  }

  .image-ready {
    background: none !important;
  }

  .image-ready img {
    opacity: 1;
  }

  .cont-top img {
    width: 100%;
  }

  // 中间图片
  .cont-img {
    overflow: hidden;
    width: 2rem;
    height: 0;
    padding-bottom: 100%;
    background: #f0f5f8;
  }

  .cont-img img {
    width: 100%;
  }

  // 名称
  .cont-title {
    top: 0;
    position: absolute;
    width: 2rem;
    margin-top: 2.12rem;
    color: #212121;
    font-size: 0.24rem;
    line-height: 0.32rem;
    text-align: center;
    ellipsis()
  }

  .cont-price {
    width: 2rem;
    color: #616161;
    font-size: 0.24rem;
    line-height: 0.36rem;
    text-align: center;
    position: absolute;
    bottom: 0;
  }

  .cont-price .price-unit {
    color: #ff8300;
  }
}
</style>


