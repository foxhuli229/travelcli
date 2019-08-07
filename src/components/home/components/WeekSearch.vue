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
        <swiper-slide v-for="(item, index) of weekimgList" :key="index">
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
      weekimgList: [{
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=41794&from=as_recommend_sight",
        topimgUrl: "http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1805/ad/ad507355a167f587a3.img.jpg_250x250_608b4e13.jpg",
        title: '重庆长江索道',
        pirce: '￥28'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=193527&from=as_recommend_sight",
        topimgUrl: "http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_250x250_45ab93e6.jpg",
        title: '武隆天坑地缝国家地质公园',
        pirce: '￥48'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=4522&from=as_recommend_sight",
        topimgUrl: "http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png",
        imgUrl: "http://img1.qunarzz.com/sight/p0/201403/07/6457ef01e33f69234f30949a340f2f56.jpg_250x250_03994b45.jpg",
        title: '重庆海昌加勒比海水世界',
        pirce: '￥108'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=40414&from=as_recommend_sight",
        topimgUrl: "",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1810/36/36ed80c6e147d019a3.img.png_250x250_d039f35c.png",
        title: '重庆两江夜游',
        pirce: '￥138'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=33744&from=as_recommend_sight",
        topimgUrl: "",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1805/93/93a185e4b726bda0a3.img.jpg_250x250_1dd1e451.jpg",
        title: '佛影峡生态旅游区',
        pirce: '￥68'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=459472&from=as_recommend_sight",
        topimgUrl: "",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1606/b0/b06aacf9a3ce5f8ce2.img.jpg_250x250_e2667623.jpg",
        title: '龙浒峡漂流',
        pirce: '￥158'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=14770&from=as_recommend_sight",
        topimgUrl: "",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_250x250_2a9d3bd3.jpg",
        title: '武隆天生三桥风景区',
        pirce: '￥200'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=455388&from=as_recommend_sight",
        topimgUrl: "",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1803/b9/b9bc15fc941a2e8ba3.img.jpg_250x250_567f9b77.jpg",
        title: '梦幻奥陶纪',
        pirce: '￥168'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=465379&from=as_recommend_sight",
        topimgUrl: "",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_250x250_0aa87bab.png",
        title: '重庆欢乐谷',
        pirce: '￥110'
      },
      {
        linkUrl: "http://touch.piao.qunar.com/touch/detail.htm?id=459633&from=as_recommend_sight",
        topimgUrl: "",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1606/ee/ee6fc1161ebc1215e2.water.jpg_250x250_e5cef2db.jpg",
        title: '重庆冰巴水世界',
        pirce: '￥118'
      }]
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


