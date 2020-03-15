// 字母表
<template>
  <ul class="list">
      <li 
        class="item" 
        v-for="(item, key) of letters"
        :key="key"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >{{item}}</li>
  </ul>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
    name: 'CityAplhabet',
    props: {
      cities: {
        type: Object
      }
    },
    data() {
      return {
          touchStatus: false,
          startY: 0,
          timer: null
      }
    },
    //钩子函数
    updated () {
      this.startY = this.$refs['A'][0].offsetTop;  //得到A到top之间的差值，74px
    },
    //计算属性
    computed: {
      letters () {
        const letters = [];
        for( let i in this.cities) {
          letters.push(i);
        }
        return letters;
        //output: ['A', 'B', 'C']
      }
    },
    methods: {
      //当手指点击屏幕时触发的事件
      handleLetterClick (e) {
        this.$emit('change', e.target.innerText);
        // console.log(e.target.innerText)
      },

      //当手指触摸屏幕时触发事件
      handleTouchStart () {
        this.touchStatus = true;
      },

      //手指在屏幕上移动时触发
      handleTouchMove (e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          //延迟
          this.timer = setTimeout(() => {
              const touchY = e.touches[0].clientY - 79; //79 = header+input，得到 当前滑动的字母距离 header的高度
              const index = Math.floor((touchY - this.startY) / 20); //20：每个字母的高度
              if (index >= 0 && index < this.letters.length) {
                this.$emit('change', this.letters[index])
              }
          }, 16)
        }
      },

      //手指离开屏幕时触发
      handleTouchEnd () {
        this.touchStatus = false;
      }
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
