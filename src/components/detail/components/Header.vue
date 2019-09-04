<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="ShowAbs">
      <div class="iconfont header-bas-back">&#xe653;</div>
    </router-link>
    <div class="header-fixed" v-show="!ShowAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe653;</div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DeatilHeader",
  data() {
    return {
      ShowAbs: true,
      opacityStyle: 0
    };
  },
  methods: {
    //判断是否显示to，并且实现渐隐渐现的效果
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        //实现渐隐渐现的效果
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.ShowAbs = false;
      } else {
        this.ShowAbs = true;
      }
    }
  },
  activated() {
    console.log("activated");
    //被绑定到全局组件中。错误方法,当该页面展示的时候，进行绑定
    window.addEventListener("scroll", this.handleScroll);
  },
  //keep-alive 组件停用时调用。 该组件被隐藏或者替换的时候。
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgb(0, 0, 0, 0.8);

  .header-bas-back {
    color: #ffffff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  background: $bgColor;
  font-size: 0.32rem;
  ellipsis();

  .header-fixed-back {
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
  }
}
</style>