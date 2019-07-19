<template>
    <div class="wrapper">
        <swiper :options="swiperOption"  >
            <!-- slides -->
            <swiper-slide v-for="(item,index) of imgList" :key="index">
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
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            imgList: [{
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'
            },
            {
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/ae8987bff39ff10e82675a3643154e66.jpg_750x200_0f187b2e.jpg'
            },
            {
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/6e07f11d492a880c2b5fb9889b3cb008.jpg_750x200_e0e88021.jpg'
            },
            {
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/55f607eaf73751de9821c485f27bf22a.jpg_750x200_e9bb4850.jpg'
            }
            ]
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
    padding-bottom 31.25%
    .swiper-img
        width 100%
</style>


