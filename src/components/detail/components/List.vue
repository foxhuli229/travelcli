<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>

      <div v-if="item.children" class="item-children">
        <!-- //采用递归，可以自己使用自己 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: {
      type: Array
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.item-title {
  line-height: 0.8rem;
  height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;

  .item-title-icon {
    position: relative;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    top: 0.06rem;
    left: 0.1rem;
    background: url('https://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }
}

.item-children {
  padding: 0 0.2rem;
}
</style>