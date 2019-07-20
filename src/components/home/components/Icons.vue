<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide 
                v-for="(page, index) of pages"
                :key="index">
                <div class="icon" 
                    v-for="item of page" 
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{item.title}}</p>
                </div>
            </swiper-slide>
             <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            iconsList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                title: '景点门票'
            },
            {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                title: '故宫'
            },
            {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                title: '北京必游'
            },
            {
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                title: '水上乐园'
            },
            {
                id: '0005',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
                title: '爬长城'
            },
            {
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
                title: '台北水镇'
            },
            {
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                title: '动物植物园'
            },
            {
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
                title: '北京野生动物园'
            },
            {
                id: '0009',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                title: '自然风光'
            }]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconsList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
.icons
    margin-top: .1rem
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
</style>


