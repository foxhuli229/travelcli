<template>
  <div class="icons-content">
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-imgcontent" :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <ul class="icon-bottom">
      <li>
        <span class="iconfont">&#xe60f;</span>
        定位失败
      </li>
      <li>
        <span class="iconfont">&#xe633;</span>
        必有榜单
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "HomeIcons",
  props: {
    list: Array,
  },
  setup(props) {
    const swiperOption = {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    };

    const pages = computed(() => {
      const pages = [];
      props.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });

      return pages;
    });

    return { pages, swiperOption };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons-content
    height auto
    background-color #ffffff
    .icons ::v-deep .swiper-container
        height: 0
        padding-bottom: 55%
    .icons ::v-deep .swiper-pagination-bullets
        bottom 0px
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
    .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-imgcontent
            display: block
            margin: 0 auto
            height: 100%
    .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
.icon-bottom
    width: 100%
    background-color: #fff
    display: -webkit-box
    border-top: 1px solid #e0e0e0
    transform-origin: 0 0;
    margin-top: 0.1rem;
.icon-bottom li
    width 0
    height: .98rem
    font-size: .28rem
    color: #212121
    line-height: .98rem
    text-align: center
    -webkit-box-flex: 1;
    ellipsis()
.icon-bottom li:nth-child(2)
    border-left 1px solid #e0e0e0
    transform-origin: 0 0;
</style>
