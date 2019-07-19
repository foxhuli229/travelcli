<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
            </div>
            <p>热门景点</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
.icons
    height 0
    overflow hidden
    padding-bottom 50%
    background-color green
    .icon
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        // background-color red
        position relative
        .icon-img
            position absolute
            left 0
            right 0
            top 0
            bottom .44rem
            .icon-imgcontent
                height 100%
</style>


