<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg" :alt="this.singtName" />
      <div class="banner-info">
        <div class="banner-title">{{singtName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6df;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>

    <!-- 渐隐渐现的效果 -->
    <fade-animation>
      <!-- 画廊 -->
      <common-gallary 
          :imgs="gallaryImgs" 
          v-show="showGallary" 
          @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
//引用自定义的画廊-轮播
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    singtName: {
      type: String
    },
    bannerImg: {
      type: String
    },
    gallaryImgs: {
      type: Array
    }
  },
  data() {
    return {
      showGallary: false //判断是否显示图片画廊
    };
  },
  methods: {
    //点击图片，打开图片画廊
    handleBannerClick() {
      this.showGallary = true;
    },
    //点击画廊空白区域，关闭画廊
    handleGallaryClose() {
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