<template>
  <div>
    <div class="search">
      <input 
        type="text" 
        class="search-input" 
        placeholder="请输入城市名或拼音"
        v-model="keyvalue" 
        />
    </div>
    <!-- 搜索后显示列表 -->
    <div 
        class="search-content"
        ref="search"
        v-show="keyvalue">
      <ul>
        <li 
          class="search-item border-bottom"
          v-for="(item, index) of list" 
          :key="index"
           @click="handleCityClick(item.name)"
          >
          {{item.name}}
        </li>
        <li 
          class="search-item border-bottom"
          v-show="hasNoData">
            未能找到匹配城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: "CitySearch",
  props: {
    cities: {
      type: Object
    }
  },
  data () {
    return {
      keyvalue: '',
      list: [],
      timer: null, //节流,
    }
  },
  watch: {
    //监听keyvalue值发生改变，并且查看该值是否在 cities 值存在，
    // 如果存在则 添加到新数组，用于下拉搜索显示
    keyvalue () {
      //节流
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyvalue ) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyvalue) > -1 || 
                  value.name.indexOf(this.keyvalue) > -1) {
                  //表示能够在cities数组中搜索到 搜索框输入的值
                  result.push(value);
              }
            });
          }
          this.list = result;
      }, 100)
    }
  },
  computed: {
    //当页面没有进行搜索的时候，不显示搜索后列表
    hasNoData () {
      return !this.list.length;
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city); 省略前
      // this.$store.commit('changeCity', city); //省略后
      this.changeCity(city);
      this.$router.push('/') //点击后，跳转到首页
      this.keyvalue = "";
    },
    ...mapMutations(['changeCity'])
  },
  //钩子
   mounted () {
    //滑动
    this.scroll = new Bscroll(this.$refs.search)
  }

};
</script> 

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.1rem;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }

  .search-content {
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: green;
  }
}

.search-content {
  overflow: hidden;
  z-index: 1;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eeeeee;

  .search-item {
    line-height .62rem;
    height .62rem;
    color #666;
    background #ffffff;
    padding-left .2rem;
  }
}
</style>