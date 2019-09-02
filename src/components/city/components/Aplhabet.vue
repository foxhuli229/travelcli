<template>
  <ul class="list">
      <li 
        class="item" 
        v-for="(item, key) of cities"
        :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
    name: 'CityAplhabet',
    props: {
      cities: Object
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';
.list {
  display flex;
  flex-direction column;
  justify-content center;
  position absolute;
  top 1.58rem;
  right 0;
  bottom 0;
  width .4rem;
  text-align center;

  .item {
    line-height .4rem;
    height .4rem;  
    color $bgColor;
  }
}
</style>
