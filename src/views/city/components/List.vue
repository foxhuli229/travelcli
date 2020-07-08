<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="aera">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="aera">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
            class="button-wrapper" 
            v-for="item of hot" 
            :key="item.id"
            @click="handleCityClick(item.name)"
            >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- A -->
      <div class="aera" 
        v-for="(item, key) of cities" 
        :key="key"
        :ref="key"
        >
        <div class="title border-topbottom">{{key}}</div>
        <div class="items-list">
          <div 
            class="item border-bottom"
            v-for="innerItem of item" 
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
            >{{innerItem.name}}</div>
        </div>
      </div>
     
   
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex' //映射，{{this.$store.state.city}} 使该代码简化为 this.city
export default {
  name: "CityList",
  props: {
    hot: {
      type: Array
    },
    cities: {
      type: Object
    },
    letter: {
      type: String
    }
  },
  mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    //监听letter值是否发生改变
    letter () {
      if(this.letter) {
        //获取当前的div dom
        const element = this.$refs[this.letter][0];
        // 滑动
        this.scroll.scrollToElement(element);
      }
      // console.log(this.letter)
    }
  },
   computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {

    //选择热门城市
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city); 省略前
      // this.$store.commit('changeCity', city); //省略后
      this.changeCity(city);
      this.$router.push('/') //点击后，跳转到首页
    },
    ...mapMutations(['changeCity'])

  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden; // 为了使用 BetterScroll插件，实现滚动效果，故此多余部分隐藏
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.title {
  line-height: 0.54rem;
  height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666666;
  font-size: 0.26rem;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;

  .button-wrapper {
    float: left;
    width: 33.33%;

    .button {
      margin: 0.1rem;
      padding: 0.1rem 0;
      text-align: center;
      border: 0.02rem solid #ccc;
      border-radius: 0.06rem;
    }
  }
}

.items-list {
  .item {
    line-height: 0.76rem;
    height: 0.76rem;
    color: #666;
    padding-left: 0.2rem;
  }
}
</style>
