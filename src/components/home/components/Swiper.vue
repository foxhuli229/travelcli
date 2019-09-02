<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSiwper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) of list" :key="index">
                <img :src="item.imgUrl" class="swiper-img"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: {
            type: Array
        }
    },
    data() {
        return {
            swiperOption: {
                loop: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets'
                }
            },
        }
    },
    computed: {
        showSiwper() {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background-color #ffffff
.wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 26.05%
    .swiper-img
        width 100%
</style>


