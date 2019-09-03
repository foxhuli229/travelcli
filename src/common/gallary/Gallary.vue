// 画廊组件-轮播
<template>
  <div class="container"
    @click="handleGallaryClick">
      <div class="wrapper">
        <swiper 
        :options="swiperOptions">
            <!-- slides -->
            <swiper-slide 
                v-for="(item, index) in imgs"
                :key="index">
                <img 
                    :src="item" 
                    class="gallary-img"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data () {
        return {
            swiperOptions: {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
                observer:true,
                observeParents:true,
            },
        }
    },
    methods: {
        //点击画廊空白区域，隐藏画廊
       handleGallaryClick() {
           this.$emit('close')
       }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container {
    overflow inherit;
}
.container {
    display flex;
    flex-direction column;
    justify-content center;
    z-index 99;
    position fixed;
    left 0;
    right 0;
    top 0;
    background #000;
    height 100%;

    .wrapper {
        width 100%;
        height 0;
        padding-bottom 100%;

        .gallary-img {
            width 100%;
        }

        .swiper-pagination {
            color #ffffff;
            bottom -4.5rem;
        }
    }
}
</style>
