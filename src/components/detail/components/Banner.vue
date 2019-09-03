<template>
  <div>
    <div class="banner"
        @click="handleBannerClick"
        >
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_600x330_9eb9410c.jpg"
        alt="武隆天坑地缝国家地质公园"
      />
      <div class="banner-info">
        <div class="banner-title">武隆天坑地缝国家地质公园(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6df;</span>
          4
        </div>
      </div>
    </div>

    <!-- 画廊 -->
    <common-gallary
        :imgs="imgs"
        v-show="showGallary"
        @close="handleGallaryClose"></common-gallary>

  </div>
</template>

<script>
//引用自定义的画廊-轮播
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
  },
  data () {
      return {
          showGallary: false, //判断是否显示图片画廊
          imgs: ['http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_r_800x800_0ca067d7.jpg',
                'http://img1.qunarzz.com/sight/p0/201401/17/72e8ef351fc2129b8e1911fc9d8a6fc3.jpg_r_800x800_0cf2eda1.jpg']
      }
  },
  methods: {
    //点击图片，打开图片画廊  
    handleBannerClick() {
        this.showGallary = true;
    },
    //点击画廊空白区域，关闭画廊
    handleGallaryClose () {
        this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    height: 0.6rem;
    color: #ffffff;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      line-height: 0.4rem;
      height: 0.4rem;
      padding: 0 0.4rem;
      margin-top: 0.14rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
    }

    .banner-icon {
      font-size: 0.24rem;
    }
  }
}
</style>